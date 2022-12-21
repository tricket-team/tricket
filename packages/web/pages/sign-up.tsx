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
            <div>
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
            <div>
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
      </div>
    </div>
  );
}
export default Signup;
