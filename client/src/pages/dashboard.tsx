import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useLocation } from "wouter";
import { LogOut, User, Mail, MessageSquare } from "lucide-react";
import { useEffect } from "react";

interface UserData {
  id: number;
  username: string;
}

export default function Dashboard() {
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const queryClient = useQueryClient();

  const { data: user, isLoading, error } = useQuery<UserData>({
    queryKey: ["/api/auth/user"],
    retry: false,
  });

  // Handle authentication redirect in useEffect to avoid state update during render
  useEffect(() => {
    if (!isLoading && !user && error) {
      setLocation("/login");
    }
  }, [isLoading, user, error, setLocation]);

  const logoutMutation = useMutation({
    mutationFn: async () => {
      return await apiRequest("/api/logout", {
        method: "POST",
      });
    },
    onSuccess: () => {
      queryClient.clear();
      toast({
        title: "Logged Out",
        description: "You have been successfully logged out.",
      });
      setLocation("/");
    },
    onError: () => {
      toast({
        title: "Logout Failed",
        description: "There was an error logging out.",
        variant: "destructive",
      });
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <p className="text-slate-600">Redirecting to login...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <User className="text-white" size={20} />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-slate-800">Dashboard</h1>
                <p className="text-sm text-slate-600">Welcome back, {user?.username || 'User'}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                onClick={() => setLocation("/")}
              >
                View Portfolio
              </Button>
              <Button
                variant="ghost"
                onClick={() => logoutMutation.mutate()}
                disabled={logoutMutation.isPending}
                className="text-red-600 hover:text-red-700"
              >
                <LogOut size={18} className="mr-2" />
                {logoutMutation.isPending ? "Logging out..." : "Logout"}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Welcome Card */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="mr-2 text-blue-600" size={20} />
                Portfolio Overview
              </CardTitle>
              <CardDescription>
                Your personal portfolio dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-medium text-blue-900 mb-2">Profile Information</h3>
                  <div className="space-y-2 text-sm text-blue-800">
                    <p><strong>Name:</strong> John Lester Ferrer Cuarto</p>
                    <p><strong>Age:</strong> 22 years old</p>
                    <p><strong>Location:</strong> Bayawan City, Negros Oriental</p>
                    <p><strong>Education:</strong> 2nd Year IT Student</p>
                    <p><strong>School:</strong> Asian College Dumaguete City</p>
                  </div>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="font-medium text-green-900 mb-2">Contact Information</h3>
                  <div className="space-y-2 text-sm text-green-800">
                    <p><strong>Email:</strong> jfcuarto.student@asiancollege.edu.ph</p>
                    <p><strong>Phone:</strong> 09653660504</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="mr-2 text-green-600" size={20} />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                className="w-full justify-start" 
                variant="outline"
                onClick={() => setLocation("/#contact")}
              >
                <Mail className="mr-2" size={16} />
                View Contact Form
              </Button>
              <Button 
                className="w-full justify-start" 
                variant="outline"
                onClick={() => setLocation("/#about")}
              >
                <User className="mr-2" size={16} />
                View About Section
              </Button>
            </CardContent>
          </Card>

          {/* System Info */}
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Portfolio Statistics</CardTitle>
              <CardDescription>
                Current portfolio status and information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">1</div>
                  <div className="text-sm text-slate-600">Active Portfolio</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">5</div>
                  <div className="text-sm text-slate-600">Sections</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">2</div>
                  <div className="text-sm text-slate-600">Years in IT</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">∞</div>
                  <div className="text-sm text-slate-600">Learning Goals</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}