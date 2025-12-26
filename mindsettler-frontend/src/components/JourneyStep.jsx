import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const JourneyStep = ({ 
  number, 
  title, 
  description, 
  icon, 
  delay = 0,
  isLast = false 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
      className="relative flex flex-col items-center text-center"
    >
      {/* Step Number Circle */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#3F2965] to-[#DD1764] flex items-center justify-center text-white text-2xl md:text-3xl font-bold shadow-lg mb-4"
      >
        {number}
      </motion.div>

      {/* Icon */}
      {icon && (
        <div className="text-4xl md:text-5xl mb-4 text-[#3F2965]">
          {icon}
        </div>
      )}

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-semibold text-[#3F2965] mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 max-w-md leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default JourneyStep;


