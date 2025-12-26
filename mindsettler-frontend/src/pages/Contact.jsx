import { useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sessionType: '',
    preferredDate: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here (no backend in this project)
    alert('Thank you for your inquiry! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      sessionType: '',
      preferredDate: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <SectionWrapper className="py-16 px-4 bg-gradient-to-br from-[#3F2965]/5 via-white to-[#DD1764]/5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3F2965] mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ready to begin your journey? Book a session or reach out 
            with any questions. We're here to help.
          </p>
        </div>
      </SectionWrapper>

      {/* Contact Form */}
      <SectionWrapper className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#3F2965] mb-8">
              Book Your Session
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3F2965] focus:border-transparent outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3F2965] focus:border-transparent outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3F2965] focus:border-transparent outline-none transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="sessionType" className="block text-sm font-medium text-gray-700 mb-2">
                    Session Type *
                  </label>
                  <select
                    id="sessionType"
                    name="sessionType"
                    value={formData.sessionType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3F2965] focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select session type</option>
                    <option value="psycho-education">Psycho-Education</option>
                    <option value="counseling">Individual Counseling</option>
                    <option value="combined">Combined Approach</option>
                    <option value="consultation">Initial Consultation</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date & Time
                </label>
                <input
                  type="datetime-local"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3F2965] focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3F2965] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us a bit about what you're looking for..."
                />
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#DD1764] text-white rounded-lg font-medium hover:bg-[#DD1764]/90 transition-colors text-lg"
                >
                  Submit Inquiry
                </button>
              </motion.div>
            </form>
          </div>
        </div>
      </SectionWrapper>

      {/* Contact Information */}
      <SectionWrapper className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#DD1764] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#3F2965] mb-2">Email</h3>
              <p className="text-gray-600">contact@mindsettler.com</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#DD1764] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#3F2965] mb-2">Phone</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#DD1764] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#3F2965] mb-2">Response Time</h3>
              <p className="text-gray-600">Within 24 hours</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Corporate Inquiry CTA */}
      <SectionWrapper className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-[#3F2965] to-[#DD1764] rounded-3xl p-8 md:p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Corporate Services Inquiry?
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-8 opacity-95">
            Looking for workshops, group sessions, or corporate mental health programs? 
            We offer tailored solutions for organizations.
          </p>
          <Button 
            to="/corporate" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-[#3F2965]"
            size="lg"
          >
            Learn About Corporate Services
          </Button>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Contact;

