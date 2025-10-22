import { ExternalLink, Github, Layers } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Direct-Access CRM',
      description: 'A comprehensive CRM system built with Node.js focusing on scalability and performance.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'EJS', 'JWT', 'Mocha', 'Swagger'],
      highlights: [
        'Designed and implemented RESTful APIs for CRM functionality',
        'Integrated EJS-based email functionality for dynamic templating',
        'Created comprehensive test cases using Mocha for code quality',
        'Implemented secure authentication and authorization mechanisms',
        'Optimized MongoDB queries for improved performance',
      ],
      icon: Layers,
    },
    {
      title: 'Texol API Development',
      description: 'Backend system for managing products, categories, blogs, and customer communications.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'RESTful API', 'Nodemailer'],
      highlights: [
        'Built APIs for product listing and category/subcategory hierarchy',
        'Integrated email functionality for enquiries and notifications',
        'Implemented modular code structure with controllers, models, and routes',
        'Focused on performance optimization and scalability',
        'Ensured secure authentication practices throughout the system',
      ],
      icon: Layers,
    },
    {
      title: 'E-Commerce API',
      description: 'Robust backend for an e-commerce application with real-time CRUD operations.',
      technologies: ['Node.js', 'MongoDB', 'Mongoose', 'Postman', 'JWT'],
      highlights: [
        'Designed modular architecture with clear separation of concerns',
        'Developed custom middleware for validation and error handling',
        'Optimized database operations using Mongoose',
        'Created comprehensive API documentation using Postman',
        'Enabled real-time CRUD operations with efficient data handling',
      ],
      icon: Layers,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-emerald-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-lg border border-slate-800 hover:border-emerald-500 transition-all overflow-hidden group"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-emerald-500/10 rounded-lg">
                    <project.icon className="w-8 h-8 text-emerald-400" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-400 mb-3">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-2 text-slate-300 text-sm">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <h4 className="text-sm font-semibold text-slate-400 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-800 text-emerald-400 text-xs rounded-full border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400 mb-4">Want to see more of my work?</p>
          <a
            href="mailto:santhiyakalai23@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold rounded-lg transition-all transform hover:scale-105"
          >
            Get in Touch
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
