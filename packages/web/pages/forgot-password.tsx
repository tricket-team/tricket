import NavBar from '../components/NavBar';
import React, { useState } from 'react';
import Link from 'next/link';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../config/firebase';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
function ForgotPassword() {
  const route = useRouter();
  const [email, setEmail] = useState('');
  const triggerResetEmail = async () => {
    await sendPasswordResetEmail(auth, email).then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Password reset email sent',
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        route.push('sign-in');
      });
    });
    console.log('Password reset email sent');
  };
  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-center items-center h-screen bg-white">
        <div className="w-auto py-16 rounded overflow-hidden shadow-lg px-10">
          <div className="px-6 py-4 flex items-center justify-center">
            <div className="w-28 h-28 flex items-center justify-center rounded-2xl bg-[#95F690]/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#1AAD90"
                className="w-14 h-14 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                />
              </svg>
            </div>
          </div>

          <div className="px-6 py-4">
            <p className="text-4xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1AAD90] to-[#95F690]">
              Forgot Your Password ?
            </p>
          </div>
          <div className="px-6 py-4">
            <p className="text-center font-bold bg-clip-text text-transparent text-gray-500">
              no worries, we'll send you reset instruction.
            </p>
          </div>
          <div className="px-6 py-4">
            <div>
              <label htmlFor="" className="text-gray-800 font-semibold">
                Email
              </label>
              <input
                className="border-2 w-full py-2 px-2 rounded-md"
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex justify-center px-6 pb-2 items-center">
            <button
              onClick={triggerResetEmail}
              className="rounded w-full bg-[#4EE191] hover:bg-opacity-70 transition text-white py-3 font-semibold"
            >
              Reset Password
            </button>
          </div>
          <div className="px-6 py-4">
            <Link href={'sign-in'} className="flex justify-center gap-3">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="gray"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>
              </span>
              <p className="text-center font-bold bg-clip-text text-transparent bg-gray-500">
                Back to sign in
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
