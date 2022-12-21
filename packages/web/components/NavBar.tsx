import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
  return (
    <>
      <div className="sticky top-0 w-full grid grid-cols-12">
        <div className="col-start-2 col-end-12 my-5">
          <div className="bg-black/[.04] backdrop-blur-md rounded-lg">
            <div className="py-4 px-10 flex justify-between items-center">
              <Image src={'/img/tricket.svg'} width={120} height={50} alt="" />
              <div className="text-[#24475B] font-semibold flex gap-x-10">
                <Link href={'/'}>Home</Link>
                <Link href={'sign-in'}>Sign in</Link>
                <Link href={'sign-up'}>Sign up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
