import SectionWrapper from '../components/SectionWrapper';
import JourneyStep from '../components/JourneyStep';
import Button from '../components/Button';

const Journey = () => {
  const journeySteps = [
    {
      number: 1,
      title: 'Awareness',
      description: 'The first step is recognizing that you want to understand your mental health better. This awareness itself is powerful and marks the beginning of your journey.',
      icon: '🌱',
    },
    {
      number: 2,
      title: 'Understanding',
      description: 'Through psycho-education and learning, you gain insights into your thoughts, feelings, and behaviors. Knowledge becomes your tool for growth.',
      icon: '📖',
    },
    {
      number: 3,
      title: 'Support',
      description: 'With professional guidance and a safe space, you explore your experiences, develop coping strategies, and build resilience.',
      icon: '🤝',
    },
    {
      number: 4,
      title: 'Growth',
      description: 'As you continue on your path, you develop greater self-awareness, emotional regulation, and the skills to navigate life\'s challenges with confidence.',
      icon: '🌟',
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <SectionWrapper className="py-16 px-4 bg-gradient-to-br from-[#3F2965]/5 via-white to-[#DD1764]/5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3F2965] mb-6">
            Your Mental Health Journey
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Every journey begins with a single step. Your path to understanding 
            and wellness is unique, and we're here to guide you along the way.
          </p>
        </div>
      </SectionWrapper>

      {/* Journey Steps */}
      <SectionWrapper className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Progress Line */}
            <div className="hidden md:block absolute top-10 left-0 right-0 h-1 bg-gradient-to-r from-[#3F2965] via-[#DD1764] to-[#3F2965] opacity-20" />

            <div className="grid md:grid-cols-4 gap-8 relative">
              {journeySteps.map((step, index) => (
                <JourneyStep
                  key={step.number}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  icon={step.icon}
                  delay={index * 0.2}
                  isLast={index === journeySteps.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Journey Description */}
      <SectionWrapper className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3F2965] mb-6 text-center">
              Understanding the Journey
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Your mental health journey is not linear. It's a path with ups and downs, 
                discoveries and challenges. What matters is that you're moving forward, 
                even if some days feel slower than others.
              </p>
              
              <p>
                <strong className="text-[#3F2965]">Awareness</strong> is where it all begins. 
                Recognizing that you want to understand your mind better is courageous. 
                This self-awareness is the foundation of everything that follows.
              </p>
              
              <p>
                <strong className="text-[#3F2965]">Understanding</strong> comes through learning 
                and exploration. Psycho-education helps you make sense of your experiences, 
                reducing confusion and fear. Knowledge empowers you to make informed decisions 
                about your mental health.
              </p>
              
              <p>
                <strong className="text-[#3F2965]">Support</strong> is essential. You don't have 
                to navigate this journey alone. Professional guidance provides a safe space to 
                explore, process, and develop the tools you need. Support also comes from 
                building healthy relationships and communities.
              </p>
              
              <p>
                <strong className="text-[#3F2965]">Growth</strong> is the ongoing process of 
                applying what you've learned, developing resilience, and becoming more 
                comfortable with yourself. Growth isn't about perfection—it's about progress, 
                self-compassion, and continuous learning.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Personal Message */}
      <SectionWrapper className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#3F2965] to-[#DD1764] rounded-3xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Remember
            </h2>
            <p className="text-lg md:text-xl leading-relaxed opacity-95">
              Your journey is yours alone, and it's valid. There's no "right" way to 
              navigate mental health. Every step you take, no matter how small, is progress. 
              Be patient with yourself, celebrate your wins, and remember that seeking help 
              is a sign of strength, not weakness.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#3F2965] mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Take the first step today. We're here to support you every step of the way.
          </p>
          <Button to="/contact" size="lg">
            Start Your Journey
          </Button>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Journey;

