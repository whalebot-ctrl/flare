// Layout.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center text-black font-sans relative">
      {/* Navbar */}
      <header className="w-full flex justify-between items-center px-4 sm:px-16 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link to="/">
            <div className="h-12 w-12">
              <img
                src="https://framerusercontent.com/images/un6c1PPz8mWvYlGvHxKGA0JJcrY.png"
                alt="Flare Logo"
                className="h-full w-full object-contain"
              />
            </div>
          </Link>
        </div>

        {/* Title
        <h1 className="text-3xl sm:text-5xl font-bold text-red-600 hidden sm:block flex-1 text-center">
          Flare Stake
        </h1> */}

        {/* Hamburger Icon for Mobile */}
        <button onClick={toggleMenu} className="sm:hidden focus:outline-none">
          <svg
            className="w-12 h-12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden sm:flex font-bold space-x-12">
          <Link
            to="/"
            className={`text-gray-700 hover:text-red-600 ${
              location.pathname === '/' ? 'text-red-600' : ''
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-gray-700 hover:text-red-600 ${
              location.pathname === '/about' ? 'text-red-600' : ''
            }`}
          >
            About
          </Link>
          <Link
            to="/connect-wallet"
            className={`text-gray-700 hover:text-red-600 ${
              location.pathname === '/connect-wallet' ? 'text-red-600' : ''
            }`}
          >
            Stake
          </Link>
          <Link
            to="/sign-up"
            className={`text-gray-700 hover:text-red-600 ${
              location.pathname === '/sign-up' ? 'text-red-600' : ''
            }`}
          >
            Sign Up
          </Link>
        </nav>

        {/* Mobile Nav Links (Hamburger Menu) */}
        {isMenuOpen && (
          <div className="sm:hidden absolute top-16 right-0 bg-white shadow-lg w-64 z-50 rounded-lg overflow-hidden">
            <ul className="flex flex-col space-y-2 p-4">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Stake', href: '/connect-wallet' },
                { label: 'Sign Up', href: '/sign-up' },
              ].map((item, index) => (
                <li key={index} className="group">
                  <Link
                    to={item.href}
                    className={`text-gray-700 hover:text-red-600 ${
                      location.pathname === item.href ? 'text-red-600' : ''
                    } block py-2 font-bold`}
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </Link>
                  <div className="h-0.5 bg-transparent group-hover:bg-red-500 transition-all duration-300"></div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* Page Content */}
      {children}
    </div>
  );
};

export default Layout;
