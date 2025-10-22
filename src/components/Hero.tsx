import { ArrowDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Resume download URL - works locally and in production
  const RESUME_URL = '/resume.pdf'; // Vite serves files from /public/ at root path

  const handleResumeDownload = () => {
    // Create a temporary anchor element for download
    const link = document.createElement('a');
    link.href = RESUME_URL;
    link.download = 'Santhiya-K-Resume.pdf'; // Custom filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-slate-950 to-blue-500/10"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="inline-block">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full flex items-center justify-center text-slate-950 text-5xl font-bold">
              SK
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white">
              Santhiya K
            </h1>
            <p className="text-2xl sm:text-3xl text-emerald-400 font-medium">
              Junior Software Developer
            </p>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Specializing in building efficient and scalable web applications using Node.js
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-slate-300">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-emerald-400" />
              <span>Chennai, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} className="text-emerald-400" />
              <a href="mailto:santhiyakalai23@gmail.com" className="hover:text-emerald-400 transition-colors">
                santhiyakalai23@gmail.com
              </a>
            </div>
          </div>

          <div className="flex justify-center gap-4 pt-4">
            <button
              onClick={scrollToContact}
              className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold rounded-lg transition-all transform hover:scale-105"
            >
              Get In Touch
            </button>
            <button
              onClick={handleResumeDownload}
              className="px-8 py-3 border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 font-semibold rounded-lg transition-all transform hover:scale-105"
            >
              📄 Download Resume
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={32} className="text-emerald-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;