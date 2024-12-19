import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navbar({ openModal }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scrolling to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900 shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-extrabold text-white flex items-center space-x-1">
          <span className="uppercase tracking-wide text-gray-200">Secrets Palace</span>
        </Link>



        {/* Menu Items */}
        <div className="hidden md:flex space-x-20 text-lg font-medium text-white">
          <Link
            to="/"
            className="hover:text-pink-600 transition-all duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-pink-600 transition-all duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-pink-600 transition-all duration-300"
          >
            Contact
          </Link>
          <Link
            to="/rooms"
            className="hover:text-pink-600 transition-all duration-300"
          >
            Rooms
          </Link>
        </div>

        {/* Call-to-Action Button */}
        <button
          onClick={openModal}
          className="hidden md:inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
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
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black/80 text-white transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          {/* Close Button */}
          <button
            onClick={handleMenuToggle}
            className="absolute top-4 right-6 text-white text-2xl"
            aria-label="Close menu"
          >
            <svg
              className="w-8 h-8"
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
          {/* Menu Links */}
          <Link
            to="/"
            className="text-xl font-medium hover:text-gray-400 transition-all duration-300"
            onClick={handleMenuToggle}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-xl font-medium hover:text-gray-400 transition-all duration-300"
            onClick={handleMenuToggle}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-xl font-medium hover:text-gray-400 transition-all duration-300"
            onClick={handleMenuToggle}
          >
            Contact
          </Link>
          <Link
            to="/rooms"
            className="text-xl font-medium hover:text-gray-400 transition-all duration-300"
            onClick={handleMenuToggle}
          >
            Rooms
          </Link>
          <button
            onClick={() => {
              openModal();
              handleMenuToggle();
            }}
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
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
