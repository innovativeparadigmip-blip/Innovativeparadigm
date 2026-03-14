import { motion } from "motion/react";
import { Lightbulb, Rocket, Target, Users, Zap, Code, FlaskConical, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export function InnovationPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#111111] to-[#1a1a1a] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF6A00]/5 to-transparent" />
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23FF6A00' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block px-4 py-2 bg-[#FF6A00]/10 border border-[#FF6A00]/30 rounded-full mb-6">
              <span className="text-[#FF6A00]">💡 Innovation & Research</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Innovation-Based <span className="text-[#FF6A00]">Projects & Development</span>
            </h1>
            <p className="text-xl text-gray-300">
              Fostering academic excellence and professional innovation through cutting-edge project development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-[#111111] mb-6">
                Transforming Ideas into <span className="text-[#FF6A00]">Reality</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our Innovation division supports healthcare professionals, students, and institutions in developing groundbreaking projects that push the boundaries of medical science, technology, and practice.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                From concept to completion, we provide comprehensive support including research guidance, technical expertise, prototype development, and publication assistance. Our goal is to foster innovation that makes a real impact on global healthcare.
              </p>
              <div className="space-y-4">
                {[
                  "End-to-end project development support",
                  "Access to international research networks",
                  "Technical and scientific expertise",
                  "Publication and presentation opportunities"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 size={24} className="text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1760493828288-d2dbb70d18c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwdGVjaG5vbG9neSUyMGxhYnxlbnwxfHx8fDE3NzI0MzU2Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Innovation lab"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              Innovation <span className="text-[#FF6A00]">Services</span>
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive support for your research and development journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FlaskConical,
                title: "Academic Projects",
                description: "Support for dissertations, theses, and academic research projects aligned with international standards."
              },
              {
                icon: TrendingUp,
                title: "Research Support",
                description: "Comprehensive guidance from literature review to data analysis and publication preparation."
              },
              {
                icon: Lightbulb,
                title: "Innovation Consultancy",
                description: "Strategic consulting for developing innovative healthcare solutions and methodologies."
              },
              {
                icon: Rocket,
                title: "Prototype Development",
                description: "Technical support in developing prototypes for medical devices and healthcare technologies."
              },
              {
                icon: Code,
                title: "Concept Development",
                description: "Assistance in refining and validating innovative healthcare concepts and ideas."
              },
              {
                icon: Users,
                title: "Collaboration Opportunities",
                description: "Connecting innovators with international research networks and institutional partnerships."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#FF6A00] to-[#FF8C00] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#111111] mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Areas */}
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
              Project Focus <span className="text-[#FF6A00]">Areas</span>
            </h2>
            <p className="text-lg text-gray-600">
              Key domains where we support innovative research and development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Clinical Research",
                areas: ["Evidence-based practice studies", "Patient outcome research", "Treatment efficacy studies", "Quality improvement projects"]
              },
              {
                title: "Healthcare Technology",
                areas: ["Medical device innovation", "Digital health solutions", "Telemedicine platforms", "Health informatics"]
              },
              {
                title: "Nursing Science",
                areas: ["Advanced nursing practices", "Patient care innovations", "Nursing education methods", "Professional development"]
              },
              {
                title: "Public Health",
                areas: ["Community health initiatives", "Epidemiological studies", "Health policy research", "Global health projects"]
              },
              {
                title: "Medical Education",
                areas: ["Innovative teaching methods", "Simulation-based training", "Competency assessment", "Curriculum development"]
              },
              {
                title: "Healthcare Management",
                areas: ["Operational efficiency", "Leadership development", "Quality management", "Strategic planning"]
              }
            ].map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#F5F5F5] rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold text-[#111111] mb-6">{area.title}</h3>
                <ul className="space-y-3">
                  {area.areas.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Zap size={18} className="text-[#FF6A00] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#111111] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Our Innovation <span className="text-[#FF6A00]">Process</span>
            </h2>
            <p className="text-lg text-gray-300">
              A structured approach to bringing your innovative ideas to life
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {[
              {
                phase: "Discovery",
                icon: Target,
                description: "Initial consultation to understand your vision, goals, and project scope"
              },
              {
                phase: "Planning",
                icon: Lightbulb,
                description: "Development of comprehensive project plan, timeline, and resource allocation"
              },
              {
                phase: "Execution",
                icon: Rocket,
                description: "Implementation with expert guidance, regular reviews, and quality assurance"
              },
              {
                phase: "Validation",
                icon: CheckCircle2,
                description: "Testing, analysis, and refinement to ensure project objectives are met"
              },
              {
                phase: "Delivery",
                icon: TrendingUp,
                description: "Final presentation, documentation, and support for publication or presentation"
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative mb-8 last:mb-0"
              >
                <div className="flex gap-6 items-center">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#FF6A00] to-[#FF8C00] rounded-xl flex items-center justify-center">
                      <phase.icon size={32} className="text-white" />
                    </div>
                  </div>
                  <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <h3 className="text-2xl font-bold mb-2">{phase.phase}</h3>
                    <p className="text-gray-400">{phase.description}</p>
                  </div>
                </div>
                {index < 4 && (
                  <div className="absolute left-10 top-20 w-0.5 h-8 bg-[#FF6A00]/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
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
              Collaboration <span className="text-[#FF6A00]">Opportunities</span>
            </h2>
            <p className="text-lg text-gray-600">
              Partner with us to drive healthcare innovation forward
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Academic Institutions",
                description: "Collaborative research partnerships with universities and medical schools worldwide"
              },
              {
                icon: FlaskConical,
                title: "Healthcare Providers",
                description: "Joint innovation projects with hospitals and healthcare systems"
              },
              {
                icon: Rocket,
                title: "Industry Partners",
                description: "Technology development collaborations with healthcare industry leaders"
              }
            ].map((collab, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#F5F5F5] to-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF6A00] to-[#FF8C00] rounded-xl flex items-center justify-center mx-auto mb-6">
                  <collab.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#111111] mb-4">{collab.title}</h3>
                <p className="text-gray-600">{collab.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#FF6A00] to-[#FF8C00]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-4xl mx-auto text-white"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Innovate?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's collaborate to bring your innovative healthcare project to life
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/contact"
                className="px-10 py-4 bg-white text-[#FF6A00] rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                Start Your Project <ArrowRight size={20} />
              </a>
              <a
                href="/contact"
                className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                Discuss Collaboration
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
