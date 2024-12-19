import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderImages = [
  '/new d1.jpg',
  '/new d2.jpg',
  '/new d3.jpg',
  '/new d4.jpg',
  '/new d5.jpg',
  '/new d7.jpg',
  '/new d8.jpg',
  '/new d9.jpg',
  '/new d10.jpg',
  '/new d11.jpg',
  '/new d13.jpg',
  '/new d14.jpg',
  '/new d15.jpg',
  '/new d16.jpg',
  '/new d17.jpg',
  '/new d19.jpg',
  '/new d18.jpg',
  '/new d20.jpg',
  '/new d21.jpg',
  '/new d22.jpg',
  '/new dungeon.jpg',
];

const AboutTheSpace = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false, // Hides navigation arrows for a cleaner look
  };

  return (
    <div className="min-h-screen bg-gray-400 text-gray-800 py-8 px-4 md:px-12 lg:px-24">
      {/* Gallery Slider */}
      <h2 className="text-3xl md:text-4xl lg:text-3xl font-bold mb-8 text-center pt-16 text-white">
        About the Space
      </h2>
      <Slider {...sliderSettings} className="mb-12">
        {sliderImages.map((image, index) => (
          <div key={index} className="rounded-lg overflow-hidden">
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-96 object-cover"
            />
          </div>
        ))}
      </Slider>

      {/* Information Section */}
      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-2xl font-bold mb-4 text-pink-600">Owned and Operated</h3>
        <p className="mb-6">
          Rentals are always exclusive–you will have the entire space to yourself, inclusive of all the BDSM furniture, toys, cleaning supplies, towels, etc.
        </p>

        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-semibold text-pink-600 mb-2">Waiting Area</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>Modern design with black sofa and geometric rug</li>
              <li>Kinky little corner store with products for sale</li>
              <li>Clothing rack</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-pink-600 mb-2">Custom BDSM Furniture and Equipment</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>Bondage Bed/Cage</li>
              <li>Saint Andrews Cross</li>
              <li>Spanking Horse</li>
              <li>Hand Crank Winch</li>
              <li>Prison Stockade</li>
              <li>Stand-up Jail Cage</li>
              <li>Bell cage</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-pink-600 mb-2">Domestic Area</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>Queen-sized, 4 poster canopy bed</li>
              <li>Lighted vanity mirror (adjustable lighting, 34″)</li>
              <li>White leather bar chairs</li>
              <li>White leather couches</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-pink-600 mb-2">Bathroom</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>Open shower room</li>
              <li>Clean towels</li>
              <li>Toiletries</li>
              <li>Hair dryer</li>
              <li>First Aid supplies</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-pink-600 mb-2">Kitchenette</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>Full refrigerator</li>
              <li>Microwave</li>
              <li>Bottled water</li>
              <li>Keurig stocked with tea, coffee, creamers, and sweetener</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-pink-600 mb-2">Toys and Equipment</h4>
            <p className="text-gray-700">
              All toys and equipment are organized for your convenience and stored in wardrobes around the Play Area. Some items are not listed here; if you’re wondering about a specific item, please ask. Cleaning instructions are posted throughout the space.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-pink-600 mb-2">Media and Ambiance</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>WiFi</li>
              <li>Bluetooth stereo system</li>
              <li>Dimmable lighting</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-pink-600 mb-2">Cleaning Supply Stations</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>Steridol wipes</li>
              <li>Alcohol spray bottle</li>
              <li>Antibacterial handsoap</li>
              <li>Antibacterial dishsoap</li>
              <li>Antibacterial spray cleaner</li>
              <li>Antibacterial Febreze®</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTheSpace;
