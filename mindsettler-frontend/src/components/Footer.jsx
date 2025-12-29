import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Quick Links': [
      { path: '/', label: 'Home' },
      { path: '/about', label: 'About' },
      { path: '/how-it-works', label: 'How It Works' },
      { path: '/contact', label: 'Contact' },
    ],
    'Resources': [
      { path: '/awareness', label: 'Awareness' },
      { path: '/resources', label: 'Resources' },
      { path: '/faq', label: 'FAQ' },
      { path: '/journey', label: 'Journey' },
    ],
    'Legal': [
      { path: '/privacy', label: 'Privacy Policy' },
      { path: '/terms', label: 'Terms of Service' },
      { path: '/confidentiality', label: 'Confidentiality' },
    ],
  };

  return (
    <footer className="bg-[#3F2965] text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-bold mb-4">
              <span>Mind</span>
              <span className="text-[#DD1764]">Settler</span>
            </h3>
            <p className="text-white/80 text-sm leading-relaxed">
              A safe space to understand your mind. Psycho-education and counseling services by Parnika.
            </p>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h4 className="font-semibold mb-4 text-[#DD1764]">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-white/80 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60"
        >
          <p>&copy; {currentYear} MindSettler . All rights reserved.</p>
          <p className="mt-2">Confidentiality and trust are our priorities.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;


