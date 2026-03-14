import { motion } from "motion/react";
import { Globe, Briefcase, CheckCircle2, FileCheck, Users, TrendingUp, MapPin, Award, ArrowRight, Plane } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export function PlacementPage() {
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
              <span className="text-[#FF6A00]">🌐 Global Opportunities</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              International Placement & <span className="text-[#FF6A00]">Global Opportunities</span>
            </h1>
            <p className="text-xl text-gray-300">
              Strategic placement services connecting healthcare professionals with premier opportunities worldwide
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
                Your Gateway to <span className="text-[#FF6A00]">Global Healthcare Careers</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With strategic partnerships across 50+ countries, we connect certified healthcare professionals with prestigious institutions in GCC, Europe, and beyond. Our placement services go beyond job matching - we provide comprehensive support throughout your entire journey.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                From initial screening to visa processing and relocation support, our experienced team ensures a smooth transition to your dream international position.
              </p>
              <div className="space-y-4">
                {[
                  "Direct partnerships with 500+ healthcare facilities",
                  "End-to-end placement and relocation support",
                  "Competitive salary negotiations",
                  "Family relocation assistance available"
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
                src="https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHBhcnRuZXJzaGlwfGVufDF8fHx8MTc3MjM1Njg2N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Partnership handshake"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Countries We Serve */}
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
              Countries We <span className="text-[#FF6A00]">Serve</span>
            </h2>
            <p className="text-lg text-gray-600">
              Premium placement opportunities across strategic global regions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                region: "United Arab Emirates",
                icon: MapPin,
                cities: ["Dubai", "Abu Dhabi", "Sharjah", "Al Ain"],
                positions: "1,500+ open positions",
                salary: "Tax-free competitive packages"
              },
              {
                region: "Saudi Arabia",
                icon: MapPin,
                cities: ["Riyadh", "Jeddah", "Dammam", "Makkah"],
                positions: "2,000+ open positions",
                salary: "Excellent benefits + housing"
              },
              {
                region: "Qatar",
                icon: MapPin,
                cities: ["Doha", "Al Wakrah", "Al Rayyan"],
                positions: "800+ open positions",
                salary: "Premium compensation"
              },
              {
                region: "Germany",
                icon: MapPin,
                cities: ["Berlin", "Munich", "Frankfurt", "Hamburg"],
                positions: "1,200+ open positions",
                salary: "EU benefits + work-life balance"
              },
              {
                region: "United Kingdom",
                icon: MapPin,
                cities: ["London", "Manchester", "Birmingham", "Edinburgh"],
                positions: "1,000+ open positions",
                salary: "NHS & private healthcare"
              },
              {
                region: "Ireland",
                icon: MapPin,
                cities: ["Dublin", "Cork", "Galway", "Limerick"],
                positions: "600+ open positions",
                salary: "Excellent career progression"
              }
            ].map((country, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#FF6A00] to-[#FF8C00] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <country.icon size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#111111] mb-4">{country.region}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex flex-wrap gap-2">
                    {country.cities.map((city, i) => (
                      <span key={i} className="px-2 py-1 bg-[#F5F5F5] rounded text-xs text-gray-700">
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-sm text-gray-600 mb-2">
                  <strong className="text-[#FF6A00]">{country.positions}</strong>
                </div>
                <div className="text-sm text-gray-600">
                  {country.salary}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Employer Partnerships */}
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
              Employer <span className="text-[#FF6A00]">Partnerships</span>
            </h2>
            <p className="text-lg text-gray-600">
              Strategic relationships with world-class healthcare institutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { type: "Major Hospital Groups", count: "150+" },
              { type: "Private Healthcare Facilities", count: "200+" },
              { type: "Government Healthcare Systems", count: "80+" },
              { type: "Specialty Clinics", count: "70+" }
            ].map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-[#F5F5F5] rounded-xl p-8"
              >
                <div className="text-5xl font-bold text-[#FF6A00] mb-3">{partner.count}</div>
                <div className="text-gray-700 font-medium">{partner.type}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Process */}
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
              Recruitment <span className="text-[#FF6A00]">Process</span>
            </h2>
            <p className="text-lg text-gray-300">
              A streamlined pathway from application to deployment
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: "01", title: "Initial Screening", desc: "Profile review and qualification assessment" },
                { step: "02", title: "Job Matching", desc: "Strategic alignment with suitable positions" },
                { step: "03", title: "Employer Introduction", desc: "Interview coordination and preparation" },
                { step: "04", title: "Offer Negotiation", desc: "Contract review and salary negotiation" },
                { step: "05", title: "Documentation", desc: "Credential verification and licensing" },
                { step: "06", title: "Visa Processing", desc: "Complete visa application support" },
                { step: "07", title: "Pre-Departure", desc: "Orientation and travel arrangements" },
                { step: "08", title: "Deployment", desc: "Arrival support and onboarding" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FF6A00] to-[#FF8C00] rounded-lg flex items-center justify-center mb-4">
                    <span className="text-xl font-bold">{item.step}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Checklist */}
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
              Requirements <span className="text-[#FF6A00]">Checklist</span>
            </h2>
            <p className="text-lg text-gray-600">
              Essential documents and qualifications for international placement
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                category: "Educational Documents",
                items: ["Bachelor's/Diploma in Nursing", "Official transcripts", "Degree certificate (notarized)", "Course syllabus"]
              },
              {
                category: "Professional Credentials",
                items: ["Valid nursing license", "Good standing certificate", "Experience certificates", "Reference letters"]
              },
              {
                category: "Certifications",
                items: ["Prometric/DHA/HAAD/MOH", "BLS/ACLS certificates", "Specialty certifications", "Continuing education"]
              },
              {
                category: "Language Proficiency",
                items: ["IELTS (6.5+ overall)", "or OET (Grade B)", "Valid within 2 years", "Academic module preferred"]
              },
              {
                category: "Personal Documents",
                items: ["Valid passport (6+ months)", "Passport-size photographs", "Police clearance certificate", "Medical fitness certificate"]
              },
              {
                category: "Additional Requirements",
                items: ["Updated CV/Resume", "Professional portfolio", "Dataflow/verification", "Criminal background check"]
              }
            ].map((req, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#F5F5F5] rounded-xl p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#FF6A00] rounded-lg flex items-center justify-center">
                    <FileCheck size={20} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#111111]">{req.category}</h3>
                </div>
                <ul className="space-y-3">
                  {req.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
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

      {/* Interview Preparation */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-[#111111] mb-6">
                Interview <span className="text-[#FF6A00]">Preparation</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our comprehensive interview preparation ensures you're fully ready to make the best impression on potential employers.
              </p>
              <div className="space-y-4">
                {[
                  "Mock interviews with healthcare recruiters",
                  "Country-specific interview etiquette training",
                  "Technical and clinical question preparation",
                  "Behavioral interview techniques",
                  "Salary negotiation strategies",
                  "Cultural awareness and adaptation"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-4">
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
              className="bg-gradient-to-br from-[#111111] to-[#1a1a1a] rounded-2xl p-10 text-white"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF6A00] to-[#FF8C00] rounded-xl flex items-center justify-center mb-6">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Success Statistics</h3>
              <div className="space-y-6">
                {[
                  { label: "Interview Success Rate", value: "94%" },
                  { label: "Average Placement Time", value: "45 days" },
                  { label: "Candidate Satisfaction", value: "98%" },
                  { label: "Employer Retention Rate", value: "92%" }
                ].map((stat, index) => (
                  <div key={index} className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="text-gray-300">{stat.label}</span>
                    <span className="text-3xl font-bold text-[#FF6A00]">{stat.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deployment Support */}
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
              Deployment <span className="text-[#FF6A00]">Support</span>
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive support for a smooth transition to your new role
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Plane,
                title: "Travel Arrangements",
                description: "Flight booking and travel logistics"
              },
              {
                icon: MapPin,
                title: "Accommodation Support",
                description: "Temporary and permanent housing assistance"
              },
              {
                icon: FileCheck,
                title: "Onboarding Assistance",
                description: "Orientation and documentation completion"
              },
              {
                icon: Users,
                title: "Ongoing Mentorship",
                description: "Continued support during settlement"
              }
            ].map((support, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#F5F5F5] rounded-xl p-8 text-center hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF6A00] to-[#FF8C00] rounded-xl flex items-center justify-center mx-auto mb-6">
                  <support.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#111111] mb-3">{support.title}</h3>
                <p className="text-gray-600 text-sm">{support.description}</p>
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
              Ready to Start Your Global Career?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let us connect you with your dream international healthcare position
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/contact"
                className="px-10 py-4 bg-white text-[#FF6A00] rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                Apply for Placement <ArrowRight size={20} />
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
