import React from 'react';
import Image from 'next/image';

const ContactImage: React.FC = () => {
  return (
    <div className="flex justify-center items-center ">
      <Image src="/female-farmer.jpg" alt="Contact" width={300} height={200} className="rounded-lg shadow-md mx-auto" />
    </div>
  );
};

export default ContactImage;
