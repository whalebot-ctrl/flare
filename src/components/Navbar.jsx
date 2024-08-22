import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navbar({ openModal }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent hover:backdrop-blur-lg z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-fancy text-white">
          <img 
            src="secret.jpg" 
            alt="logo" 
            className="md:h-5 w-12" // Adjust size here
          />
        </Link>

        {/* Menu Items */}
        <div className="hidden md:flex space-x-8 text-lg text-white">
          <Link
            to="/"
            className="hover:font-bold hover:underline hover:text-accent transition-all"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:font-bold hover:underline hover:text-accent transition-all"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:font-bold hover:underline hover:text-accent transition-all"
          >
            Contact
          </Link>
        </div>

        {/* Call-to-Action Button */}
        <button
          onClick={openModal}
          className="hidden md:inline-block bg-accent text-white px-6 py-2 rounded-full hover:bg-secondary transition"
        >
          Book Now
        </button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button 
            onClick={handleMenuToggle}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 left-0 w-full bg-red-900 opacity-90 text-white ${isMenuOpen ? 'block' : 'hidden'} transition-all duration-300`}>
        <div className="flex flex-col items-center py-4">
          {/* Close Button */}
          <button 
            onClick={handleMenuToggle}
            className="absolute top-4 right-4 text-white text-2xl"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          {/* Logo */}
          <Link to="/" className="text-3xl font-fancy text-white mb-4">
            <img 
              src="secret.jpg" 
              alt="logo" 
              className="w-20" // Larger size for mobile
            />
          </Link>
          {/* Menu Links */}
          <Link
            to="/"
            className="py-2 text-lg hover:font-bold hover:underline hover:text-accent transition-all"
            onClick={handleMenuToggle}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="py-2 text-lg hover:font-bold hover:underline hover:text-accent transition-all"
            onClick={handleMenuToggle}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="py-2 text-lg hover:font-bold hover:underline hover:text-accent transition-all"
            onClick={handleMenuToggle}
          >
            Contact
          </Link>
          <button
            onClick={openModal}
            className="bg-accent text-white px-6 py-2 rounded-full mt-4 hover:bg-secondary transition"
          >
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
}

// Define prop types for validation
Navbar.propTypes = {
  openModal: PropTypes.func.isRequired,
};

export default Navbar;
