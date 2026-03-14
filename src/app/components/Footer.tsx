import { Link } from "react-router";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <footer className="bg-[#111111] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FF6A00] to-[#FF8C00] rounded-lg flex items-center justify-center">
              <img src="/Logo.png" alt="Innovative Paradigm Logo" className="w-12 h-12" />
              </div>
              <div>
                <div className="font-bold text-lg">Innovative Paradigm</div>
                <div className="text-xs text-[#FF6A00]">Global Excellence</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Transforming careers through international training, certification, and placement solutions for global excellence.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#FF6A00] rounded-lg flex items-center justify-center transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#FF6A00] rounded-lg flex items-center justify-center transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#FF6A00] rounded-lg flex items-center justify-center transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#FF6A00] rounded-lg flex items-center justify-center transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-[#FF6A00] transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-[#FF6A00] transition-colors">About Us</Link></li>
              <li><Link to="/nursing" className="text-gray-400 hover:text-[#FF6A00] transition-colors">Nursing Training</Link></li>
              <li><Link to="/student-programs" className="text-gray-400 hover:text-[#FF6A00] transition-colors">Student Programs</Link></li>
              <li><Link to="/placement" className="text-gray-400 hover:text-[#FF6A00] transition-colors">Global Placement</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">International Certification</li>
              <li className="text-gray-400">Lecturio-Based Training</li>
              <li className="text-gray-400">GCC & Europe Placement</li>
              <li className="text-gray-400">Career Consultancy</li>
              <li className="text-gray-400">Documentation Support</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to get updates on international opportunities.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6A00]"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-2.5 bg-gradient-to-r from-[#FF6A00] to-[#FF8C00] text-white rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                Subscribe <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Contact Info Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <div className="flex flex-wrap items-center justify-center gap-6">
              <a href="mailto:info@innovativeparadigm.com" className="flex items-center gap-2 text-gray-400 hover:text-[#FF6A00] transition-colors">
                <Mail size={16} />
                <span>info@innovativeparadigm.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 text-gray-400 hover:text-[#FF6A00] transition-colors">
                <Phone size={16} />
                <span>+1 (234) 567-890</span>
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={16} />
                <span>Global Headquarters</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>&copy; 2026 Innovative Paradigm. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#FF6A00] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#FF6A00] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#FF6A00] transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
