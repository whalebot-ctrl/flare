const Footer = () => {
  return (
    <footer className="w-full flex flex-col justify-center items-center m-2 mt-8">
      <p className="text-sm sm:text-base text-gray-600">
        Learn more by visiting the{' '}
        <a
          href="https://flare.network/delegate-and-stake"
          className="text-red-500"
        >
          Flare Documentation
        </a>
      </p>
      <p className="text-sm sm:text-base text-gray-600 mt-2">
        Contact us at{' '}
        <a href="mailto:info@flarestake.com" className="text-red-500">
          info@flarestake.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;
