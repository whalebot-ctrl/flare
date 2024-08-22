import PropTypes from 'prop-types';

function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-sm w-full relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        <h2 className="text-xl font-bold mb-4">Booking Information</h2>
        <p className="mb-4">For booking inquiries, please email us at:</p>
        <p className="text-lg font-semibold mb-4">
          <a href="mailto:thesecretspalace@gmail.com" className="text-accent hover:text-secondary">thesecretspalace@gmail.com</a>
        </p>
        <button
          onClick={onClose}
          className="bg-accent text-white px-4 py-2 rounded-full hover:bg-secondary transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}

// Define prop types for validation
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
