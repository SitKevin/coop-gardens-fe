import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <div className="bg-white p-8 shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-4">Have any Questions? Get in Touch!</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" placeholder="Your Name" className="border p-2 rounded" />
        <input type="text" placeholder="Phone Number" className="border p-2 rounded" />
        <input type="email" placeholder="Email Address" className="border p-2 rounded md:col-span-2" />
        <input type="text" placeholder="Subject" className="border p-2 rounded md:col-span-2" />
        <textarea placeholder="Your Message" className="border p-2 rounded md:col-span-2" rows={4}></textarea>
        <button type="submit" className="bg-green-500 text-white p-2 rounded md:col-span-2">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
