import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Mock Data for Production
const mockUser = {
  name: 'Adeola Adekoya',
  email: 'gracious0908@gmail.com',
  profileImage: 'profile.jpg',
};

const mockXrpData = {
  quote: {
    USD: {
      price: 1.25, // Example mock price
      percent_change_24h: 2.5, // Example mock 24h change
    },
  },
};

const mockStakingStats = {
  stakedAmount: 1500, // XRP staked by the user
  rewards: 300, // XRP rewards earned
};

const Dashboard = () => {
  // States for storing user info, XRP market data, and staking info
  const [user, setUser] = useState(mockUser); // Use mock user data
  const [xrpData, setXrpData] = useState(mockXrpData); // Use mock XRP data
  const [stakingStats, setStakingStats] = useState(mockStakingStats); // Use mock staking stats
  const [loading, setLoading] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // For handling mobile menu

  // Fetching XRP data from CoinMarketCap (we'll replace with API call when live)
  useEffect(() => {
    setLoading(true);
    // Simulate API call delay with setTimeout
    setTimeout(() => {
      setXrpData(mockXrpData); // Set mock data after delay
      setStakingStats(mockStakingStats); // Set mock staking stats
      setUser(mockUser); // Set mock user data
      setLoading(false);
    }, 1000); // Simulate 1 second delay
  }, []);

  if (loading) {
    return <div className="text-center py-4">Loading crypto data...</div>;
  }

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-white p-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-red-700">
            Flare Dashboard
          </span>
        </div>

        {/* User Info (Hide name and email on mobile) */}
        <div className="flex items-center">
          {/* Show only profile image and hide name/email on mobile */}
          <div className="hidden md:block mr-4">
            <span className="font-medium">{user.name}</span>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
          <img
            src={user.profileImage}
            alt="User"
            className="rounded-full w-12 h-12 object-cover"
          />
        </div>

        {/* Hamburger Button for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-red-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Sidebar for mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-opacity-50 z-10 transition-all ease-in-out duration-300">
          <div className="bg-white w-3/4 h-full p-4 transform translate-x-0">
            {/* Close button */}
            <div className="flex justify-end mb-4">
              <button onClick={closeMobileMenu} className="text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex flex-col items-start space-y-4">
              <div className="text-red-700 text-xl">Dashboard</div>
              <div className="text-gray-700">Staking</div>
              <div className="text-gray-700">Assets</div>
              <div className="text-gray-700">Referral Program</div>
            </div>
            <div className="text-sm text-gray-500 mt-10">
              Join the community
              <div className="space-x-2 mt-2">
                <button className="bg-red-500 text-white rounded-full px-4 py-2 text-sm">
                  Telegram
                </button>
              </div>
            </div>
            <div className="text-gray-500 text-sm mt-10 cursor-pointer">
              Logout
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row p-6">
        {/* Sidebar for desktop */}
        <div className="hidden md:block w-1/5 bg-white p-6 shadow-md space-y-6 rounded-xl">
          <div className="flex flex-col items-start space-y-4">
            <div className="text-red-700 text-xl">Dashboard</div>
            <div className="text-gray-700">Staking</div>
            <div className="text-gray-700">Assets</div>
            <div className="text-gray-700">Referral Program</div>
          </div>
          <div className="text-sm text-gray-500 mt-10">
            Join the community
            <div className="space-x-2 mt-2">
              <button className="bg-red-500 text-white rounded-full px-4 py-2 text-sm">
                Telegram
              </button>
            </div>
          </div>
          <div className="text-gray-500 text-sm mt-10 cursor-pointer">
            Logout
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-4/5 p-6 space-y-6">
          {/* Banner */}
          <div className="bg-gradient-to-r from-red-600 to-red-500 text-white p-6 rounded-lg flex justify-between items-center shadow-lg">
            <div>
              <h2 className="text-2xl font-semibold">
                Stake XRP and Earn Rewards
              </h2>
              <p className="mt-2 text-lg">
                Maximize your returns with Flare’s native staking platform
              </p>
            </div>
            <Link to="/stake">
              <button className="bg-white text-red-600 py-2 px-6 rounded-lg hover:bg-gray-200 transition duration-300">
                Stake Now
              </button>
            </Link>
          </div>

          {/* Staking Stats Section */}
          <div className="flex flex-col md:flex-row justify-between space-x-6">
            <div className="w-full md:w-2/3 p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold">Your Staking Stats</h3>
              <div className="mt-4">
                <p className="text-gray-600">Staked XRP:</p>
                <p className="text-2xl font-semibold text-red-700">
                  {stakingStats.stakedAmount} XRP
                </p>
              </div>
              <div className="mt-4">
                <p className="text-gray-600">XRP Rewards Earned:</p>
                <p className="text-2xl font-semibold text-green-600">
                  {stakingStats.rewards} XRP
                </p>
              </div>
            </div>

            {/* Market Section for XRP */}
            <div className="w-full md:w-1/3 bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold">XRP Market</h3>
              <div className="mt-4">
                <p className="text-gray-600">Current Price:</p>
                <p className="text-2xl font-semibold text-red-700">
                  ${xrpData.quote.USD.price}
                </p>
                <p className="text-gray-600 mt-2">24H Change:</p>
                <p
                  className={`text-xl font-semibold ${
                    xrpData.quote.USD.percent_change_24h > 0
                      ? 'text-green-500'
                      : 'text-red-500'
                  }`}
                >
                  {xrpData.quote.USD.percent_change_24h.toFixed(2)}%
                </p>
              </div>
            </div>
          </div>

          {/* Referral and Rewards Program Section */}
          <div className="flex flex-col md:flex-row justify-between space-x-6">
            <div className="w-full md:w-2/3 bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold">Referral Program</h3>
              <p className="mt-2 text-gray-500">
                Earn rewards by referring friends to stake XRP with Flare
              </p>
              <div className="mt-4">
                <p className="font-semibold">Total Referrals: 36</p>
                <p className="font-semibold text-green-600">+54% Increase</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold">Latest News</h3>
              <p className="mt-2 text-gray-500">
                Decreasing High Points: The current bitcoin...
              </p>
              <button className="mt-4 text-red-600 hover:underline">
                Go to detail
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
