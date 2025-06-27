import { useState } from "react";
import { MapPin, GraduationCap, UserCheck, Facebook, Instagram, Linkedin, Github, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactMutation = useMutation({
    mutationFn: async (contactData: typeof formData) => {
      return await apiRequest("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactData),
      });
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message! I will get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        message: '',
        phone: ''
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields before sending your message.",
        variant: "destructive"
      });
      return;
    }

    contactMutation.mutate(formData);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-slate-800 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            I'm always eager to connect with fellow students, mentors, and professionals in the IT industry. Let's learn and grow together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-semibold mb-8">Let's Connect</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mr-4">
                  <Phone className="text-blue-400" size={20} />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-slate-300">09653660504</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mr-4">
                  <Mail className="text-blue-400" size={20} />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-slate-300">jfcuarto.student@asiancollege.edu.ph</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="text-blue-400" size={20} />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-slate-300">Bayawan City, Negros Oriental</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mr-4">
                  <GraduationCap className="text-blue-400" size={20} />
                </div>
                <div>
                  <p className="font-medium">School</p>
                  <p className="text-slate-300">Asian College Dumaguete City</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mr-4">
                  <UserCheck className="text-blue-400" size={20} />
                </div>
                <div>
                  <p className="font-medium">Status</p>
                  <p className="text-slate-300">2nd Year IT Student</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <h4 className="text-lg font-medium mb-6">Connect With Me</h4>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-12 h-12 bg-blue-600/20 hover:bg-blue-600 rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  <Facebook className="text-white" size={20} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-12 h-12 bg-blue-600/20 hover:bg-blue-600 rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  <Instagram className="text-white" size={20} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-12 h-12 bg-blue-600/20 hover:bg-blue-600 rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin className="text-white" size={20} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-12 h-12 bg-blue-600/20 hover:bg-blue-600 rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  <Github className="text-white" size={20} />
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-on-scroll">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 transition-colors duration-300 text-white placeholder-slate-300"
                    placeholder="Enter your name"
                    disabled={contactMutation.isPending}
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 transition-colors duration-300 text-white placeholder-slate-300"
                    placeholder="Enter your email"
                    disabled={contactMutation.isPending}
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number (Optional)
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 transition-colors duration-300 text-white placeholder-slate-300"
                    placeholder="Enter your phone number"
                    disabled={contactMutation.isPending}
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 transition-colors duration-300 text-white placeholder-slate-300 resize-none"
                    placeholder="Share your thoughts, opportunities, or just say hello!"
                    disabled={contactMutation.isPending}
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-all duration-300 transform hover:scale-105 font-medium"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
