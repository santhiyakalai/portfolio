import {
  Code2,
  Database,
  GitBranch,
  TestTube,
  Shield,
  Package,
  Settings,
  Globe
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Programming & Web',
      skills: ['JavaScript', 'Node.js', 'Express.js', 'HTML', 'CSS'],
    },
    {
      icon: Database,
      title: 'Database',
      skills: ['MongoDB', 'Mongoose'],
    },
    {
      icon: Globe,
      title: 'API Development',
      skills: ['RESTful APIs', 'GraphQL', 'Postman', 'Swagger'],
    },
    {
      icon: TestTube,
      title: 'Testing',
      skills: ['Mocha', 'Chai'],
    },
    {
      icon: Shield,
      title: 'Auth & Security',
      skills: ['JWT', 'bcrypt', 'OAuth'],
    },
    {
      icon: Package,
      title: 'Package Management',
      skills: ['npm', 'yarn'],
    },
    {
      icon: GitBranch,
      title: 'Version Control',
      skills: ['Git', 'GitHub'],
    },
    {
      icon: Settings,
      title: 'Tools & Concepts',
      skills: ['VS Code', 'Nodemon', 'ESLint', 'CORS', 'Middleware', 'MVC Architecture'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-emerald-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-900 p-6 rounded-lg border border-slate-800 hover:border-emerald-500 transition-all hover:shadow-lg hover:shadow-emerald-500/20"
            >
              <category.icon className="w-10 h-10 text-emerald-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full border border-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
              <div>
                <p className="text-slate-200 font-medium">Internet of Things (IoT) Training Programme</p>
                <p className="text-slate-400 text-sm">Mahindra Pride Classroom, Naandi Foundation (2022-2023)</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
              <div>
                <p className="text-slate-200 font-medium">Web Development Course</p>
                <p className="text-slate-400 text-sm">Nirmaan Organization</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
