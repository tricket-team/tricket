import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { auth } from '../config/firebase';
import Router from 'next/router';
import { User } from 'firebase/auth';

const NavBar = () => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    if (!auth.currentUser) Router.push('/sign-in');
    setUser(auth.currentUser);
  });
  return (
    <>
      <div className="w-full fixed top-0 grid grid-cols-12 z-50">
        <div className="col-start-2 col-end-12 my-5">
          <div className="bg-black/[.04] backdrop-blur-md rounded-lg">
            <div className="py-4 px-10 flex justify-between items-center">
              <Image src={'/img/tricket.svg'} width={120} height={50} alt="" />
              <div className="text-[#24475B] font-semibold flex gap-x-10">
                <Link href={'/event'}>Home</Link>
                {user ? (
                  <Link href={'/event'}>{user.displayName}</Link>
                ) : (
                  <div>
                    <Link href={'sign-in'}>Sign in</Link>
                    <Link href={'sign-up'}>Sign up</Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
