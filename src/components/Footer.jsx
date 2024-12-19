function Footer() {
  return (
    <footer className="text-white pt-10 pb-6">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col items-center">
          {/* Contact Information */}
          <p className="text-sm md:text-base">
            <a href="mailto:thesecretspalace@gmail.com" className="text-accent hover:text-white transition">
              thesecretspalace@gmail.com
            </a>
          </p>
        </div>
        <p className="text-xs md:text-sm mt-2">&copy; 2024 The Secrets Palace. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
