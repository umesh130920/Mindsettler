import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Awareness from './pages/Awareness';
import HowItWorks from './pages/HowItWorks';
import Journey from './pages/Journey';
import FAQ from './pages/FAQ';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Corporate from './pages/Corporate';
import Placeholder from './pages/Placeholder';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/awareness" element={<Awareness />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/corporate" element={<Corporate />} />
            {/* Placeholder routes for footer links */}
            <Route path="/privacy" element={<Placeholder title="Privacy Policy" description="Privacy policy content would go here." />} />
            <Route path="/terms" element={<Placeholder title="Terms of Service" description="Terms of service content would go here." />} />
            <Route path="/confidentiality" element={<Placeholder title="Confidentiality" description="Confidentiality information would go here." />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
