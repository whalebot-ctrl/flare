import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from './Footer';

function About() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white p-8 md:p-12 lg:p-24">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 mt-6 text-center">About Us</h1>

      <p className="text-base md:text-lg lg:text-xl leading-relaxed mb-4 text-center">
        Welcome to THE SECRETS PALACE, the newest and top secret playhouse for enjoyment of all your fantasies and kinks. Established in 2023, The Secrets Palace is a boutique self-contained accommodation and BDSM play-space ideal for any budding Christian Grey or Anastasia, as well as more experienced Dominants and submissives.
      </p>
      <p className="text-base md:text-lg lg:text-xl leading-relaxed mb-4 text-center">
        Fully equipped, air-conditioned, lit and decorated for an authentic S&M dungeon atmosphere, yet warm, welcoming and with every creature comfort, it’s the perfect location for an indulgent night or more of taboo passion and roleplay. Our location remains discreet until you book with us, ensuring your privacy and security. We offer a unique and luxurious environment tailored to your fantasies.
      </p>
      <p className="text-base md:text-lg lg:text-xl leading-relaxed mb-4 text-center">
        The Secret Dungeon boasts free parking, Wi-Fi, a media center with the latest films and Sky TV, as well as a fantastic four-poster bed below a mirrored ceiling, a modern kitchen, and bathroom with walk-in shower. Plus, cozy under-floor heating, complimentary tea, coffee, and soft drinks, all add to our visitors’ unique erotic experience.
      </p>
      <p className="text-base md:text-lg lg:text-xl leading-relaxed mb-8 text-center">
        Sleeping up to four people, there’s even a very private patio area and the new addition of a hot tub. The Secret Palace is only available to over-18s and is LGBT friendly. It’s been used for many fetish photo shoots and adult filming, and has even appeared on Celebrity Come Dine With Me this year. Praised for its cleanliness, convenience, top secret, and comprehensive collection of bondage furniture and D/s equipment, we look forward to welcoming you for an unforgettable, discreet stay. Access and address will only be made available after reservation to maintain our top-notch secret dungeon status.
      </p>

      <div className="slider-container mx-auto mb-8" style={{ maxWidth: '90%' }}>
        <Slider {...settings} className="rounded-lg">
          <div>
            <img src="/one.jpg" alt="Secrets Palace Interior 1" className="w-full h-auto rounded-lg shadow-lg"/>
          </div>
          <div>
            <img src="/two.jpg" alt="Secrets Palace Interior 2" className="w-full h-auto rounded-lg shadow-lg"/>
          </div>
          <div>
            <img src="/three.jpg" alt="Secrets Palace Interior 3" className="w-full h-auto rounded-lg shadow-lg"/>
          </div>
          <div>
            <img src="/four.jpg" alt="Secrets Palace Interior 1" className="w-full h-auto rounded-lg shadow-lg"/>
          </div>
          <div>
            <img src="/five.jpg" alt="Secrets Palace Interior 2" className="w-full h-auto rounded-lg shadow-lg"/>
          </div>
        </Slider>
      </div>

      <div className="text-center mb-">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">Membership & Payment</h2>
        <p className="text-base md:text-lg lg:text-xl leading-relaxed mb-4">
          We offer a membership subscription for those who wish to enjoy our services regularly, providing added benefits and exclusive access. For one-time experiences, we also accept payment per session, ensuring flexibility for your needs.
        </p>
      </div> 
      <Footer />
    </div>
  );
}

export default About;
