import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { auth } from '../config/firebase';
import { useRouter } from 'next/router';
import { User } from 'firebase/auth';

const NavBar = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser(auth.currentUser);
  });

  const signOut = async () => {
    await auth.signOut();
    setUser(null);
  };

  const path = [
    '/event',
    '/sign-in',
    '/sign-up',
    '/event/create/ticket/:eventId',
    '/event/create',
  ];

  return (
    <>
      <div className="w-full fixed top-0 grid grid-cols-12 z-50">
        <div className="col-start-2 col-end-12 my-5">
          <div className="bg-black/[.04] backdrop-blur-md rounded-lg">
            <div className="py-4 px-10 flex justify-between items-center">
              <Link href={'/event'}>
                <Image
                  src={
                    path.includes(router.pathname)
                      ? '/img/tricket.svg'
                      : '/img/tricket-white.svg'
                  }
                  width={120}
                  height={50}
                  alt=""
                />
              </Link>
              <div
                className={`${
                  path.includes(router.pathname)
                    ? 'text-[#24475B]'
                    : 'text-white'
                } font-semibold flex gap-x-10 items-center`}
              >
                <Link href={'/event'}>Home</Link>
                {user ? (
                  <div className="flex gap-x-10 items-center">
                    <p className="font-semibold">{user.displayName}</p>
                    <button onClick={signOut}>Sign out</button>
                  </div>
                ) : (
                  <div className="flex gap-x-10">
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
