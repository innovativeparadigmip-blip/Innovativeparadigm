import { motion } from "motion/react";
import { GraduationCap, Globe, FileCheck, Plane, Users, TrendingUp, BookOpen, MapPin, CheckCircle2, ArrowRight } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export function StudentProgramsPage() {
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
            <div className="inline-block px-4 py-2 bg-[#FF6A00]/10 border border-[#FF6A00]/30 rounded-full mb-6">
              <span className="text-[#FF6A00]">🎓 International Student Programs</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Student International <span className="text-[#FF6A00]">Training & Placement</span>
            </h1>
            <p className="text-xl text-gray-300">
              Comprehensive programs designed to prepare students for global career opportunities
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
              <img
                src="https://images.unsplash.com/photo-1765338914239-1351d4aa8a16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwaW50ZXJuYXRpb25hbHxlbnwxfHx8fDE3NzI0MzU2Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Students studying"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-[#111111] mb-6">
                Launch Your <span className="text-[#FF6A00]">Global Career</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our Student International Programs are designed to bridge the gap between academic education and global career opportunities. We provide comprehensive training, cultural preparation, and strategic placement support for students aspiring to work internationally.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                From initial counseling to final placement, we guide students through every step of their international career journey, ensuring they're fully prepared for success in competitive global markets.
              </p>
              <div className="space-y-4">
                {[
                  "Specialized training for international markets",
                  "Cultural competence and language support",
                  "Global placement partnerships",
                  "Complete visa and documentation assistance"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 size={24} className="text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
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
              Training <span className="text-[#FF6A00]">Programs</span>
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive preparation programs tailored for international success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Healthcare Foundation",
                description: "Essential medical knowledge and clinical skills for healthcare careers abroad",
                duration: "3-6 months",
                level: "Entry to Intermediate"
              },
              {
                icon: Globe,
                title: "International Certification Prep",
                description: "Specialized preparation for global healthcare certifications and licensing",
                duration: "4-8 months",
                level: "Intermediate to Advanced"
              },
              {
                icon: BookOpen,
                title: "Professional Skills Development",
                description: "Communication, leadership, and soft skills essential for global careers",
                duration: "2-4 months",
                level: "All Levels"
              },
              {
                icon: Users,
                title: "Cultural Competence Training",
                description: "Understanding and adapting to diverse international workplace cultures",
                duration: "1-2 months",
                level: "All Levels"
              },
              {
                icon: FileCheck,
                title: "Language Proficiency",
                description: "English language and medical terminology training for international practice",
                duration: "3-6 months",
                level: "All Levels"
              },
              {
                icon: TrendingUp,
                title: "Career Readiness Workshop",
                description: "Interview preparation, resume building, and professional networking skills",
                duration: "1 month",
                level: "All Levels"
              }
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#FF6A00] to-[#FF8C00] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <program.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#111111] mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{program.description}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#F5F5F5] rounded-full text-xs text-gray-700">
                    {program.duration}
                  </span>
                  <span className="px-3 py-1 bg-[#FF6A00]/10 text-[#FF6A00] rounded-full text-xs">
                    {program.level}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Country Options */}
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
              Destination <span className="text-[#FF6A00]">Countries</span>
            </h2>
            <p className="text-lg text-gray-600">
              Explore exciting career opportunities across continents
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#111111] to-[#1a1a1a] rounded-2xl p-10 text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6A00]/10 rounded-full -mr-16 -mt-16" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF6A00] to-[#FF8C00] rounded-xl flex items-center justify-center mb-6">
                  <MapPin size={32} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4">GCC Countries</h3>
                <p className="text-gray-300 mb-6">
                  Premier healthcare opportunities in the Gulf Cooperation Council nations
                </p>
                <ul className="space-y-3 mb-6">
                  {["United Arab Emirates", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Oman"].map((country, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-[#FF6A00] flex-shrink-0" />
                      <span className="text-gray-300">{country}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-sm text-gray-400">
                  Average placement time: 2-4 months
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#FF6A00] to-[#FF8C00] rounded-2xl p-10 text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">
                  <Globe size={32} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Europe</h3>
                <p className="text-white/90 mb-6">
                  Exceptional career paths in leading European healthcare systems
                </p>
                <ul className="space-y-3 mb-6">
                  {["Germany", "United Kingdom", "Ireland", "Netherlands", "Belgium", "France"].map((country, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-white flex-shrink-0" />
                      <span className="text-white/90">{country}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-sm text-white/80">
                  Average placement time: 4-8 months
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Placement Process */}
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
              Placement <span className="text-[#FF6A00]">Process</span>
            </h2>
            <p className="text-lg text-gray-600">
              Your step-by-step journey from enrollment to global employment
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Career Pathway Counseling",
                description: "Comprehensive assessment of your academic background, skills, and career goals to identify the best international opportunities."
              },
              {
                step: "02",
                title: "Customized Training Plan",
                description: "Development of personalized training curriculum aligned with target country requirements and certification standards."
              },
              {
                step: "03",
                title: "Skills & Certification",
                description: "Intensive training programs, exam preparation, and guidance through certification processes."
              },
              {
                step: "04",
                title: "Documentation & Visa Support",
                description: "Complete assistance with credential evaluation, licensing applications, and visa documentation."
              },
              {
                step: "05",
                title: "Job Matching & Interviews",
                description: "Strategic matching with partner healthcare institutions, interview preparation, and negotiation support."
              },
              {
                step: "06",
                title: "Pre-Departure & Integration",
                description: "Cultural orientation, travel arrangements, and ongoing support for smooth transition to your new role."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative mb-8 last:mb-0"
              >
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#FF6A00] to-[#FF8C00] rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1 bg-white rounded-xl p-6 shadow-lg">
                    <h3 className="text-2xl font-bold text-[#111111] mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
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

      {/* Success Stories */}
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
              Student Success <span className="text-[#FF6A00]">Stories</span>
            </h2>
            <p className="text-lg text-gray-600">
              Real experiences from students who achieved their global career dreams
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Ravi Kumar",
                program: "Healthcare Foundation → Dubai",
                country: "UAE",
                text: "The training was comprehensive and the placement support was exceptional. Now working at a leading hospital in Dubai!"
              },
              {
                name: "Maria Santos",
                program: "International Cert Prep → Germany",
                country: "Germany",
                text: "From student to certified professional in Germany - Innovative Paradigm made it possible with their expert guidance."
              },
              {
                name: "Ahmed Hassan",
                program: "Student Program → Qatar",
                country: "Qatar",
                text: "The cultural competence training prepared me perfectly for my role in Qatar. Grateful for this opportunity!"
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#F5F5F5] rounded-xl p-8"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FF6A00] to-[#FF8C00] rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                    {story.name.charAt(0)}
                  </div>
                </div>
                <div className="text-center mb-4">
                  <div className="font-bold text-lg text-[#111111]">{story.name}</div>
                  <div className="text-sm text-[#FF6A00] mb-1">{story.program}</div>
                  <div className="text-xs text-gray-600">{story.country}</div>
                </div>
                <p className="text-gray-600 italic text-sm">"{story.text}"</p>
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
              Begin Your International Career Journey
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join our student programs and open doors to global opportunities
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/contact"
                className="px-10 py-4 bg-white text-[#FF6A00] rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                Apply Now <ArrowRight size={20} />
              </a>
              <a
                href="/contact"
                className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                Schedule Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
