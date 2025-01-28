
import { Link } from 'react-router-dom';

const FlareUI = () => {
  return (
    <div className="bg-white h-screen flex flex-col items-center text-black font-sans relative overflow-hidden">
      {/* Main Section */}
      <main className="flex flex-col items-center justify-center flex-1 text-center mx-12 px-6 z-10">
        <h2 className="text-red-500 text-2xl font-semibold mb-2">
          Flare Stake: The First Official Ripple Wallet
        </h2>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Closing the Circle on XRP <br /> Built for Business
        </h1>
        <h2 className="text-xl font-bold mb-4">
          Stake and Earn up to 25% ROI Monthly with the Flare Wallet Staking
          Tool that supports a wide range of assets.
        </h2>

        <div className="-mb-10 z-10">
          <Link to="/about">
            <button className="mt-4 px-6 py-3 bg-gradient-to-r from-red-500 to-red-700 text-white rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:from-orange-500 hover:to-orange-700 hover:shadow-xl hover:scale-105 active:scale-95 active:shadow-md">
              Read More →
            </button>
          </Link>
        </div>
      </main>

      {/* Decorative Element */}
      <div className="absolute left-0 bottom-0 w-full z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-64 text-red-600 opacity-55"
          fill="currentColor"
        >
          <path
            fillOpacity="1"
            d="M0,128L48,112C96,96,192,64,288,69.3C384,75,480,117,576,122.7C672,128,768,96,864,90.7C960,85,1056,107,1152,128C1248,149,1344,171,1392,181.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default FlareUI;
