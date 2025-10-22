import { Code2, Database, Shield, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Backend Development',
      description: 'Expert in Node.js, Express.js, and RESTful API design',
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Proficient in MongoDB and Mongoose with optimized queries',
    },
    {
      icon: Shield,
      title: 'Security & Auth',
      description: 'Implementing JWT, OAuth, and role-based access control',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Focus on scalable, efficient, and high-performing solutions',
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-emerald-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I specialize in building efficient and scalable web applications using <span className="text-emerald-400 font-semibold">Node.js</span>.
              My expertise lies in developing server-side applications, handling backend logic, and optimizing APIs for seamless performance.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              I am skilled in managing databases, implementing authentication, and ensuring secure and efficient
              communication between the client and server. My focus is on creating robust and scalable solutions that
              enhance the functionality of web applications.
            </p>

            <div className="pt-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <p className="text-slate-300"><span className="text-white font-semibold">Education:</span> B.Tech (IT) from Vivekanandha College of Technology for Women</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <p className="text-slate-300"><span className="text-white font-semibold">Current Role:</span> Junior Node.js Developer at Anandh Techverce</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <p className="text-slate-300"><span className="text-white font-semibold">Experience:</span> Since September 2024</p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-emerald-500 transition-all hover:transform hover:scale-105"
              >
                <item.icon className="w-12 h-12 text-emerald-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
