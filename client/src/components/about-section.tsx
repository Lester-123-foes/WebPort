export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <img 
              src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="IT student workspace with computer and books" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Passionate IT Student</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              I'm John Lester Ferrer Cuarto, a dedicated 22-year-old IT student currently in my second year at Asian College Dumaguete City. Based in the beautiful Bayawan City, Negros Oriental, I'm on an exciting journey of learning and discovering the vast world of Information Technology.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              While I may not have professional achievements yet, I'm committed to building a strong foundation in IT. Every day brings new learning opportunities, and I'm eager to apply my growing knowledge to real-world projects and challenges.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              My goal is to become a skilled developer who can contribute meaningfully to the tech industry. I believe in continuous learning, hard work, and the power of persistence in achieving dreams.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">22</div>
                <div className="text-sm text-slate-600">Years Old</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">2nd</div>
                <div className="text-sm text-slate-600">Year IT Student</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
