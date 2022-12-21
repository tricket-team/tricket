import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="w-full grid grid-cols-12">
      <div className="grid grid-cols-10 col-start-2 col-end-12 text-[#1AAD90]">
        <div className="col-span-2">
          <p className="mb-4 font-bold text-[16.5px]">Help</p>
          <ul className="font-semibold flex flex-col gap-y-2">
            <li>How to buy tickets?</li>
            <li>How to use e-ticket?</li>
            <li>Help center</li>
          </ul>
        </div>
        <div className="col-span-2">
          <p className="mb-4 font-bold text-[16.5px]">Services</p>
          <ul className="font-semibold flex flex-col gap-y-2">
            <li>Customer Stories</li>
            <li>Talk to us</li>
          </ul>
        </div>
        <div className="col-span-2">
          <p className="mb-4 font-bold text-[16.5px]">Customer Support</p>
          <ul className="font-semibold flex flex-col gap-y-2">
            <li>+(66) 2 026 3068</li>
            <li>support@spicyz.com</li>
          </ul>
        </div>
        <div className="col-span-3 col-end-11 text-end flex flex-col gap-y-2">
          <h1 className="text-6xl font-semibold">Tricket</h1>
          <p className="font-semibold">
            No.29 Bangkok Business Center 26th Floor, Room 2601, Soi Sukhumvit
            63 Khlong Tan Nuea, Watthana,Bangkok 10110
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
