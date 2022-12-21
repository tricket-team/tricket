import { User } from 'firebase/auth';
import Link from 'next/link';
import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import { auth } from '../config/firebase';

function Index() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (!auth.currentUser) Router.push('/sign-in');
    setUser(auth.currentUser);
  });

  const signOut = async () => {
    await auth.signOut();
    setUser(null);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-slate-100 flex-col">
      <p className="text-4xl font-bold">Hello World</p>
      {user ? (
        <>
          <p>{user.displayName}</p>
          <button onClick={signOut}>Sign Out</button>
        </>
      ) : (
        <Link href="/sign-in">Login</Link>
      )}
    </div>
  );
}

export default Index;
