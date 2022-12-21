import React, { useState } from 'react';
import Image from 'next/image';
import { mockOrder } from '../../data';

const Checkout = () => {
  const [email, setEmail] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [address, setAddress] = useState('');

  return (
    <>
      <div className="grid grid-cols-12 mt-10">
        <div className="col-start-2 col-end-8 px-10">
          <h2 className="font-semibold text-3xl">Order Summary</h2>
          <div className="rounded-md bg-gray-100 w-full mt-4 mb-10">
            <div className="flex flex-col py-5 px-10">
              <div className="flex justify-between font-semibold">
                <p>Title</p>
                <p>Price</p>
                <p>Qty.</p>
              </div>
              <hr className="my-4"></hr>
              <div className="flex justify-between">
                <p>{mockOrder.title}</p>
                <p>{mockOrder.price}</p>
                <p>{mockOrder.quantity}</p>
              </div>
            </div>
          </div>
          <h2 className="font-semibold text-3xl">Payment Details</h2>
          <p className="mt-2 text-gray-500">
            Enter your payment details below to checkout
          </p>
          <div className="my-5 flex flex-col gap-y-2">
            <div>
              <label htmlFor="" className="text-gray-700 font-semibold">
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
              <label htmlFor="" className="text-gray-700 font-semibold">
                Name on card
              </label>
              <input
                className="border-2 w-full py-2 px-2 rounded-md"
                type="text"
                placeholder="Name"
                onChange={(e) => {
                  setNameOnCard(e.target.value);
                }}
              />
            </div>
            <div className="flex gap-x-5">
              <div className="w-full">
                <label htmlFor="" className="text-gray-700 font-semibold">
                  Card Number
                </label>
                <input
                  className="border-2 py-2 px-2 rounded-md  w-full"
                  type="text"
                  placeholder="**** **** **** ****"
                  onChange={(e) => {
                    setCardNumber(e.target.value);
                  }}
                />
              </div>
              <div className="w-2/4">
                <label htmlFor="" className="text-gray-700 font-semibold">
                  CVV
                </label>
                <input
                  className="border-2 py-2 px-2 rounded-md  w-full"
                  type="text"
                  placeholder="***"
                  onChange={(e) => {
                    setCardNumber(e.target.value);
                  }}
                />
              </div>
              <div className="w-2/4">
                <label htmlFor="" className="text-gray-700 font-semibold">
                  Expire Date
                </label>
                <input
                  className="border-2 py-2 px-2 rounded-md  w-full"
                  type="month"
                  placeholder="***"
                  onChange={(e) => {
                    setCardNumber(e.target.value);
                  }}
                />
              </div>
            </div>
            <div>
              <label htmlFor="" className="text-gray-700 font-semibold">
                Billing Address
              </label>
              <input
                className="border-2 w-full py-2 px-2 rounded-md"
                type="text"
                placeholder="Address"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex justify-center pb-2 items-center">
            <button className="rounded w-full bg-[#1D1D1D] hover:bg-opacity-70 transition text-white py-3 font-semibold">
              Proceed to Checkout
            </button>
          </div>
        </div>
        <div className="col-start-8 col-end-12 align-end rounded-md px-10">
          <Image
            src="https://scontent.fbkk31-1.fna.fbcdn.net/v/t39.30808-6/294815604_5222659704488338_2909628041657591105_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=e25c_dmcgSMAX9_vYy9&_nc_ht=scontent.fbkk31-1.fna&oh=00_AfBxu8VuB57M4voGQe3UZkOH1zN6zeIXCm7Sm5AmpFt-cA&oe=63A6CFB7"
            alt="gun_n_roses"
            className="rounded-xl"
            width={600}
            height={600}
          />
        </div>
      </div>
    </>
  );
};

export default Checkout;
