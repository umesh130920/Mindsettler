import SectionWrapper from '../components/SectionWrapper';

const Placeholder = ({ title, description }) => {
  return (
    <div className="min-h-screen pt-24">
      <SectionWrapper className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3F2965] mb-6">
            {title}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Placeholder;

