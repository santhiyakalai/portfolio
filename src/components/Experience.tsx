import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  const responsibilities = [
    'Developing and maintaining backend services using Node.js, Express, and MongoDB',
    'Designing and implementing RESTful APIs with optimized database operations',
    'Managing secure authentication and authorization with role-based access control',
    'Collaborating with frontend developers for seamless integration',
    'Implementing error handling and secure data management practices',
    'Testing APIs using Postman and ensuring code quality',
    'Integrating third-party services to enhance system functionality',
    'Contributing to scalable projects like Direct-Access CRM and Texol API',
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-emerald-400 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800 rounded-lg border border-slate-700 p-8 hover:border-emerald-500 transition-all">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div className="flex items-start gap-4 mb-4 md:mb-0">
                <div className="p-3 bg-emerald-500/10 rounded-lg">
                  <Briefcase className="w-8 h-8 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Junior Node.js Developer</h3>
                  <p className="text-emerald-400 font-medium text-lg">Anandh Techverce</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Calendar size={18} className="text-emerald-400" />
                <span>Sep 2024 - Present</span>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-slate-300 leading-relaxed">
                Responsible for developing and maintaining backend services, focusing on creating scalable,
                secure, and high-performing solutions for enterprise applications.
              </p>

              <div className="pt-4">
                <h4 className="text-lg font-semibold text-white mb-4">Key Responsibilities:</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {responsibilities.map((responsibility, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                      <p className="text-slate-300 text-sm">{responsibility}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-700">
                <h4 className="text-lg font-semibold text-white mb-3">Key Achievements:</h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                    <p className="text-slate-300">
                      Successfully delivered backend solutions for <span className="text-emerald-400 font-medium">Direct-Access CRM</span> and <span className="text-emerald-400 font-medium">Texol API</span> projects
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                    <p className="text-slate-300">
                      Implemented comprehensive security measures and optimized database performance
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                    <p className="text-slate-300">
                      Created robust test cases using Mocha and maintained thorough API documentation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
