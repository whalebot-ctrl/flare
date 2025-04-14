import { useState } from 'react';
import Footer from './Footer';
import Slider from './Slider';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  const [isPasswordReset, setIsPasswordReset] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        window.location.href = ' http://localhost:3000';
      } else {
        setErrorMessage(data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    // Dummy forgot password logic (Replace with actual forgot password API call)
    if (forgotPasswordEmail === 'test@example.com') {
      setIsPasswordReset(true);
      alert('Password reset link sent to your email!');
    } else {
      alert('Email not found. Please try again.');
    }
  };

  return (
    <div className="items-center relative">
      <div className="min-h-screen flex items-center justify-center p-4">
        <div
          className="
            bg-white
            rounded-lg
            w-full
            max-w-md
            md:max-w-lg
            lg:max-w-xl
            xl:max-w-2xl
            p-6
            shadow-md
          "
        >
          <h2
            className="
              text-2xl
              font-bold
              text-gray-800
              mb-6
              text-center
              md:text-left
            "
          >
            Sign In to Flare
          </h2>

          {errorMessage && (
            <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600 transition-all duration-300"
            >
              Sign In
            </button>
          </form>

          <p className="text-sm text-gray-700 mt-2 text-center">
            Forgot your password?{' '}
            <a
              href="#"
              className="text-red-500 hover:text-red-600 transition-all duration-300"
              data-toggle="modal"
              data-target="#forgotPasswordModal"
            >
              Reset Password
            </a>
          </p>

          {/* Forgot Password Modal */}
          <div
            className="modal fade"
            id="forgotPasswordModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="forgotPasswordModalLabel"
            aria-hidden="true"
          ></div>
        </div>
      </div>

      <div>
        <Slider />
      </div>

      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
};

export default SignIn;
