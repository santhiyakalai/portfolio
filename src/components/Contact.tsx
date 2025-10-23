import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
const apiUrl = import.meta.env.VITE_API_URL;
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      await axios.post(`${apiUrl}/send-email`, formData); // Update this URL for production
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' }); // Reset formVITE_API_URL=http://localhost:3000
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-emerald-400 mx-auto mb-4"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or collaborations.
            Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Section (unchanged) */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-emerald-500 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-500/10 rounded-lg">
                  <Mail className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <a
                    href="mailto:santhiyakalai23@gmail.com"
                    className="text-slate-300 hover:text-emerald-400 transition-colors break-all"
                  >
                    santhiyakalai23@gmail.com
                  </a>
                </div>
              </div>
            </div>
            {/* Phone and Location sections unchanged */}
          </div>

          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-slate-800 p-8 rounded-lg border border-slate-700">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-slate-300 font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    // placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-slate-300 font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    // placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-slate-300 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition-colors"
                  // placeholder="Project Inquiry"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-slate-300 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                  // placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold rounded-lg transition-all transform hover:scale-105"
              >
                {loading ? 'Sending...' : 'Send Message'}
                <Send size={18} />
              </button>
            </form>
            {status && (
              <p
                className={`mt-4 text-center ${
                  status.includes('successfully') ? 'text-emerald-400' : 'text-red-400'
                }`}
              >
                {status}
              </p>
            )}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-400">
              © 2025 Santhiya K. Built with React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;