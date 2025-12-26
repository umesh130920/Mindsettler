import SectionWrapper from '../components/SectionWrapper';
import FAQItem from '../components/FAQItem';
import Button from '../components/Button';

const FAQ = () => {
  const faqs = [
    {
      question: 'What types of sessions do you offer?',
      answer: 'We offer psycho-education sessions, individual counseling, and combined approaches that integrate both. Each session is tailored to your specific needs and goals. You can discuss your preferences during the initial consultation.',
    },
    {
      question: 'How long are the sessions?',
      answer: 'Session duration typically ranges from 45 to 60 minutes, depending on the type of session and your needs. We can discuss the optimal length for you during booking.',
    },
    {
      question: 'Is everything confidential?',
      answer: 'Absolutely. Confidentiality is one of our core principles. All sessions and communications are held in strict confidence. We follow professional ethical guidelines to protect your privacy at all times.',
    },
    {
      question: 'How do I book a session?',
      answer: 'You can book a session through our contact page. Simply fill out the form with your preferred date and time, and we\'ll get back to you to confirm the details. The process is simple and straightforward.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods including credit/debit cards and digital payment options. Payment details will be provided during the booking process. All transactions are secure and encrypted.',
    },
    {
      question: 'Do you offer online or in-person sessions?',
      answer: 'We offer both online and in-person sessions, depending on your preference and location. Online sessions are conducted via secure video platforms, while in-person sessions are available at our designated location. You can choose what works best for you.',
    },
    {
      question: 'What if I need to reschedule or cancel?',
      answer: 'We understand that life happens. You can reschedule or cancel your session with at least 24 hours notice. Please contact us as soon as possible if you need to make changes to your appointment.',
    },
    {
      question: 'Do I need a referral to book a session?',
      answer: 'No referral is needed. You can book a session directly through our platform. We welcome anyone who is seeking support, understanding, or guidance regarding their mental health.',
    },
    {
      question: 'What should I expect in my first session?',
      answer: 'Your first session is an opportunity for us to get to know each other. We\'ll discuss your goals, answer any questions you have, and create a plan that feels right for you. There\'s no pressure—you can share as much or as little as you\'re comfortable with.',
    },
    {
      question: 'How many sessions will I need?',
      answer: 'The number of sessions varies depending on your individual needs and goals. Some people find value in a few sessions, while others benefit from ongoing support. We\'ll work together to determine what feels right for you, with no pressure to commit to a specific number.',
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <SectionWrapper className="py-16 px-4 bg-gradient-to-br from-[#3F2965]/5 via-white to-[#DD1764]/5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3F2965] mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Find answers to common questions about our services, 
            sessions, and how we can help you.
          </p>
        </div>
      </SectionWrapper>

      {/* FAQ Items */}
      <SectionWrapper className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Still Have Questions */}
      <SectionWrapper className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-[#3F2965] to-[#DD1764] rounded-3xl p-8 md:p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-8 opacity-95">
            We're here to help. If you have any other questions or concerns, 
            please don't hesitate to reach out. We're committed to making 
            your experience as comfortable and clear as possible.
          </p>
          <Button 
            to="/contact" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-[#3F2965]"
            size="lg"
          >
            Contact Us
          </Button>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default FAQ;

