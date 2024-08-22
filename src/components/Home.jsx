// src/components/Home.jsx

import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-4xl text-bolder md:text-6xl font-fancy text-white mb-2">
        The Secrets Palace
      </h1>
      <h2 className="text-lg md:text-2xl text-white italic bold font-fancy mb-8">
        Home to fulfill all fetishes
      </h2>
      {/* Press Play Button */}
      <Link
        to="#play"
        className="inline-block"
      >
        <button
          onClick={openModal}
          className="bg-accent text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-secondary hover:shadow-lg active:bg-tertiary active:shadow-xl transition-all duration-300"
        >
          Click Here to Start
        </button>
      </Link>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default Home;
