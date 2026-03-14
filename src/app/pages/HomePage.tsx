import { motion } from "motion/react";
import { Link } from "react-router";
import { 
  GraduationCap, 
  Globe, 
  Award, 
  Users, 
  BookOpen, 
  Briefcase,
  TrendingUp,
  FileCheck,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Target,
  Lightbulb
} from "lucide-react";
import { useState, useEffect } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

function Counter({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
}

export function HomePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[140vh] flex items-center overflow-hidden bg-gradient-to-br from-[#111111] via-[#1a1a1a] to-[#111111]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF6A00' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-2 bg-[#FF6A00]/10 border border-[#FF6A00]/30 rounded-full mb-6">
                <span className="text-[#FF6A00]">🌍 Exclusive Lecturio Training Partner</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Powered by{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] to-[#FFA500]">
                  Lecturio Excellence.
                </span>{" "}
                Transforming Global Careers.
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                The only Lecturio-authorized training center for international nursing certification and global placement solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-[#FF6A00] to-[#FF8C00] text-white rounded-lg hover:shadow-2xl hover:shadow-[#FF6A00]/30 hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  Get Started <ArrowRight size={20} />
                </Link>
                <Link
                  to="/nursing"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300"
                >
                  Explore Programs
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/10">
                <div>
                  <div className="text-3xl font-bold text-[#FF6A00] mb-1">
                    <Counter end={50} suffix="+" />
                  </div>
                  <div className="text-sm text-gray-400">Countries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#FF6A00] mb-1">
                    <Counter end={10000} suffix="+" />
                  </div>
                  <div className="text-sm text-gray-400">Placements</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#FF6A00] mb-1">
                    <Counter end={98} suffix="%" />
                  </div>
                  <div className="text-sm text-gray-400">Success Rate</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1659353888906-adb3e0041693?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwbnVyc2VzJTIwbWVkaWNhbCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzI0MzU2NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Diverse medical professionals"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/60 to-transparent" />
              </div>
              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-6 max-w-[200px]"
              >
                <div className="text-[#FF6A00] mb-2">
                  <Award size={32} />
                </div>
                <div className="font-bold text-lg text-[#111111]">Certified Excellence</div>
                <div className="text-sm text-gray-600">International Standards</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#111111] mb-6">
              Your Gateway to <span className="text-[#FF6A00]">Global Success</span>
            </h2>
            <p className="text-lg text-gray-600">
              We are committed to transforming careers through world-class training, international certifications, and strategic global placements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lecturio Exclusive Partnership Section */}
      <section className="py-20 bg-gradient-to-br from-[#111111] to-[#1a1a1a] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23FF6A00' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 bg-[#FF6A00] rounded-full mb-6">
                <span className="text-white font-bold">EXCLUSIVE PARTNERSHIP</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Powered by <span className="text-[#FF6A00]">Lecturio</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We are proud to be the <strong className="text-[#FF6A00]">ONLY authorized Lecturio training center</strong> for international nursing certification. This exclusive partnership gives our students unparalleled access to the world's leading medical education platform.
              </p>
              <div className="space-y-4">
                {[
                  "Exclusive access to Lecturio's complete nursing curriculum",
                  "World-class video lectures by international medical experts",
                  "Interactive learning with adaptive question banks",
                  "Proven methodology with 98% certification success rate",
                  "Official Lecturio certification upon course completion"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#FF6A00] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 size={16} className="text-white" />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-white/10 backdrop-blur-sm border-2 border-[#FF6A00] rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#FF6A00] rounded-xl flex items-center justify-center text-3xl font-bold">
                    L
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Lecturio</h3>
                    <p className="text-sm text-gray-400">World's Leading Medical Education</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Lecturio is trusted by medical students and healthcare professionals in over 175 countries. With our exclusive partnership, you get direct access to their premium content designed specifically for international nursing success.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#FF6A00]/20 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-[#FF6A00] mb-1">175+</div>
                    <div className="text-sm text-gray-400">Countries</div>
                  </div>
                  <div className="bg-[#FF6A00]/20 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-[#FF6A00] mb-1">5M+</div>
                    <div className="text-sm text-gray-400">Global Users</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#FF6A00] to-[#FF8C00] rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Why Lecturio Makes the Difference</h3>
                <ul className="space-y-3">
                  {[
                    "Evidence-based learning methodology",
                    "Continuously updated with latest medical standards",
                    "Personalized learning paths and progress tracking",
                    "Mobile-friendly platform for learning anywhere"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Award size={20} className="flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#111111] mb-6">
              Comprehensive <span className="text-[#FF6A00]">Services</span>
            </h2>
            <p className="text-lg text-gray-600">
              End-to-end solutions for your international career journey
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                icon: BookOpen,
                title: "Nursing Training",
                subtitle: "Lecturio Based",
                description: "Comprehensive training programs aligned with international standards.",
                link: "/nursing"
              },
              {
                icon: Award,
                title: "International Certification",
                subtitle: "GCC & Europe",
                description: "Expert guidance for Prometric, DHA, HAAD, MOH, and European exams.",
                link: "/nursing"
              },
              {
                icon: Globe,
                title: "Global Placement",
                subtitle: "50+ Countries",
                description: "Strategic placement support in GCC, Europe, and worldwide.",
                link: "/placement"
              },
              {
                icon: Users,
                title: "Student Programs",
                subtitle: "International Training",
                description: "Specialized programs for students seeking global opportunities.",
                link: "/student-programs"
              },
              {
                icon: Lightbulb,
                title: "Innovation Projects",
                subtitle: "Research & Development",
                description: "Academic and professional project development support.",
                link: "/innovation"
              },
              {
                icon: TrendingUp,
                title: "Career Consulting",
                subtitle: "Pathway Mapping",
                description: "Strategic guidance for global eligibility and career advancement.",
                link: "/contact"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#FF6A00]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF6A00] transition-colors">
                    <service.icon size={24} className="text-[#FF6A00] group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-[#111111] mb-1">{service.title}</h3>
                    <div className="text-sm text-[#FF6A00] mb-2">{service.subtitle}</div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-[#FF6A00] hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#111111] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img
            src="https://images.unsplash.com/photo-1570106413982-7f2897b8d0c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBuZXR3b3JrJTIwd29ybGQlMjBtYXB8ZW58MXx8fHwxNzcyNDE3MjQzfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Global network"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Why Choose <span className="text-[#FF6A00]">Innovative Paradigm?</span>
            </h2>
            <p className="text-lg text-gray-300">
              We stand apart with our commitment to excellence and proven track record
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: CheckCircle2,
                title: "International Standard Curriculum",
                description: "World-class training aligned with global healthcare standards"
              },
              {
                icon: Globe,
                title: "Strategic Global Partnerships",
                description: "Direct connections with top healthcare institutions worldwide"
              },
              {
                icon: Briefcase,
                title: "Comprehensive Placement Support",
                description: "End-to-end assistance from training to job placement"
              },
              {
                icon: FileCheck,
                title: "Documentation Assistance",
                description: "Expert guidance through visa and credential processes"
              },
              {
                icon: Target,
                title: "Career Pathway Mapping",
                description: "Personalized roadmaps for long-term success"
              },
              {
                icon: MapPin,
                title: "Global Presence",
                description: "Operating in 50+ countries across GCC, Europe, and beyond"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex gap-4"
              >
                <div className="w-12 h-12 bg-[#FF6A00] rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#111111] mb-6">
              Our <span className="text-[#FF6A00]">Global Reach</span>
            </h2>
            <p className="text-lg text-gray-600">
              Connecting talent with opportunities across continents
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1570106413982-7f2897b8d0c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBuZXR3b3JrJTIwd29ybGQlMjBtYXB8ZW58MXx8fHwxNzcyNDE3MjQzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Global network"
                className="w-full rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-[#F5F5F5] rounded-xl p-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-[#FF6A00] rounded-lg flex items-center justify-center">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#111111]">GCC Countries</h3>
                </div>
                <p className="text-gray-600">
                  UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman - Direct placement partnerships with leading healthcare facilities.
                </p>
              </div>

              <div className="bg-[#F5F5F5] rounded-xl p-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-[#FF6A00] rounded-lg flex items-center justify-center">
                    <Globe size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#111111]">Europe</h3>
                </div>
                <p className="text-gray-600">
                  Germany, UK, Ireland, Netherlands, Belgium - Comprehensive certification and placement support.
                </p>
              </div>

              <div className="bg-[#F5F5F5] rounded-xl p-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-[#FF6A00] rounded-lg flex items-center justify-center">
                    <TrendingUp size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#111111]">Expansion Plans</h3>
                </div>
                <p className="text-gray-600">
                  Growing presence in North America, Australia, New Zealand, and emerging markets worldwide.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#111111] mb-6">
              Success <span className="text-[#FF6A00]">Stories</span>
            </h2>
            <p className="text-lg text-gray-600">
              Real experiences from professionals who transformed their careers with us
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Sarah Ahmed",
                role: "Registered Nurse - Dubai",
                image: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMG51cnNlfGVufDF8fHx8MTc3MjQzNTY3OXww&ixlib=rb-4.1.0&q=80&w=1080",
                text: "The Lecturio-based training and DHA exam preparation were exceptional. I secured my dream position in Dubai within 3 months of certification!"
              },
              {
                name: "Michael Chen",
                role: "ICU Nurse - Germany",
                image: "https://images.unsplash.com/photo-1659353888906-adb3e0041693?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwbnVyc2VzJTIwbWVkaWNhbCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzI0MzU2NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
                text: "From certification to visa assistance, the entire journey was smooth. Now working at a leading hospital in Berlin!"
              },
              {
                name: "Priya Sharma",
                role: "Nurse Manager - Qatar",
                image: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMG51cnNlfGVufDF8fHx8MTc3MjQzNTY3OXww&ixlib=rb-4.1.0&q=80&w=1080",
                text: "Innovative Paradigm didn't just help me get a job - they helped me build a career. The ongoing support is incredible!"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-[#111111]">{testimonial.name}</div>
                    <div className="text-sm text-[#FF6A00]">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
                <div className="flex gap-1 mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-[#FF6A00]">★</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-[#FF6A00] to-[#FF8C00] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Start Your International Journey Today
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of professionals who have transformed their careers with Innovative Paradigm
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="px-10 py-4 bg-white text-[#FF6A00] rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                Apply Now <ArrowRight size={20} />
              </Link>
              <Link
                to="/about"
                className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}