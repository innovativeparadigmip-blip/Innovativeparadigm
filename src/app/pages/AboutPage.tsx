import { motion } from "motion/react";
import { Target, Eye, Heart, Award, Users, Globe, TrendingUp, CheckCircle2 } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#111111] to-[#1a1a1a] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF6A00' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-[#FF6A00]">Innovative Paradigm</span>
            </h1>
            <p className="text-xl text-gray-300">
              Leading the future of international healthcare training and placement since our inception
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl font-bold text-[#111111] mb-6">
                Transforming Lives Through <span className="text-[#FF6A00]">Global Excellence</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Innovative Paradigm is a premier international training, certification, and placement company dedicated to connecting talented healthcare professionals and students with exceptional opportunities worldwide.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We specialize in comprehensive Lecturio-based nursing preparation, international certifications for GCC and European markets, and end-to-end placement support. Our commitment extends to innovation-based academic projects and strategic career pathway consultancy.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With operations spanning over 50 countries, we've successfully placed thousands of professionals in prestigious healthcare institutions, while maintaining an exceptional 98% success rate.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcyNDMzNTk3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern office"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
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
              Our Vision & <span className="text-[#FF6A00]">Mission</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-10 shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF6A00] to-[#FF8C00] rounded-xl flex items-center justify-center mb-6">
                <Eye size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#111111] mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the world's most trusted bridge between healthcare talent and global opportunities, setting the gold standard in international training, certification, and placement services while fostering a community of excellence that transcends borders.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-10 shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF6A00] to-[#FF8C00] rounded-xl flex items-center justify-center mb-6">
                <Target size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#111111] mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower healthcare professionals and students with world-class training, internationally recognized certifications, and strategic placement opportunities. We are committed to maintaining the highest standards of education, ethical practices, and comprehensive support throughout every career journey.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
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
              Our Core <span className="text-[#FF6A00]">Values</span>
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Excellence",
                description: "Commitment to the highest quality in training and service delivery"
              },
              {
                icon: Heart,
                title: "Integrity",
                description: "Honest, transparent, and ethical in all our professional relationships"
              },
              {
                icon: Globe,
                title: "Global Mindset",
                description: "Embracing diversity and international perspectives in everything we do"
              },
              {
                icon: TrendingUp,
                title: "Innovation",
                description: "Continuously evolving our methods to stay ahead of industry trends"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-[#FF6A00]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FF6A00] transition-colors">
                  <value.icon size={36} className="text-[#FF6A00]" />
                </div>
                <h3 className="text-xl font-bold text-[#111111] mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
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
              Your Journey to <span className="text-[#FF6A00]">Global Success</span>
            </h2>
            <p className="text-lg text-gray-300">
              A clear, structured pathway from enrollment to placement
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Initial Consultation",
                description: "Comprehensive assessment of your qualifications, goals, and target countries"
              },
              {
                step: "02",
                title: "Training Enrollment",
                description: "Access to Lecturio-based curriculum and expert-led preparation programs"
              },
              {
                step: "03",
                title: "Certification Preparation",
                description: "Intensive exam preparation for Prometric, DHA, HAAD, MOH, or European certifications"
              },
              {
                step: "04",
                title: "Documentation Support",
                description: "Assistance with credential evaluation, licensing, and visa documentation"
              },
              {
                step: "05",
                title: "Job Placement",
                description: "Strategic matching with healthcare institutions aligned with your career goals"
              },
              {
                step: "06",
                title: "Ongoing Support",
                description: "Continued career guidance and professional development opportunities"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative mb-8 last:mb-0"
              >
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#FF6A00] to-[#FF8C00] rounded-xl flex items-center justify-center">
                      <span className="text-2xl font-bold">{item.step}</span>
                    </div>
                  </div>
                  <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
                {index < 5 && (
                  <div className="absolute left-10 top-20 w-0.5 h-8 bg-[#FF6A00]/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards & Compliance */}
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
              International Standards & <span className="text-[#FF6A00]">Compliance</span>
            </h2>
            <p className="text-lg text-gray-600">
              Adhering to the highest global healthcare education and placement standards
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle2,
                title: "Accredited Programs",
                description: "All training programs aligned with international healthcare education standards"
              },
              {
                icon: Award,
                title: "Certified Partners",
                description: "Partnerships with globally recognized institutions and healthcare providers"
              },
              {
                icon: Users,
                title: "Expert Faculty",
                description: "Instructors with international experience and advanced certifications"
              },
              {
                icon: Globe,
                title: "Global Recognition",
                description: "Certifications accepted across GCC, Europe, and international markets"
              },
              {
                icon: CheckCircle2,
                title: "Ethical Practices",
                description: "Transparent processes and commitment to candidate welfare"
              },
              {
                icon: TrendingUp,
                title: "Continuous Improvement",
                description: "Regular updates to curriculum based on evolving industry requirements"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#F5F5F5] rounded-xl p-8 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#FF6A00] to-[#FF8C00] rounded-lg flex items-center justify-center mb-6">
                  <item.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#111111] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
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
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of successful professionals who trusted Innovative Paradigm with their career transformation
            </p>
            <a
              href="/contact"
              className="inline-block px-10 py-4 bg-white text-[#FF6A00] rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Schedule Consultation
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}