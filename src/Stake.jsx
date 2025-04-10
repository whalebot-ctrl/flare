import { useState } from 'react';
import Footer from './Footer';
import Slider from './Slider';

const Stake = () => {
  // Static rate for XRP to USD (can be updated to live rate later)
  const xrpToUsdRate = 2.42; // Example static rate (1 XRP = $2.42)

  // Static XRP Address (you can update this to your actual wallet address)
  const xrpAddress = 'rXoE5c2C2jK2f8a5h7Xr8Qv6k9nHbxuZ8V';

  // States for amount to stake, staking status, and user input
  const [usdAmount, setUsdAmount] = useState('');
  const [xrpAmount, setXrpAmount] = useState(0);
  const [rewardAmount, setRewardAmount] = useState(0);
  const [usdValue, setUsdValue] = useState(0);
  const [paymentMade, setPaymentMade] = useState(false);
  const [copied, setCopied] = useState(false); // Track copied status

  // Copy to clipboard function
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(xrpAddress)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset "Copied" text after 2 seconds
      })
      .catch((err) => console.error('Failed to copy text: ', err));
  };

  // Convert USD amount to XRP and calculate rewards dynamically
  const handleAmountChange = (amount) => {
    // Update USD Amount as number
    const numericAmount = parseFloat(amount);
    setUsdAmount(numericAmount);

    // Convert USD to XRP using static rate
    const xrpConverted = numericAmount / xrpToUsdRate;
    setXrpAmount(xrpConverted);

    // Calculate the total monthly rewards (25% of the staked amount + original amount)
    const monthlyReward = xrpConverted * 0.25 + xrpConverted;
    setRewardAmount(monthlyReward);

    // Set the USD value of the stake
    setUsdValue(numericAmount);
  };

  // Handle staking action (just simulating payment made for this example)
  const handleStake = () => {
    if (xrpAmount > 0) {
      setPaymentMade(true); // Simulate payment made process
    }
  };

  return (
    <div className="min-h-screen ">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left section for staking info */}
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold text-red-700">
              Stake Your XRP
            </h3>
            <p className="mt-4 text-gray-600">
              Staking XRP allows you to earn rewards over time. Choose the
              amount of XRP you want to stake and start earning!
            </p>

            {/* Staking Form */}
            <div className="mt-6">
              <label className="text-lg font-semibold text-gray-700">
                Enter Amount to Stake in USD
              </label>
              <input
                type="number"
                value={usdAmount}
                onChange={(e) => handleAmountChange(e.target.value)}
                className="mt-2 w-full px-4 py-2 border rounded-lg border-gray-300"
                placeholder="Amount in USD"
              />
              <div className="mt-4">
                <p className="text-lg font-semibold text-gray-700">
                  Send the equivalent amount to this XRP address:
                </p>
                <div className="flex items-center">
                  <p className="text-2xl text-gray-700 font-bold">
                    {xrpAddress}
                  </p>
                  <button
                    onClick={copyToClipboard}
                    className="ml-2 text-sm text-blue-500 hover:underline"
                  >
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <p className="mt-2 text-gray-600">
                  Please send the equivalent amount (in USD or XRP) to the above
                  address. Once the payment is confirmed, your stake will be
                  activated.
                </p>
              </div>

              <button
                onClick={handleStake}
                className={`mt-4 w-full ${
                  paymentMade ? 'bg-green-600' : 'bg-red-600'
                } text-white py-2 rounded-lg hover:bg-red-500 transition duration-300`}
              >
                {paymentMade ? 'Staked Successfully!' : 'Stake Now'}
              </button>
            </div>
          </div>

          {/* Right section for rewards info */}
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold text-red-700">
              Staking Rewards
            </h3>
            <p className="mt-4 text-gray-600">
              Stake your XRP and start earning monthly rewards. The more you
              stake, the higher your rewards!
            </p>

            <div className="mt-6">
              <p className="font-semibold text-lg text-gray-700">
                Estimated Monthly Rewards:
              </p>
              <p className="text-2xl text-green-600">
                {xrpAmount > 0
                  ? `${rewardAmount.toFixed(2)} XRP`
                  : 'Enter an amount to see rewards'}
              </p>
            </div>

            <div className="mt-6">
              <p className="font-semibold text-lg text-gray-700">USD Value:</p>
              <p className="text-2xl text-gray-700">
                {usdAmount > 0
                  ? `$${usdValue.toFixed(2)}`
                  : 'Enter an amount to see USD value'}
              </p>
            </div>

            <div className="mt-6">
              <p className="font-semibold text-lg text-gray-700">
                Amount to Stake (XRP):
              </p>
              <p className="text-2xl text-gray-700">
                {xrpAmount > 0
                  ? `${xrpAmount.toFixed(2)} XRP`
                  : 'Enter an amount to see XRP value'}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Slider />
      <Footer />
    </div>
  );
};

export default Stake;
