import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';
import Button from '../components/Button';

const Resources = () => {
  const resourceCategories = [
    {
      title: 'Articles & Blogs',
      items: [
        {
          title: 'Understanding Mental Health Basics',
          description: 'A comprehensive guide to mental health fundamentals',
          type: 'Article',
        },
        {
          title: 'Coping Strategies for Daily Stress',
          description: 'Practical techniques to manage everyday stressors',
          type: 'Article',
        },
        {
          title: 'Building Healthy Relationships',
          description: 'How to nurture meaningful connections',
          type: 'Article',
        },
      ],
    },
    {
      title: 'Educational Videos',
      items: [
        {
          title: 'Introduction to Psycho-Education',
          description: 'Learn what psycho-education means and how it can help',
          type: 'Video',
        },
        {
          title: 'Mindfulness Practices',
          description: 'Guided mindfulness exercises for daily practice',
          type: 'Video',
        },
        {
          title: 'Self-Care Essentials',
          description: 'Practical self-care strategies for mental wellness',
          type: 'Video',
        },
      ],
    },
    {
      title: 'Guided Exercises',
      items: [
        {
          title: 'Emotional Regulation Workbook',
          description: 'Exercises to help understand and manage emotions',
          type: 'Workbook',
        },
        {
          title: 'Journaling Prompts',
          description: 'Thoughtful prompts for self-reflection',
          type: 'Exercise',
        },
        {
          title: 'Breathing Techniques Guide',
          description: 'Step-by-step breathing exercises for calm',
          type: 'Guide',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <SectionWrapper className="py-16 px-4 bg-gradient-to-br from-[#3F2965]/5 via-white to-[#DD1764]/5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3F2965] mb-6">
            Resources
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Explore our collection of articles, videos, and exercises 
            designed to support your mental health journey.
          </p>
        </div>
      </SectionWrapper>

      {/* Resource Categories */}
      <SectionWrapper className="py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {resourceCategories.map((category, categoryIndex) => (
            <div key={category.title}>
              <h2 className="text-3xl font-bold text-[#3F2965] mb-8 text-center">
                {category.title}
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.3) + (itemIndex * 0.1) }}
                    className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                  >
                    <span className="inline-block px-3 py-1 bg-[#DD1764]/10 text-[#DD1764] text-sm font-medium rounded-full mb-4">
                      {item.type}
                    </span>
                    
                    <h3 className="text-xl font-semibold text-[#3F2965] mb-3">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <button className="text-[#DD1764] font-medium hover:underline">
                      Learn More →
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Additional Resources */}
      <SectionWrapper className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold text-[#3F2965] mb-6 text-center">
              More Resources Coming Soon
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
              We're continuously adding new resources to support your mental health journey. 
              Check back regularly for updates, or subscribe to our newsletter to be notified 
              when new content is available.
            </p>
            <div className="text-center">
              <Button to="/contact" variant="outline">
                Request a Resource
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#3F2965] mb-4">
            Need Personalized Support?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            While resources are helpful, sometimes personalized guidance makes all the difference. 
            Book a session to get tailored support for your unique situation.
          </p>
          <Button to="/contact" size="lg">
            Book a Session
          </Button>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Resources;

