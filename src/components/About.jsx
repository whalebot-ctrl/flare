import Footer from './Footer';

function About() {
  return (
    <div className="min-h-screen bg-gray-400 text-gray-800">
      <div className="p-8 md:p-12 lg:p-24">
        <h1 className="text-4xl md:text-3xl lg:text-3xl font-extrabold mb-10 text-center text-pink-600">
          About Us
        </h1>

        {/* Content Section */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8">
          {/* Introductory Card */}
          <div className="bg-gray-100 p-6 md:p-10 rounded-lg shadow-lg">
            <p className="text-lg md:text-xl lg:text-xl leading-relaxed text-center text-gray-700">
              Welcome to <span className="text-pink-600 font-semibold">THE SECRETS PALACE</span>, the newest and top-secret playhouse for your fantasies and kinks. Established in 2023, our boutique accommodation and BDSM play-space provide the perfect blend of luxury and discretion for an unforgettable experience.
            </p>
          </div>

          {/* Features Section */}
          <div className="bg-gray-100 p-6 md:p-10 rounded-lg shadow-lg">
            <p className="text-lg md:text-xl leading-relaxed mb-6 text-gray-700">
              Fully equipped and thoughtfully designed, The Secrets Palace offers:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Air-conditioned spaces with authentic S&M dungeon vibes.</li>
              <li>A four-poster bed below a mirrored ceiling.</li>
              <li>Modern kitchen, bathroom, and walk-in shower.</li>
              <li>Private patio with a hot tub and underfloor heating.</li>
              <li>Free parking, Wi-Fi, and media center with the latest films.</li>
            </ul>
          </div>

          {/* Additional Text Section */}
          <div className="bg-gray-100 p-6 md:p-10 rounded-lg shadow-lg">
            <p className="text-lg md:text-xl lg:text-xl leading-relaxed mb-4 text-gray-700">
              <span className="font-bold text-pink-600">50 Shades of Gray</span> piqued your interest? Come stay in the real deal to explore your wild side. This is a professional, upscale space that is impeccably clean and incredibly sexy. We provide all of the kinky toys and furniture you may have wondered about but haven’t gotten the chance to try, as well as cleaning and safety supplies. You should just bring an open mind!
            </p>
            <p className="text-lg md:text-xl lg:text-xl leading-relaxed mb-4 text-gray-700">
              Already initiated into BDSM? The dungeon is your second home? Check in to this beautiful, state-of-the-art kink space for a time to remember with your lover(s), friend(s), or play partners.
            </p>
            <p className="text-lg md:text-xl lg:text-xl leading-relaxed text-gray-700">
              All rentals are always exclusive – you always have the entire space to yourself. All rentals are always inclusive of all the toys, furniture, equipment, towels, toiletries, etc. Of course, you are more than welcome to bring your own items as well. We are a non-smoking facility. We welcome all D/s relationships as well as all sexual orientations.
            </p>
          </div>

          {/* Privacy Section */}
          <div className="bg-gray-100 p-6 md:p-10 rounded-lg shadow-lg">
            <p className="text-lg md:text-xl lg:text-xl leading-relaxed text-gray-700">
              To ensure the privacy and safety of our guests, the address is given only to those who have confirmed bookings. Ideal for both newcomers and seasoned enthusiasts, we welcome individuals of all backgrounds for an experience that is both inclusive and indulgent.
            </p>
          </div>
        </div>

        {/* Virtual Tour Section */}
        <div className="mt-12 rounded-lg overflow-hidden shadow-lg" style={{ maxWidth: '90%', margin: '0 auto' }}>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 mt-4 text-center text-pink-600">Explore Our Virtual Tour</h2>
          <div className="relative" style={{ height: '500px' }}>
            <iframe
              src="https://kuula.co/share/collection/7qJxt?logo=-1&info=0&fs=1&vr=1&zoom=1&gyro=0&thumbs=-1&iosfs=1"
              allowFullScreen
              className="w-full h-full border-0 rounded-lg"
              title="Virtual Tour"
            ></iframe>
          </div>
        </div>

        {/* Membership Section */}
        <div className="mt-16 bg-gradient-to-r from-pink-500 to-red-600 text-white p-8 md:p-12 rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center">Membership & Payment</h2>
          <p className="text-lg md:text-xl leading-relaxed text-center">
            Join our exclusive membership program to enjoy regular access to our facilities, or book a one-time session for a unique experience. Membership offers additional benefits and discounts tailored to your needs.
          </p>
          <div className="flex justify-center mt-6">
            <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default About;
