import { Code, Database, Lightbulb } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { SiReact, SiNodedotjs, SiPython } from "react-icons/si";
import { Smartphone } from "lucide-react";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Skills & Learning</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Currently developing these skills through coursework and self-study. Each day brings new learning opportunities!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <div className="bg-slate-50 p-6 rounded-xl animate-on-scroll">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800">Programming Languages</h3>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-slate-600">Java</span>
                  <span className="text-sm text-slate-500">Learning</span>
                </div>
                <Progress value={40} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-slate-600">HTML/CSS</span>
                  <span className="text-sm text-slate-500">Learning</span>
                </div>
                <Progress value={50} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-slate-600">JavaScript</span>
                  <span className="text-sm text-slate-500">Beginner</span>
                </div>
                <Progress value={25} className="h-2" />
              </div>
            </div>
          </div>

          {/* Database & Systems */}
          <div className="bg-slate-50 p-6 rounded-xl animate-on-scroll">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database size={32} className="text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800">Database & Systems</h3>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-slate-600">MySQL</span>
                  <span className="text-sm text-slate-500">Learning</span>
                </div>
                <Progress value={35} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-slate-600">System Analysis</span>
                  <span className="text-sm text-slate-500">Learning</span>
                </div>
                <Progress value={30} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-slate-600">Network Basics</span>
                  <span className="text-sm text-slate-500">Beginner</span>
                </div>
                <Progress value={20} className="h-2" />
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-slate-50 p-6 rounded-xl animate-on-scroll md:col-span-2 lg:col-span-1">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-slate-700/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb size={32} className="text-slate-700" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800">Soft Skills</h3>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-slate-600">Problem Solving</span>
                  <span className="text-sm text-slate-500">Growing</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-slate-600">Team Collaboration</span>
                  <span className="text-sm text-slate-500">Developing</span>
                </div>
                <Progress value={55} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-slate-600">Continuous Learning</span>
                  <span className="text-sm text-slate-500">Strong</span>
                </div>
                <Progress value={80} className="h-2" />
              </div>
            </div>
          </div>
        </div>

        {/* Learning Goals */}
        <div className="mt-16 bg-gradient-to-r from-blue-600/5 to-cyan-500/5 p-8 rounded-2xl animate-on-scroll">
          <h3 className="text-2xl font-semibold text-slate-800 text-center mb-8">Currently Learning & Future Goals</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <SiReact className="text-blue-600" size={24} />
              </div>
              <h4 className="font-medium text-slate-800">React.js</h4>
              <p className="text-sm text-slate-600">Frontend Framework</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <SiNodedotjs className="text-blue-600" size={24} />
              </div>
              <h4 className="font-medium text-slate-800">Node.js</h4>
              <p className="text-sm text-slate-600">Backend Development</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <SiPython className="text-blue-600" size={24} />
              </div>
              <h4 className="font-medium text-slate-800">Python</h4>
              <p className="text-sm text-slate-600">Programming Language</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Smartphone className="text-blue-600" size={24} />
              </div>
              <h4 className="font-medium text-slate-800">Mobile Dev</h4>
              <p className="text-sm text-slate-600">Future Interest</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
