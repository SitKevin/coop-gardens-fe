import React from 'react';
import ContactSection from '@/components/contact/contact_section';
import { ContactInfoCards } from '@/components/contact/contact_card';
const ContactPage: React.FC = () => {
  return (
    <div>
      <div className="bg-cover bg-center h-[400px]" style={{ backgroundImage: "url('/h1background.jpg')" }}>
        <div className="flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-5xl font-bold">B-ZEA FARM</h1>
          <p className="text-2xl">Nông sản tới thiên nhiên</p>
        </div>
      </div>
      <div className="container mx-auto py-12">
        <ContactInfoCards/>
        <ContactSection />
      </div>
    </div>
  );
};

export default ContactPage;
