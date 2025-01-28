import { motion } from 'framer-motion';

const companyLogos = [
  {
    name: 'Coinbase',
    logo: '/coinbase.svg',
  },
  {
    name: 'Metamask',
    logo: '/metamask.png',
  },
  {
    name: 'Phantom',
    logo: '/phantom.svg',
  },
  {
    name: 'CoinMarketCap',
    logo: '/cmc.svg',
  },
  {
    name: 'CoinGecko',
    logo: '/coingecko.png',
  },
  {
    name: 'Trust Wallet',
    logo: '/trust.png',
  },

  {
    name: 'Alchemy',
    logo: '/alchemy.svg',
  },
  {
    name: 'Dextools',
    logo: '/dextools.png',
  },
  {
    name: 'Flare',
    logo: '/flare.png',
  },
  {
    name: 'SafePal',
    logo: '/safepal.svg',
  },
];

const Slider = () => {
  return (
    <div className="w-full overflow-hidden py-4 bg-white">
      <div className="text-center mb-4">
        <span className="text-sm sm:text-base font-bold">Powered By</span>
      </div>
      <div className="flex items-center absolute bottom-8 right-0 overflow-hidden">
        {/* Marquee container */}
        <motion.div
          className="flex space-x-8 w-full"
          initial={{ x: '100%' }}
          animate={{ x: '-100%' }}
          transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
        >
          {/* Duplicate logos for smooth scrolling */}
          {[...companyLogos, ...companyLogos, ...companyLogos].map(
            (company, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-28 h-20"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-24 md:h-26 px-2 object-contain max-w-full"
                />
              </div>
            )
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Slider;
