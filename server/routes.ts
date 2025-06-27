import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import session from "express-session";
import MemoryStore from "memorystore";

declare module 'express-session' {
  interface SessionData {
    user?: {
      id: number;
      username: string;
    };
  }
}

const MemoryStoreSession = MemoryStore(session);

export async function registerRoutes(app: Express): Promise<Server> {
  // Configure session middleware with memory store
  app.use(session({
    secret: 'john-lester-portfolio-secret',
    resave: false,
    saveUninitialized: false,
    store: new MemoryStoreSession({
      checkPeriod: 86400000 // prune expired entries every 24h
    }),
    cookie: { 
      secure: false, 
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
      httpOnly: true
    }
  }));

  // Initialize default user
  await storage.initializeDefaultUser();

  // Authentication middleware
  const requireAuth = (req: any, res: any, next: any) => {
    if (req.session.user) {
      next();
    } else {
      res.status(401).json({ message: "Authentication required" });
    }
  };

  // Login route
  app.post('/api/login', async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      
      if (!username || !password) {
        return res.status(400).json({ message: "Username and password required" });
      }

      const user = await storage.getUserByUsername(username);
      if (!user || user.password !== password) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      req.session.user = { id: user.id, username: user.username };
      res.json({ message: "Login successful", user: { id: user.id, username: user.username } });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ message: "Login failed" });
    }
  });

  // Logout route
  app.post('/api/logout', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: "Logout failed" });
      }
      res.json({ message: "Logout successful" });
    });
  });

  // Check authentication status
  app.get('/api/auth/user', (req, res) => {
    if (req.session.user) {
      res.json(req.session.user);
    } else {
      res.status(401).json({ message: "Not authenticated" });
    }
  });

  // Contact form submission
  app.post('/api/contact', async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.json({ message: "Contact form submitted successfully", id: contact.id });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ message: "Failed to submit contact form" });
    }
  });

  // Protected dashboard route (example)
  app.get('/api/dashboard', requireAuth, (req, res) => {
    res.json({ message: "Welcome to the dashboard", user: req.session.user });
  });

  const httpServer = createServer(app);
  return httpServer;
}
