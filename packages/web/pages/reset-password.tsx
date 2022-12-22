import NavBar from '../components/NavBar';
import React, { useState } from 'react';
import Link from 'next/link';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
function ResetPassword() {
  const [email, setEmail] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const route = useRouter();
  function togglePassword() {
    setPasswordShown(!passwordShown);
  }
  function toggleConfirmPassword() {
    setConfirmPasswordShown(!confirmPasswordShown);
  }
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
              Reset new password
            </p>
          </div>
          <div className="px-6 py-4">
            <p className="text-center font-bold bg-clip-text text-transparent text-gray-500">
              Your new password must different to previously used passwords.
            </p>
          </div>
          <div className="px-6 py-4">
            <div>
              <label htmlFor="" className="text-gray-800 font-semibold">
                Password
              </label>
              <div className="relative">
                <div className="absolute top-3.5 right-2">
                  {passwordShown ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 cursor-pointer"
                      onClick={togglePassword}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 cursor-pointer"
                      onClick={togglePassword}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  )}
                </div>
                <input
                  className="border-2 w-full py-2 px-2 rounded-md"
                  placeholder="Password"
                  type={passwordShown ? 'text' : 'password'}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                ></input>
              </div>
            </div>
            <div>
              <label htmlFor="" className="text-gray-800 font-semibold">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute top-3.5 right-2">
                  {confirmPasswordShown ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 cursor-pointer"
                      onClick={toggleConfirmPassword}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 cursor-pointer"
                      onClick={toggleConfirmPassword}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  )}
                </div>
                <input
                  className="border-2 w-full py-2 px-2 rounded-md"
                  placeholder="Confirm Password"
                  type={confirmPasswordShown ? 'text' : 'password'}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                ></input>
              </div>
            </div>
          </div>
          <div className="flex justify-center px-6 pb-2 items-center">
            <button
              className="rounded w-full bg-[#4EE191] hover:bg-opacity-70 transition text-white py-3 font-semibold"
              onClick={() => {
                Swal.fire({
                  icon: 'success',
                  title: 'Your work has been saved',
                  showConfirmButton: false,
                  timer: 1500,
                }).then(() => {
                  route.push('sign-in');
                });
              }}
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

export default ResetPassword;
