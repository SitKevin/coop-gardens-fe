import React from 'react';
import ContactForm from './contract_form';
import ContactImage from './image_component';

const ContactSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-10 space-y-7 md:space-y-0 md:space-x-30">
      <ContactImage />
      <ContactForm />
    </div>
  );
};

export default ContactSection;
