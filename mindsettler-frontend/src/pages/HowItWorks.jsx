import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: 'Choose Your Session',
      description: 'Select the type of session that best fits your needs—whether it\'s psycho-education, counseling, or a combination approach.',
      icon: '📋',
    },
    {
      number: 2,
      title: 'Select Time Slot',
      description: 'Pick a date and time that works for you. We offer flexible scheduling to accommodate your availability.',
      icon: '📅',
    },
    {
      number: 3,
      title: 'Payment Information',
      description: 'Securely provide your payment details. We accept various payment methods for your convenience.',
      icon: '💳',
    },
    {
      number: 4,
      title: 'Confirmation',
      description: 'Receive confirmation details and any pre-session materials. You\'ll be all set for your appointment.',
      icon: '✅',
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <SectionWrapper className="py-16 px-4 bg-gradient-to-br from-[#3F2965]/5 via-white to-[#DD1764]/5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3F2965] mb-6">
            How It Works
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Booking a session is simple and straightforward. 
            Follow these easy steps to begin your journey.
          </p>
        </div>
      </SectionWrapper>

      {/* Steps */}
      <SectionWrapper className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Progress Line */}
            <div className="hidden md:block absolute top-10 left-0 right-0 h-1 bg-gradient-to-r from-[#3F2965] via-[#DD1764] to-[#3F2965] opacity-20" />

            <div className="grid md:grid-cols-4 gap-8 relative">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Step Circle */}
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-[#3F2965] to-[#DD1764] flex items-center justify-center text-white text-3xl md:text-4xl font-bold shadow-lg mb-4 relative z-10"
                    >
                      {step.number}
                    </motion.div>

                    {/* Icon */}
                    <div className="text-4xl md:text-5xl mb-4">
                      {step.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-xl md:text-2xl font-semibold text-[#3F2965] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Additional Info */}
      <SectionWrapper className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#3F2965] mb-4">
                Session Types
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#DD1764] mr-2">•</span>
                  <span>Psycho-Education Sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#DD1764] mr-2">•</span>
                  <span>Individual Counseling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#DD1764] mr-2">•</span>
                  <span>Combined Approach</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#DD1764] mr-2">•</span>
                  <span>Follow-up Sessions</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#3F2965] mb-4">
                What to Expect
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#DD1764] mr-2">•</span>
                  <span>Confidential and safe environment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#DD1764] mr-2">•</span>
                  <span>Non-judgmental support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#DD1764] mr-2">•</span>
                  <span>Personalized approach</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#DD1764] mr-2">•</span>
                  <span>Flexible scheduling options</span>
                </li>
              </ul>
            </div>
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
            Book your first session and take the first step toward understanding your mind.
          </p>
          <Button to="/contact" size="lg">
            Book Your Session
          </Button>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default HowItWorks;

