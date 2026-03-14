import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/nursing", label: "Nursing Training" },
    { path: "/student-programs", label: "Student Programs" },
    { path: "/innovation", label: "Innovation" },
    { path: "/placement", label: "Placement" },

  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-3" : "bg-white/95 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-[#FF6A00] to-[#FF8C00] rounded-lg flex items-center justify-center transform transition-transform group-hover:scale-105">
              <img src="/Logo.png" alt="Innovative Paradigm Logo" className="w-12 h-12" />
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-xl text-[#111111]">Innovative Paradigm</div>
              <div className="text-xs text-[#FF6A00] -mt-1">Global Excellence</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg transition-all ${
                  location.pathname === item.path
                    ? "bg-[#FF6A00] text-white"
                    : "text-[#111111] hover:bg-[#F5F5F5]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-gradient-to-r from-[#FF6A00] to-[#FF8C00] text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#111111] hover:bg-[#F5F5F5] rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <nav className="flex flex-col gap-2 py-4 border-t border-[#F5F5F5] mt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-4 py-3 rounded-lg transition-all ${
                      location.pathname === item.path
                        ? "bg-[#FF6A00] text-white"
                        : "text-[#111111] hover:bg-[#F5F5F5]"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="px-4 py-3 mt-2 bg-gradient-to-r from-[#FF6A00] to-[#FF8C00] text-white rounded-lg text-center"
                >
                  Get Started
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
