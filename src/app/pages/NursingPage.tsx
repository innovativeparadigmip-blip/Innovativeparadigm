import { motion } from "motion/react";
import { BookOpen, Award, CheckCircle2, Users, TrendingUp, FileText, Clock, Target, Globe } from "lucide-react";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export function NursingPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Lecturio-based training?",
      answer: "Lecturio is a world-class medical education platform. Our Lecturio-based training provides comprehensive, video-based learning modules aligned with international nursing standards, making exam preparation more effective and engaging."
    },
    {
      question: "Which certifications do you prepare candidates for?",
      answer: "We offer preparation for Prometric, DHA (Dubai Health Authority), HAAD (Health Authority Abu Dhabi), MOH (Ministry of Health), and various European nursing certifications including CBT and OSCE."
    },
    {
      question: "How long does the training program take?",
      answer: "Program duration varies based on your starting level and target certification. Typically, intensive programs range from 3-6 months, with flexible schedules to accommodate working professionals."
    },
    {
      question: "What is your exam pass rate?",
      answer: "We maintain an exceptional 98% pass rate across all certification exams, thanks to our comprehensive Lecturio-based curriculum and expert instruction."
    },
    {
      question: "Do you provide placement support after certification?",
      answer: "Absolutely! Placement support is integral to our service. We have partnerships with healthcare facilities across GCC and Europe, and provide end-to-end assistance from job matching to visa processing."
    }
  ];

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
              <span className="text-[#FF6A00]">⚕️ World-Class Nursing Education</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              International Nursing Training & <span className="text-[#FF6A00]">Certification</span>
            </h1>
            <p className="text-xl text-gray-300">
              Lecturio-based comprehensive preparation for global nursing certifications
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
                Lecturio-Based <span className="text-[#FF6A00]">Training Excellence</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our nursing training programs leverage Lecturio's cutting-edge medical education platform, combining high-quality video lectures, interactive quizzes, and comprehensive study materials designed specifically for international nursing certifications.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Whether you're preparing for GCC certifications (Prometric, DHA, HAAD, MOH) or European nursing qualifications, our expert-designed curriculum ensures you're fully prepared for success.
              </p>
              <div className="space-y-4">
                {[
                  "Comprehensive video-based learning modules",
                  "Interactive practice questions and mock exams",
                  "Expert instructor support and mentoring",
                  "Flexible learning schedules for working professionals"
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
                src="https://images.unsplash.com/photo-1659353888906-adb3e0041693?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwbnVyc2VzJTIwbWVkaWNhbCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzI0MzU2NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Nursing professionals"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certification Preparation */}
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
              Certification <span className="text-[#FF6A00]">Programs</span>
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive preparation for all major international nursing certifications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Prometric",
                region: "GCC Standard",
                exams: ["NCLEX-RN", "CGN", "CBT"],
                description: "Comprehensive preparation for Prometric nursing exams required across GCC countries."
              },
              {
                icon: Award,
                title: "DHA",
                region: "Dubai",
                exams: ["DHA Exam", "DataFlow"],
                description: "Specialized training for Dubai Health Authority licensing requirements."
              },
              {
                icon: Award,
                title: "HAAD",
                region: "Abu Dhabi",
                exams: ["HAAD Exam", "Pearson Vue"],
                description: "Expert preparation for Health Authority Abu Dhabi certification."
              },
              {
                icon: Award,
                title: "MOH",
                region: "UAE/KSA",
                exams: ["MOH Exam", "Documentation"],
                description: "Ministry of Health certification training for UAE and Saudi Arabia."
              },
              {
                icon: Award,
                title: "European CBT",
                region: "Europe",
                exams: ["CBT", "OSCE", "IELTS"],
                description: "Computer-based test preparation for European nursing registration."
              },
              {
                icon: Award,
                title: "OSCE",
                region: "UK/Ireland",
                exams: ["NMC OSCE", "Clinical Skills"],
                description: "Objective Structured Clinical Examination for UK and Ireland nursing."
              }
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#FF6A00] to-[#FF8C00] rounded-lg flex items-center justify-center mb-6">
                  <cert.icon size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#111111] mb-2">{cert.title}</h3>
                <div className="text-sm text-[#FF6A00] mb-4">{cert.region}</div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.exams.map((exam, i) => (
                    <span key={i} className="px-3 py-1 bg-[#F5F5F5] rounded-full text-xs text-gray-700">
                      {exam}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Modules */}
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
              Training <span className="text-[#FF6A00]">Modules</span>
            </h2>
            <p className="text-lg text-gray-600">
              Structured learning pathway covering all essential nursing competencies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Fundamentals of Nursing Practice",
              "Medical-Surgical Nursing",
              "Maternal & Child Health",
              "Psychiatric & Mental Health Nursing",
              "Critical Care & Emergency Nursing",
              "Pharmacology & Drug Administration",
              "Infection Control & Safety",
              "Professional Ethics & Communication",
              "Cultural Competence in Healthcare",
              "Documentation & Legal Aspects",
              "Evidence-Based Practice",
              "Leadership & Management"
            ].map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index % 6) * 0.1 }}
                className="flex items-center gap-4 bg-[#F5F5F5] rounded-lg p-6 hover:bg-[#FF6A00]/5 transition-colors"
              >
                <div className="w-10 h-10 bg-[#FF6A00] rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen size={20} className="text-white" />
                </div>
                <span className="font-medium text-[#111111]">{module}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
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
              Eligibility <span className="text-[#FF6A00]">Criteria</span>
            </h2>
            <p className="text-lg text-gray-300">
              Requirements for enrolling in our nursing certification programs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: FileText,
                title: "Education",
                items: ["Bachelor's or Diploma in Nursing", "Transcript of records", "Degree certificate"]
              },
              {
                icon: Globe,
                title: "Language",
                items: ["English proficiency (IELTS/OET)", "Minimum IELTS 6.5 or equivalent", "OET Grade B in all modules"]
              },
              {
                icon: Users,
                title: "Experience",
                items: ["1-2 years clinical experience (preferred)", "Valid nursing license", "Good standing certificate"]
              }
            ].map((criteria, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#FF6A00] to-[#FF8C00] rounded-lg flex items-center justify-center mb-6">
                  <criteria.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{criteria.title}</h3>
                <ul className="space-y-2">
                  {criteria.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                      <CheckCircle2 size={16} className="text-[#FF6A00] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked <span className="text-[#FF6A00]">Questions</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-[#F5F5F5] rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-[#FF6A00]/5 transition-colors"
                >
                  <span className="font-bold text-[#111111] pr-4">{faq.question}</span>
                  <span className={`text-[#FF6A00] text-2xl transition-transform ${openFAQ === index ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-5"
                  >
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-4xl mx-auto bg-gradient-to-br from-[#111111] to-[#1a1a1a] rounded-2xl p-12 text-white"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Start Your <span className="text-[#FF6A00]">Certification Journey?</span>
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Join thousands of nurses who have successfully obtained international certifications with our expert guidance
            </p>
            <a
              href="/contact"
              className="inline-block px-10 py-4 bg-gradient-to-r from-[#FF6A00] to-[#FF8C00] text-white rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Apply Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}