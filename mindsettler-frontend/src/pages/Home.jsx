import { motion } from 'framer-motion';
import Button from '../components/Button';
import SectionWrapper from '../components/SectionWrapper';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-[#3F2965]/5 via-white to-[#DD1764]/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-[#3F2965]">A Safe Space to</span>
            <br />
            <span className="text-[#DD1764]">Understand Your Mind</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            MindSettler by Parnika offers psycho-education and counseling services 
            to help you navigate your mental health journey with compassion and understanding.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button to="/contact" size="lg">
              Book Your First Session
            </Button>
          </motion.div>
        </div>
      </section>

      {/* What is MindSettler */}
      <SectionWrapper className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3F2965] mb-4">
              What is MindSettler?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A compassionate platform dedicated to mental health awareness, 
              psycho-education, and personalized counseling services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Psycho-Education',
                description: 'Learn about mental health in a safe, non-judgmental environment. Understanding is the first step toward healing.',
                icon: '📚',
              },
              {
                title: 'Personalized Counseling',
                description: 'One-on-one sessions tailored to your unique needs and circumstances. Your journey, your pace.',
                icon: '💬',
              },
              {
                title: 'Safe & Confidential',
                description: 'Your privacy and trust are our top priorities. Every conversation is held in strict confidence.',
                icon: '🔒',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-[#3F2965] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Who It Helps */}
      <SectionWrapper className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3F2965] mb-4">
              Who We Help
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Individuals seeking understanding of their mental health',
              'People navigating anxiety, stress, or life transitions',
              'Those looking for psycho-educational resources',
              'Anyone wanting a safe space to explore their thoughts and feelings',
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md"
              >
                <div className="w-2 h-2 rounded-full bg-[#DD1764] mt-2 flex-shrink-0" />
                <p className="text-gray-700 text-lg">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Why Psycho-Education Matters */}
      <SectionWrapper className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#3F2965] to-[#DD1764] rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Psycho-Education Matters
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-6 opacity-95">
              Knowledge empowers. Understanding your mental health helps you make 
              informed decisions, reduces stigma, and creates a foundation for 
              meaningful growth and healing.
            </p>
            <Link to="/awareness">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#3F2965]">
                Explore Awareness Resources
              </Button>
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* Journey Preview */}
      <SectionWrapper className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3F2965] mb-4">
            Your Journey Starts Here
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Every step forward is progress. Explore the journey from awareness to growth.
          </p>
          <Link to="/journey">
            <Button variant="secondary" size="lg">
              Discover Your Journey
            </Button>
          </Link>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Home;

