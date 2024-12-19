import { Link } from 'react-router-dom';

function Home() {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center text-center p-4 bg-cover bg-center bg-gray-900 text-white"
      style={{
        backgroundImage: "url('/new d2.jpg')",
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-fancy font-bold text-white mb-2">
          The Secrets Palace
        </h1>
        <h2 className="text-lg md:text-2xl text-white italic font-light mb-8">
          Home to fulfill all fetishes
        </h2>
        <Link to="/about">
          <button className="bg-gradient-to-r from-pink-500 to-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300">
            Explore Our Rooms
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
