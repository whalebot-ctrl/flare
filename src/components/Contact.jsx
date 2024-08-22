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

    // Your EmailJS configuration details
    const serviceID = 'service_1a8wvub';
    const templateID = 'template_4zd835m';
    const userID = 'B91IPcmo687D4Y8j8';

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('Thank you for reaching out! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' }); // Reset form only on success
      }, (error) => {
        console.error('FAILED...', error);
        setStatus('Oops! Something went wrong. Please try again.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white p-8 md:p-12 lg:p-24">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">Contact Us</h1>

      <div className="max-w-4xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">Get in Touch</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className={`w-full bg-accent text-white px-6 py-3 rounded-full hover:bg-secondary transition ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {status && (
          <p className="mt-4 text-center text-lg text-accent">{status}</p>
        )}
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">Contact Details</h2>
        <p className="text-lg mb-2">Email: <a href="mailto:thesecretspalace@gmail.com" className="text-accent hover:text-secondary">thesecretspalace@gmail.com</a></p>
      </div>
    </div>
  );
}

export default Contact;
