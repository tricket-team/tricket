import React, { useState } from 'react';
function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-100">
      <div className="w-auto py-10 rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="flex gap-3 py-2">
            <div className="w-full">
              <label htmlFor="">First name</label>
              <input
                className="border-2 w-full p-1 rounded-md"
                type="text"
                placeholder="First name"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </div>
            <div className="w-full">
              <label htmlFor="">Last name</label>
              <input
                className="border-2 w-full p-1 rounded-md"
                type="text"
                placeholder="Last name"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
          </div>
          <div>
            <label htmlFor="">Birth date</label>
            <input
              type="date"
              className="border-2 w-full p-1 rounded-md"
              id="birthday"
              name="birthday"
              onChange={(e) => {
                setBirthDay(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="">Phone number</label>
            <input
              className="border-2 w-full p-1 rounded-md"
              type="text"
              placeholder="Phone number"
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input
              className="border-2 w-full p-1 rounded-md"
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input
              className="border-2 w-full p-1 rounded-md"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <label htmlFor="">Confirm Password</label>
            <input
              className="border-2 w-full p-1 rounded-md"
              placeholder="Confirm Password"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <div className="flex justify-center px-6 pb-2 items-center">
          <button
            style={{ height: 45 }}
            className="rounded-[16px] w-full bg-[#4EE191] hover:bg-opacity-70 transition"
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
            <p className="col-span-2 mx-3 text-center	">or sign in with</p>
            <div
              className="bg-black col-span-4 w-[100%]"
              style={{ height: 1 }}
            ></div>
          </div>
        </div>

        <div className="flex px-6 pb-2 items-center">
          <button className="flex items-center justify-center w-full border-2 rounded-[8px] gap-2 border-[#4EE191] hover:scale-[102%] transition">
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
            <p>Google</p>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Signup;
