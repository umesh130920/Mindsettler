import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';

const About = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <SectionWrapper className="py-16 px-4 bg-gradient-to-br from-[#3F2965]/5 via-white to-[#DD1764]/5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3F2965] mb-6">
            About MindSettler
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            A compassionate approach to mental health and wellness
          </p>
        </div>
      </SectionWrapper>

      {/* Brand Story */}
      <SectionWrapper className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3F2965] mb-6">
            Our Story
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              MindSettler was born from a simple belief: everyone deserves a safe space 
              to understand their mind. Founded by Parnika, our platform bridges the gap 
              between mental health awareness and accessible support.
            </p>
            <p>
              We understand that seeking help can feel overwhelming. That's why we've 
              created an environment that feels calm, human, and reassuring—a place where 
              questions are welcomed and understanding is prioritized.
            </p>
            <p>
              Our approach combines psycho-education with personalized counseling, 
              empowering individuals to take control of their mental health journey 
              with knowledge, compassion, and professional guidance.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Mission & Vision */}
      <SectionWrapper className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#3F2965] mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To provide accessible, compassionate mental health support through 
                psycho-education and counseling, helping individuals understand their 
                minds and navigate their unique journeys toward wellness.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#3F2965] mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A world where mental health is understood, stigma is eliminated, 
                and everyone has access to the support they need to thrive. We envision 
                a community where seeking help is normalized and celebrated.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Approach */}
      <SectionWrapper className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3F2965] mb-8 text-center">
            Our Approach to Psycho-Education
          </h2>
          
          <div className="space-y-6">
            {[
              {
                title: 'Non-Judgmental Learning',
                description: 'We provide information in clear, accessible language without clinical jargon. Learning about mental health should feel safe and empowering.',
              },
              {
                title: 'Personalized Understanding',
                description: 'Every individual\'s experience is unique. We tailor our approach to help you understand your specific situation and needs.',
              },
              {
                title: 'Evidence-Based Information',
                description: 'All psycho-educational content is grounded in current research and best practices, presented in a way that\'s easy to understand.',
              },
              {
                title: 'Holistic Perspective',
                description: 'We consider the whole person—mind, body, and environment—recognizing that mental health is interconnected with all aspects of life.',
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl"
              >
                <div className="w-12 h-12 rounded-full bg-[#DD1764] flex items-center justify-center text-white font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#3F2965] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Confidentiality & Trust */}
      <SectionWrapper className="py-20 px-4 bg-gradient-to-br from-[#3F2965] to-[#DD1764]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Confidentiality and Trust
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-8 opacity-95">
            Your privacy is sacred to us. Every conversation, every session, and every 
            piece of information you share is held in strict confidence. We create a 
            safe space where you can be open, honest, and vulnerable without fear.
          </p>
          <p className="text-lg opacity-90">
            Trust is the foundation of our relationship with you, and we work tirelessly 
            to earn and maintain that trust every day.
          </p>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#3F2965] mb-4">
            Ready to Begin?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Take the first step toward understanding your mind and improving your mental wellness.
          </p>
          <Button to="/contact" size="lg">
            Book Your Session
          </Button>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default About;

