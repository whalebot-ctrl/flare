import Footer from './Footer';
import { Link } from 'react-router-dom';
import Slider from './Slider';

const About = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col text-black font-sans relative">
      {/* Header */}
      <header className="w-full flex flex-col items-center px-6 sm:px-16 py-4">
        <div className="flex items-center space-x-4"></div>
        <h1 className="text-xl sm:text-3xl font-bold text-center mt-4">
          About Flare
        </h1>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-1 px-6 sm:px-16 py-8 text-center">
        <div className="max-w-4xl">
          <h2 className="text-2xl sm:text-4xl font-bold mb-6 text-black">
            Stake and Earn: Up to <span className="text-red-500">25% ROI</span>{' '}
            Monthly
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-6 text-gray-700">
            Transform your digital assets into a consistent income stream with
            the Flare Staking Tool. Designed to provide unmatched convenience
            and rewards, this tool supports a wide range of assets, ensuring
            every user can maximize their portfolio&apos;s potential. Whether
            you&apos;re a beginner or a seasoned investor, Flare makes it simple
            and secure to stake your assets and enjoy competitive returns.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1: Why Choose Flare Wallet Staking? */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg shadow-lg p-6 transform transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-black">
                Why Choose Flare Wallet Staking?
              </h3>
              <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed text-gray-700">
                <li>
                  Enjoy up to 25% ROI monthly, making it one of the most
                  rewarding staking platforms available.
                </li>
                <li>
                  Diversify your investments with support for a wide range of
                  digital assets.
                </li>
                <li>
                  Stake with confidence knowing your assets are secured by
                  industry leading technology and governance.
                </li>
              </ul>
            </div>

            {/* Card 2: How to Get Started */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg shadow-lg p-6 transform transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-black">
                How to Get Started
              </h3>
              <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                <Link
                  to="/sign-up"
                  className="text-red-500 hover:font-bold focus:outline-none"
                >
                  Sign Up
                </Link>{' '}
                on Flare today, deposit your assets, and start staking with just
                a few clicks. It&apos;s that easy to begin earning passive
                income and achieving your financial goals.
              </p>

              <Link to="/connect-wallet">
                <button className="mt-8 px-6 py-3 bg-gradient-to-r from-red-500 to-red-700 text-white rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:from-orange-500 hover:to-orange-700 hover:shadow-xl hover:scale-105 active:scale-95 active:shadow-md">
                  Start Staking →
                </button>
              </Link>
            </div>
          </div>

          {/* Flare Features */}
          <div className="mt-16">
            <h2 className="text-2xl sm:text-4xl font-bold mb-6 text-black">
              What Sets Flare Apart
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Card 1: Enshrined Data Protocols */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg shadow-lg p-6 transform transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-black">
                  Enshrined Data Protocols
                </h3>
                <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                  Flare’s protocols are integrated into the blockchain's core,
                  and inherit the economic security of the entire network.
                </p>
              </div>

              {/* Card 2: Ethereum Virtual Machine */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg shadow-lg p-6 transform transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-black">
                  Ethereum Virtual Machine
                </h3>
                <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                  Flare is EVM compatible with out-of-the-box support for all
                  your favorite tooling.
                </p>
              </div>

              {/* Card 3: Flare Stake */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg shadow-lg p-6 transform transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-black">
                  Flare Stake
                </h3>
                <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                  Flare uses a proof-of-stake (PoS) mechanism to ensure a
                  significant and consistent level of economic security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Slider />

      <Footer />
    </div>
  );
};

export default About;
