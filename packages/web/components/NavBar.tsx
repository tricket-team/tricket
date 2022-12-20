import React from 'react';
import Image from 'next/image';

const NavBar = () => {
  return (
    <>
      <div className="fixed w-full grid grid-cols-12">
        <div className="col-start-2 col-end-12 mt-10">
          <div className="bg-white/[.03]	backdrop-blur-md rounded-lg">
            <div className="py-3 px-5 flex justify-between items-center">
              <Image src={'/img/tricket.svg'} width={120} height={50} alt="" />
              <div className="text-[#24475B] font-semibold flex gap-x-10">
                <p>Home</p>
                <p>Profile</p>
                <p>Sign in</p>
                <p>Sign up</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
