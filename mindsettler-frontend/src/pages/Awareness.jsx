import { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';

const Awareness = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const articles = [
    {
      id: 1,
      title: 'Understanding Anxiety',
      excerpt: 'Anxiety is a normal response to stress, but when it becomes overwhelming, it can impact daily life. Learn about the signs, symptoms, and ways to manage anxiety effectively.',
      fullContent: 'Anxiety is one of the most common mental health experiences. It\'s our body\'s natural response to perceived threats or stress. While some anxiety is normal and even helpful, excessive anxiety can interfere with daily activities and well-being. Common symptoms include persistent worry, restlessness, difficulty concentrating, and physical symptoms like rapid heartbeat or sweating. Understanding anxiety is the first step toward managing it. Techniques like deep breathing, mindfulness, and professional support can help you navigate anxiety more effectively.',
      category: 'Mental Health Basics',
    },
    {
      id: 2,
      title: 'The Importance of Self-Care',
      excerpt: 'Self-care isn\'t selfish—it\'s essential. Discover practical ways to prioritize your mental and emotional well-being in your daily routine.',
      fullContent: 'Self-care is the practice of taking action to preserve or improve your own health, well-being, and happiness. It\'s not about being selfish; it\'s about recognizing that you can\'t pour from an empty cup. Effective self-care includes physical activities (exercise, sleep, nutrition), emotional practices (journaling, therapy, expressing feelings), and mental activities (reading, learning, mindfulness). Regular self-care helps build resilience, reduces stress, and improves overall quality of life. Remember, self-care looks different for everyone—find what works for you.',
      category: 'Wellness',
    },
    {
      id: 3,
      title: 'Recognizing Depression',
      excerpt: 'Depression is more than feeling sad. It\'s a complex condition that affects how you think, feel, and function. Understanding depression can help you or someone you care about seek appropriate support.',
      fullContent: 'Depression is a common but serious mood disorder that affects how you feel, think, and handle daily activities. It\'s different from occasional sadness or grief. Symptoms can include persistent sadness, loss of interest in activities, changes in appetite or sleep, fatigue, feelings of worthlessness, and difficulty concentrating. Depression can affect anyone, regardless of age, gender, or background. It\'s important to remember that depression is not a sign of weakness and it\'s treatable. Professional help, support from loved ones, and self-care strategies can all play important roles in recovery.',
      category: 'Mental Health Basics',
    },
    {
      id: 4,
      title: 'Building Emotional Resilience',
      excerpt: 'Resilience is the ability to bounce back from challenges. Learn how to develop emotional resilience and navigate life\'s ups and downs with greater ease.',
      fullContent: 'Emotional resilience is the ability to adapt to stressful situations and bounce back from adversity. It doesn\'t mean avoiding difficult emotions, but rather learning to navigate them effectively. Building resilience involves developing healthy coping strategies, maintaining strong relationships, practicing self-compassion, and learning from challenges. Resilient people acknowledge their feelings, seek support when needed, and maintain a sense of hope even during difficult times. You can strengthen your resilience through mindfulness practices, regular self-reflection, and building a support network.',
      category: 'Wellness',
    },
    {
      id: 5,
      title: 'Stress Management Techniques',
      excerpt: 'Stress is a part of life, but it doesn\'t have to control you. Explore evidence-based techniques for managing stress and maintaining balance.',
      fullContent: 'Stress is your body\'s response to demands or challenges. While some stress can be motivating, chronic stress can negatively impact your physical and mental health. Effective stress management involves identifying your stressors, developing healthy coping mechanisms, and creating balance in your life. Techniques like deep breathing exercises, progressive muscle relaxation, regular physical activity, time management, and setting boundaries can all help manage stress. It\'s also important to recognize when stress becomes overwhelming and to seek professional support when needed.',
      category: 'Wellness',
    },
    {
      id: 6,
      title: 'Understanding Therapy and Counseling',
      excerpt: 'Therapy and counseling are valuable tools for mental health support. Learn what to expect and how these services can help you on your journey.',
      fullContent: 'Therapy and counseling provide a safe, confidential space to explore your thoughts, feelings, and behaviors with a trained professional. These services can help you understand yourself better, develop coping strategies, work through challenges, and make positive changes in your life. There are different types of therapy approaches, and finding the right fit is important. A good therapeutic relationship is built on trust, respect, and collaboration. Remember, seeking therapy is a sign of strength and self-awareness, not weakness. It\'s an investment in your mental health and overall well-being.',
      category: 'Getting Help',
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <SectionWrapper className="py-16 px-4 bg-gradient-to-br from-[#3F2965]/5 via-white to-[#DD1764]/5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3F2965] mb-6">
            Psycho-Education & Awareness
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Learn about mental health in simple, accessible language. 
            Knowledge empowers understanding and reduces stigma.
          </p>
        </div>
      </SectionWrapper>

      {/* Articles Grid */}
      <SectionWrapper className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-[#DD1764]/10 text-[#DD1764] text-sm font-medium rounded-full mb-4">
                    {article.category}
                  </span>
                  
                  <h3 className="text-xl font-semibold text-[#3F2965] mb-3">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {expandedCard === article.id ? article.fullContent : article.excerpt}
                  </p>
                  
                  <button
                    onClick={() => setExpandedCard(expandedCard === article.id ? null : article.id)}
                    className="text-[#DD1764] font-medium hover:underline"
                  >
                    {expandedCard === article.id ? 'Read Less' : 'Read More'}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Call to Action */}
      <SectionWrapper className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-[#3F2965] to-[#DD1764] rounded-3xl p-8 md:p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Learn More?
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-8 opacity-95">
            Understanding mental health is an ongoing journey. If you have questions 
            or want personalized guidance, we're here to help.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-white text-[#3F2965] rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Awareness;

