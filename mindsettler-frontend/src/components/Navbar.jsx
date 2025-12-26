import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/awareness', label: 'Awareness' },
    { path: '/how-it-works', label: 'How It Works' },
    { path: '/journey', label: 'Journey' },
    { path: '/faq', label: 'FAQ' },
    { path: '/resources', label: 'Resources' },
    { path: '/contact', label: 'Contact' },
    { path: '/corporate', label: 'Corporate' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl md:text-3xl font-bold"
            >
              <span className="text-[#3F2965]">Mind</span>
              <span className="text-[#DD1764]">Settler</span>
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm lg:text-base font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'bg-[#3F2965] text-white'
                    : 'text-[#3F2965] hover:bg-[#3F2965]/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block"
          >
            <Link
              to="/contact"
              className="px-4 py-2 bg-[#DD1764] text-white rounded-lg font-medium hover:bg-[#DD1764]/90 transition-colors"
            >
              Book Session
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-[#3F2965] p-2"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;


