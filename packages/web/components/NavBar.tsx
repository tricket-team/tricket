import React from 'react';
import Image from 'next/image';

const NavBar = () => {
  return (
    <>
      <div className="fixed w-full grid grid-cols-12 border-2">
        <div className="col-start-2 col-end-12 my-5">
          <div className="bg-white/[.03]	backdrop-blur-md rounded-lg">
            <div className="py-3 px-5 flex justify-between items-center">
              <Image src={'/img/tricket.svg'} width={120} height={50} alt="" />
              <div className="text-[#24475B] font-semibold flex gap-x-10">
                <p>Home</p>
                <p>Profile</p>
                <a href="/login">
                  <p>Sign in</p>
                </a>
                <a href="create">
                  <p>Sign up</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
