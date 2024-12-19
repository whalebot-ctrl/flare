import { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const serviceID = 'service_1a8wvub';
    const templateID = 'template_4zd835m';
    const userID = 'B91IPcmo687D4Y8j8';

    emailjs.send(serviceID, templateID, formData, userID)
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setStatus('Thank you for reaching out! We will get back to you soon.');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('FAILED...', error);
          setStatus('Oops! Something went wrong. Please try again.');
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="min-h-screen bg-gray-400 text-gray-800 p-8 md:p-12 lg:p-24">
      <h1 className="text-3xl md:text-4xl lg:text-3xl font-bold mb-6 text-center text-pink-600">Contact Us</h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-pink-600 mb-4">Booking The Secrets Palace</h2>
          <p className="text-lg leading-relaxed mb-4">
            To book any kind of rental with us please complete the form on this page. We respond to inquiries in less than 2 business days. We recommend at least 2-3 weeks notice for booking your date. Last minute anniversary/birthday guy we are looking at you with utter contempt.
          </p>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Hours</h3>
          <p className="mb-4">
           The secrets Palace is open 24/7 by appointment only. Inquiries are answered Monday – Saturday 9 am-10 pm. We do our best to accommodate same day bookings, but we recommend at least 24 hours notice.
          </p>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Location</h3>
          <p className="mb-4">
            We do not give out our exact address until there is a confirmed booking. There is free street parking and you can typically find parking in front of the building.
          </p>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Accessibility</h3>
          <p className="mb-4">
            There is an elevator and stairs. The lobby of the building has a small ramp with a handrail. The studio and restroom are wheelchair accessible.
          </p>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Deposits</h3>
          <p className="mb-4">
            Deposits are required for all bookings and minimum is 3hrs, such as overnight and day rate rentals. They are non-refundable and non-transferable.
          </p>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Rates</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Send an email to thesecretspalace@gmail.com to make inquiry of our rates</li>
          </ul>
          <p className="mb-4">
            Production and extended rentals can inquire for a custom quote. These are all flat fees with no other additional hidden taxes, cleaning, or any other fees. A $50+ cleaning fee will be added only if you trash the place; you are also responsible for replacing a broken item.
          </p>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Contact</h3>
          <p>To book The Secrets Palace please complete the form on this page.</p>
        </div>

        {/* Right Column - Form */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium mb-2 text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:ring-pink-500 focus:border-pink-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium mb-2 text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:ring-pink-500 focus:border-pink-500"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium mb-2 text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:ring-pink-500 focus:border-pink-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className={`w-full bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition ${
                isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {status && (
            <p className="mt-4 text-center text-lg text-pink-600">{status}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
