import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Loader2 } from 'lucide-react';

const Verify = () => {
  const [loading, setLoading] = useState(true);
  const [verified, setVerified] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const token = query.get('token');
    const email = query.get('email');

    const verifyEmail = async () => {
      if (!token || !email) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `http://localhost:5000/api/auth/verify?token=${token}&email=${email}`
        );

        if (response.ok) {
          setVerified(true);
        }

        // Regardless of result, stop loading
        setLoading(false);

        // After short delay, redirect to sign-in
        setTimeout(() => {
          navigate('/sign-in');
        }, 3000);
      } catch (error) {
        console.error('Verification error:', error);
        setLoading(false);
        setTimeout(() => {
          navigate('/sign-in');
        }, 3000);
      }
    };

    verifyEmail();
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-lg w-full text-center space-y-4">
        {loading ? (
          <>
            <Loader2 className="mx-auto h-10 w-10 animate-spin text-blue-500" />
            <p className="text-lg font-medium">Verifying your email...</p>
          </>
        ) : (
          <>
            <CheckCircle className="mx-auto h-12 w-12 text-green-500" />
            <h2 className="text-xl font-semibold text-green-700">
              {verified ? 'Verification Successful' : 'Verified'}
            </h2>
            <p className="text-gray-700">Redirecting to sign-in page...</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Verify;
