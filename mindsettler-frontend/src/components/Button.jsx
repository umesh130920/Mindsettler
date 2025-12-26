import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  to, 
  onClick, 
  type = 'button',
  className = '',
  size = 'md'
}) => {
  const baseStyles = 'font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-[#DD1764] text-white hover:bg-[#DD1764]/90 focus:ring-[#DD1764]',
    secondary: 'bg-[#3F2965] text-white hover:bg-[#3F2965]/90 focus:ring-[#3F2965]',
    outline: 'border-2 border-[#3F2965] text-[#3F2965] hover:bg-[#3F2965] hover:text-white focus:ring-[#3F2965]',
    ghost: 'text-[#3F2965] hover:bg-[#3F2965]/10 focus:ring-[#3F2965]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const buttonContent = (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={buttonClasses}
      onClick={onClick}
      type={type}
    >
      {children}
    </motion.button>
  );

  if (to) {
    return (
      <Link to={to} className="inline-block">
        {buttonContent}
      </Link>
    );
  }

  return buttonContent;
};

export default Button;


