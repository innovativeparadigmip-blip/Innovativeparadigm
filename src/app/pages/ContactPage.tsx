import { motion } from "motion/react";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
    alert("Thank you for your inquiry! We'll get back to you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      country: "",
      service: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
              Get in <span className="text-[#FF6A00]">Touch</span>
            </h1>
            <p className="text-xl text-gray-300">
              Start your journey to global healthcare excellence. Our team is ready to assist you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-[#111111] mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#111111] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#F5F5F5] border border-gray-200 rounded-lg focus:outline-none focus:border-[#FF6A00] transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#111111] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#F5F5F5] border border-gray-200 rounded-lg focus:outline-none focus:border-[#FF6A00] transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#111111] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#F5F5F5] border border-gray-200 rounded-lg focus:outline-none focus:border-[#FF6A00] transition-colors"
                      placeholder="+1 234 567 890"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-[#111111] mb-2">
                      Current Country *
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#F5F5F5] border border-gray-200 rounded-lg focus:outline-none focus:border-[#FF6A00] transition-colors"
                      placeholder="India"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-[#111111] mb-2">
                      Service of Interest *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#F5F5F5] border border-gray-200 rounded-lg focus:outline-none focus:border-[#FF6A00] transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="nursing-training">Nursing Training</option>
                      <option value="certification">International Certification</option>
                      <option value="placement">Global Placement</option>
                      <option value="student-programs">Student Programs</option>
                      <option value="innovation">Innovation Projects</option>
                      <option value="consultation">Career Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#111111] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-[#F5F5F5] border border-gray-200 rounded-lg focus:outline-none focus:border-[#FF6A00] transition-colors resize-none"
                    placeholder="Tell us about your goals and how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#FF6A00] to-[#FF8C00] text-white rounded-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Send Message <Send size={20} />
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-[#111111] mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-8">
                  Reach out to us through any of these channels. We're here to help you achieve your global healthcare career goals.
                </p>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <div className="bg-[#F5F5F5] rounded-xl p-6 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#FF6A00] to-[#FF8C00] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#111111] mb-2">Email Us</h3>
                      <a href="mailto:info@innovativeparadigm.com" className="text-gray-600 hover:text-[#FF6A00] transition-colors">
                        info@innovativeparadigm.com
                      </a>
                      <br />
                      <a href="mailto:careers@innovativeparadigm.com" className="text-gray-600 hover:text-[#FF6A00] transition-colors">
                        careers@innovativeparadigm.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-[#F5F5F5] rounded-xl p-6 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#FF6A00] to-[#FF8C00] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#111111] mb-2">Call Us</h3>
                      <a href="tel:+1234567890" className="text-gray-600 hover:text-[#FF6A00] transition-colors block">
                        +1 (234) 567-890 (US)
                      </a>
                      <a href="tel:+971501234567" className="text-gray-600 hover:text-[#FF6A00] transition-colors block">
                        +971 50 123 4567 (UAE)
                      </a>
                      <a href="tel:+966501234567" className="text-gray-600 hover:text-[#FF6A00] transition-colors block">
                        +966 50 123 4567 (KSA)
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="bg-gradient-to-br from-[#25D366]/10 to-[#25D366]/5 border-2 border-[#25D366]/20 rounded-xl p-6 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#25D366] rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageSquare size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#111111] mb-2">WhatsApp</h3>
                      <p className="text-gray-600 mb-3">
                        Quick responses for urgent inquiries
                      </p>
                      <a
                        href="https://wa.me/1234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-2 bg-[#25D366] text-white rounded-lg hover:bg-[#20BA5A] transition-colors"
                      >
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>

                {/* Office Location */}
                <div className="bg-[#F5F5F5] rounded-xl p-6 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#FF6A00] to-[#FF8C00] rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#111111] mb-2">Global Headquarters</h3>
                      <p className="text-gray-600">
                        International Business Tower<br />
                        Downtown District<br />
                        Dubai, United Arab Emirates
                      </p>
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="bg-[#F5F5F5] rounded-xl p-6 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#FF6A00] to-[#FF8C00] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#111111] mb-2">Office Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM (GST)<br />
                        Saturday: 10:00 AM - 2:00 PM (GST)<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Regional Offices */}
              <div className="bg-gradient-to-br from-[#111111] to-[#1a1a1a] rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Regional Offices</h3>
                <div className="space-y-4">
                  <div>
                    <div className="font-bold text-[#FF6A00] mb-1">Middle East</div>
                    <div className="text-sm text-gray-300">Dubai, Abu Dhabi, Riyadh, Doha</div>
                  </div>
                  <div>
                    <div className="font-bold text-[#FF6A00] mb-1">Europe</div>
                    <div className="text-sm text-gray-300">London, Berlin, Dublin</div>
                  </div>
                  <div>
                    <div className="font-bold text-[#FF6A00] mb-1">Asia Pacific</div>
                    <div className="text-sm text-gray-300">Mumbai, Manila, Colombo</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#111111] mb-6">
              Visit Our <span className="text-[#FF6A00]">Office</span>
            </h2>
            <p className="text-lg text-gray-600">
              Schedule an in-person consultation at our global headquarters
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Map Placeholder */}
            <div className="w-full h-[500px] bg-gradient-to-br from-[#F5F5F5] to-[#E5E5E5] flex items-center justify-center relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1570106413982-7f2897b8d0c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBuZXR3b3JrJTIwd29ybGQlMjBtYXB8ZW58MXx8fHwxNzcyNDE3MjQzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Global network map"
                  className="w-full h-full object-cover opacity-30"
                />
              </div>
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#FF6A00] to-[#FF8C00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#111111] mb-2">Global Headquarters</h3>
                <p className="text-gray-600">Dubai, United Arab Emirates</p>
                <button className="mt-6 px-6 py-3 bg-gradient-to-r from-[#FF6A00] to-[#FF8C00] text-white rounded-lg hover:shadow-xl transition-all">
                  Get Directions
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#111111] mb-6">
              Before You Contact
            </h2>
            <p className="text-lg text-gray-600">
              You might find answers to your questions here
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Nursing Certification", link: "/nursing", desc: "Learn about our training programs" },
              { title: "Student Programs", link: "/student-programs", desc: "International opportunities for students" },
              { title: "Placement Process", link: "/placement", desc: "Understand our recruitment process" }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="block bg-[#F5F5F5] rounded-xl p-6 hover:shadow-xl hover:scale-105 transition-all"
              >
                <h3 className="font-bold text-lg text-[#111111] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
