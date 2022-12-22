import React from 'react';
import Image from 'next/image';
import { mockData, data } from '../data';

const EventCard = () => {
  // function Loader(src: string) {
  //   console.log(`${src}`);
  //   return `https://s3-ap-southeast-1.amazonaws.com/tm-img-poster-event/${src}`;
  // }

  return (
    <>
      <div className="flex justify-between">
        {mockData.map((item: data, i: number) => (
          <div className="my-6 flex flex-col gap-y-2 w-[230px]" key={i}>
            <div className="relative bg-transparent w-[230px] h-[320px] rounded-md">
              <Image src={item.img} fill alt="" className="rounded-md" />
              <div className="absolute w-full h-full items-center justify-center flex gap-x-2 rounded-md transition-all hover:bg-black/30 opacity-0 hover:opacity-100 ">
                <p className="text-white text-xl font-semibold cursor-pointer">
                  GET TICKET
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="white"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>
            </div>
            <p className="text-gray-400 text-sm">{item.date}</p>
            <p className="font-semibold text-lg">{item.title}</p>
            <div className="flex gap-x-1 items-center text-gray-400 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <p>{item.location}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default EventCard;
