import { useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';
import { motion } from 'framer-motion';

const Corporate = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    serviceType: '',
    employeeCount: '',
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
    alert('Thank you for your corporate inquiry! We will get back to you soon.');
    setFormData({
      companyName: '',
      contactName: '',
      email: '',
      phone: '',
      serviceType: '',
      employeeCount: '',
      message: '',
    });
  };

  const services = [
    {
      title: 'Mental Health Workshops',
      description: 'Interactive workshops covering topics like stress management, work-life balance, emotional intelligence, and mental health awareness.',
      icon: '🎯',
    },
    {
      title: 'Group Counseling Sessions',
      description: 'Structured group sessions that provide a safe space for employees to discuss challenges and build resilience together.',
      icon: '👥',
    },
    {
      title: 'Leadership Mental Health Training',
      description: 'Specialized training for managers and leaders to recognize signs of mental health challenges and support their teams effectively.',
      icon: '💼',
    },
    {
      title: 'Wellness Programs',
      description: 'Comprehensive wellness programs tailored to your organization\'s needs, including ongoing support and resources.',
      icon: '🌱',
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <SectionWrapper className="py-16 px-4 bg-gradient-to-br from-[#3F2965]/5 via-white to-[#DD1764]/5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3F2965] mb-6">
            Corporate Services
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Supporting workplace mental health through workshops, 
            group sessions, and tailored wellness programs.
          </p>
        </div>
      </SectionWrapper>

      {/* Services */}
      <SectionWrapper className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3F2965] mb-12 text-center">
            Our Corporate Offerings
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-[#3F2965] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Benefits */}
      <SectionWrapper className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3F2965] mb-8 text-center">
            Why Invest in Workplace Mental Health?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Improved employee well-being and job satisfaction',
              'Reduced absenteeism and presenteeism',
              'Enhanced team collaboration and communication',
              'Increased productivity and engagement',
              'Better retention rates and employee loyalty',
              'Positive workplace culture and morale',
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md"
              >
                <div className="w-2 h-2 rounded-full bg-[#DD1764] mt-2 flex-shrink-0" />
                <p className="text-gray-700 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Approach */}
      <SectionWrapper className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#3F2965] to-[#DD1764] rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Approach
            </h2>
            <div className="space-y-4 text-lg leading-relaxed opacity-95">
              <p>
                We work closely with your organization to understand your unique needs, 
                culture, and challenges. Our programs are customized to fit your workplace 
                environment and goals.
              </p>
              <p>
                All our corporate services maintain the same principles of confidentiality, 
                respect, and evidence-based practice that guide our individual work. We 
                create safe spaces where employees can learn, grow, and support each other.
              </p>
              <p>
                Whether you're looking for one-time workshops or ongoing programs, we're 
                here to help build a mentally healthy workplace.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Inquiry Form */}
      <SectionWrapper className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#3F2965] mb-8">
              Request Corporate Services
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3F2965] focus:border-transparent outline-none transition-all"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3F2965] focus:border-transparent outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
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
                    placeholder="your.email@company.com"
                  />
                </div>

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
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Type *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3F2965] focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select service type</option>
                    <option value="workshops">Mental Health Workshops</option>
                    <option value="group-sessions">Group Counseling Sessions</option>
                    <option value="leadership-training">Leadership Training</option>
                    <option value="wellness-programs">Wellness Programs</option>
                    <option value="custom">Custom Solution</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="employeeCount" className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Employees
                  </label>
                  <select
                    id="employeeCount"
                    name="employeeCount"
                    value={formData.employeeCount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3F2965] focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select range</option>
                    <option value="1-50">1-50</option>
                    <option value="51-200">51-200</option>
                    <option value="201-500">201-500</option>
                    <option value="500+">500+</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Tell Us About Your Needs
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3F2965] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="What challenges is your organization facing? What are your goals for mental health support?"
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
                  Submit Corporate Inquiry
                </button>
              </motion.div>
            </form>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#3F2965] mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's work together to create a mentally healthy workplace for your organization.
          </p>
          <Button to="/contact" size="lg">
            Contact Us
          </Button>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Corporate;

