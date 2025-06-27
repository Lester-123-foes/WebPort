import { users, contacts, type User, type InsertUser, type Contact, type InsertContact } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContact(contact: InsertContact): Promise<Contact>;
  initializeDefaultUser(): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const [contact] = await db
      .insert(contacts)
      .values(insertContact)
      .returning();
    return contact;
  }

  async initializeDefaultUser(): Promise<void> {
    const existingUser = await this.getUserByUsername("JohnlesterCuarto");
    if (!existingUser) {
      await this.createUser({
        username: "JohnlesterCuarto",
        password: "johnlester123",
        email: "jfcuarto.student@asiancollege.edu.ph",
        fullName: "John Lester Ferrer Cuarto"
      });
    }
  }
}

export const storage = new DatabaseStorage();
