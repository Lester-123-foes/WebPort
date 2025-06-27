import { GraduationCap, Rocket } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function EducationSection() {
  return (
    <section id="education" className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-600"></div>
            
            {/* Current Education */}
            <div className="relative flex items-start mb-12 animate-on-scroll">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold relative z-10">
                <GraduationCap size={24} />
              </div>
              <div className="ml-8 bg-white p-6 rounded-xl shadow-lg flex-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800">Information Technology</h3>
                    <p className="text-blue-600 font-medium">Asian College Dumaguete City</p>
                  </div>
                  <Badge className="bg-cyan-500/10 text-cyan-600 px-3 py-1 rounded-full text-sm font-medium">
                    2023 - Present
                  </Badge>
                </div>
                <p className="text-slate-600 mb-4">
                  Currently in my 2nd year, focusing on fundamental IT concepts, programming languages, and system analysis. Building a strong foundation in computer science principles and practical application development.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-600/10 text-blue-600">Programming Fundamentals</Badge>
                  <Badge variant="secondary" className="bg-blue-600/10 text-blue-600">Database Management</Badge>
                  <Badge variant="secondary" className="bg-blue-600/10 text-blue-600">Web Development</Badge>
                  <Badge variant="secondary" className="bg-blue-600/10 text-blue-600">System Analysis</Badge>
                </div>
              </div>
            </div>

            {/* Future Goals */}
            <div className="relative flex items-start animate-on-scroll">
              <div className="flex-shrink-0 w-16 h-16 bg-slate-300 rounded-full flex items-center justify-center text-white text-xl font-bold relative z-10">
                <Rocket size={24} />
              </div>
              <div className="ml-8 bg-white p-6 rounded-xl shadow-lg flex-1 border-l-4 border-cyan-500">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800">Future Goals</h3>
                    <p className="text-cyan-600 font-medium">Continuing Education & Career Development</p>
                  </div>
                  <Badge variant="outline" className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-medium">
                    2025+
                  </Badge>
                </div>
                <p className="text-slate-600 mb-4">
                  Planning to specialize in full-stack web development, pursue industry certifications, and gain practical experience through internships and personal projects.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-cyan-500/10 text-cyan-600">Full-Stack Development</Badge>
                  <Badge variant="secondary" className="bg-cyan-500/10 text-cyan-600">Industry Certifications</Badge>
                  <Badge variant="secondary" className="bg-cyan-500/10 text-cyan-600">Internships</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
