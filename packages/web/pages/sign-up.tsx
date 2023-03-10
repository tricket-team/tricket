import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';

function SignUp() {
  const router = useRouter();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  function togglePassword() {
    setPasswordShown(!passwordShown);
  }
  function toggleConfirmPassword() {
    setConfirmPasswordShown(!confirmPasswordShown);
  }

  const postCreateUser = async () => {
    // const formData = new FormData();
    // formData.append('firstName', firstName);
    // formData.append('lastName', lastName);
    // formData.append('email', email);
    // formData.append('password', password);
    // formData.append('birthDate', birthDay);
    // formData.append('phoneNumber', '+66' + parseInt(phoneNumber));

    // await fetch('http://localhost:9000/sign-up', {
    //   headers: { 'content-type': 'application/json' },
    //   method: 'POST',
    //   body: formData,
    // })
    //   .then((response) => {
    //     response.json();
    //     router.push('/sign-in');
    //   })
    //   .finally(() => {
    //     Swal.fire({
    //       icon: 'success',
    //       title: `Create account successful`,
    //       showConfirmButton: false,
    //       timer: 2000,
    //     });
    //   });
    const userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      birthDate: birthDay,
      phoneNumber: phoneNumber,
    };
    await fetch('http://localhost:9000/sign-up', {
      headers: { 'content-type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(userData),
    })
      .then((response) => {
        response.json();
      })
      .finally(() => {
        Swal.fire({
          icon: 'success',
          title: `Create account successful`,
          showConfirmButton: false,
          timer: 2000,
        });
        router.push('/sign-in');
      });
  };

  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-center items-center my-20">
        <div className="w-auto py-10 rounded-md overflow-hidden shadow-lg px-10 bg-white">
          <div className="px-6 py-4">
            <div className="flex gap-3 py-2">
              <div className="w-full">
                <label htmlFor="" className="text-gray-800 font-semibold">
                  First name
                </label>
                <input
                  className="border-2 w-full py-2 px-2 rounded-md"
                  type="text"
                  placeholder="First name"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </div>
              <div className="w-full">
                <label htmlFor="" className="text-gray-800 font-semibold">
                  Last name
                </label>
                <input
                  className="border-2 w-full py-2 px-2 rounded-md"
                  type="text"
                  placeholder="Last name"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </div>
            </div>
            <div>
              <label htmlFor="" className="text-gray-800 font-semibold">
                Birth date
              </label>
              <input
                type="date"
                className="border-2 w-full py-2 px-2 rounded-md"
                id="birthday"
                name="birthday"
                onChange={(e) => {
                  setBirthDay(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="" className="text-gray-800 font-semibold">
                Phone number
              </label>
              <input
                className="border-2 w-full py-2 px-2 rounded-md"
                type="text"
                placeholder="Phone number"
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              />
            </div>
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
              onClick={postCreateUser}
              className="rounded w-full bg-[#4EE191] hover:bg-opacity-70 transition text-white py-3 font-semibold"
            >
              Sign up
            </button>
          </div>
          <div className="flex px-6 pb-2 items-center">
            <div className="grid grid-cols-10 w-full items-center">
              <div
                className="bg-black col-span-4 w-[100%]"
                style={{ height: 1 }}
              ></div>
              <p className="col-span-2 mx-3 text-center	">or</p>
              <div
                className="bg-black col-span-4 w-[100%]"
                style={{ height: 1 }}
              ></div>
            </div>
          </div>

          <div className="flex px-6 pb-2 items-center">
            <button className="bg-gray-200 flex items-center justify-center w-full border-2 rounded gap-4 hover:scale-[102%] transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="45"
                preserveAspectRatio="xMidYMid"
                viewBox="0 0 256 262"
              >
                <path
                  fill="#4285F4"
                  d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                />
                <path
                  fill="#34A853"
                  d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                />
                <path
                  fill="#FBBC05"
                  d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                />
                <path
                  fill="#EB4335"
                  d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                />
              </svg>
              <p className="font-semibold font-gray-600">Sign in with Google</p>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;
