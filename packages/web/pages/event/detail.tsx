import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '../../components/NavBar';
import { Menu } from '@headlessui/react';
import { eventDetailDummy, TicketType } from '../../data';

type Ticket = {
  title: string;
  price: string;
  quantity: number[];
};
function Ticket(item) {
  const getTicket = [];
  for (let i = 0; i <= item.quantity; i++) {
    getTicket.push(i);
  }
  return getTicket.map((num) => (
    <option className="text-center" value={num}>
      {num}
    </option>
  ));
}
function Detail() {
  return (
    <div className="grid grid-cols-12 mb-10">
      <Navbar />
      <div className="col-span-12">
        <Image
          src={eventDetailDummy.coverImg}
          width={1920}
          height={300}
          alt="gun_n_roses"
          className="w-full h-[700px] object-cover blur-md z-0"
        />
      </div>
      <div className="justify-center col-start-2 col-span-10 -mt-[550px] z-10">
        <div className="grid grid-cols-10 text-white">
          <span className="col-span-6 text-[96px] font-semibold">
            {eventDetailDummy.title}
          </span>
          <div className="col-end-10 bg-white w-1"></div>
          <span className="col-end-11 text-right self-end font-semibold">
            {eventDetailDummy.location}
          </span>
        </div>
        <div className="grid-rows-2 mt-[60px]">
          <Image
            src={eventDetailDummy.coverImg}
            width={1600}
            height={300}
            alt="gun_n_roses"
            className="rounded-xl w-full h-[600px] object-cover"
          />
          <div className="grid grid-cols-10 gap-4 mt-16 text-white">
            <div className="bg-[#1D1D1D] rounded-lg col-span-6 w-full h-20 flex items-center justify-center flex-col">
              <p className="font-semibold font-lg">{eventDetailDummy.title}</p>
            </div>
            <div className="bg-[#1D1D1D] rounded-lg col-span-4 w-full h-20 flex items-center justify-center flex-col">
              <p className="font-semibold">
                {eventDetailDummy.date}, {eventDetailDummy.time}
              </p>
              <p>{eventDetailDummy.location}</p>
            </div>
          </div>
          <div className="grid grid-cols-10 gap-4 mt-16">
            <div className="col-span-5">
              <Image
                src={eventDetailDummy.img}
                width={1600}
                height={300}
                alt="gun_n_roses"
                className="rounded-xl"
              />
            </div>
            <div className="col-span-5 pl-5">
              <p className="font-semibold text-[24px]">Event Description</p>
              <p className="mt-5 text-lg">{eventDetailDummy.description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-start-2 col-end-12 my-10 bg-[#1E1E1E] rounded-md w-full">
        <div className="text-white p-5 w-full grid grid-cols-9">
          <div className="col-span-3 font-semibold text-lg">
            <p>Ticket Type</p>
          </div>
          <div className="col-span-3 text-end font-semibold text-lg">
            <p>Price</p>
          </div>
          <div className="col-span-3 text-end font-semibold text-lg">
            <p>Qty.</p>
          </div>
          <hr className="col-span-9 my-4"></hr>
          {eventDetailDummy.ticket.map((item: TicketType, i: number) => (
            <div
              className="justify-between items-start col-span-9 grid grid-cols-9 my-2"
              key={i}
            >
              <div className="col-span-3 font-medium">
                <p>{item.title}</p>
              </div>
              <div className="col-span-3 text-end font-medium">
                <p>{item.price}</p>
              </div>
              <div className="col-span-3 items-end text-end font-medium grid grid-cols-4">
                <div className="col-start-4">
                  <select defaultValue={'Select'} className="bg-black w-10">
                    {Ticket(item)}
                  </select>
                  {/* <Menu>
                    <Menu.Button className="border border-white py-2 px-3 rounded">
                      <div className="flex gap-x-2 items-center">
                        <p>Select</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </Menu.Button>
                    {ticketNumber.map((item: number, i: number) => (
                      <Menu.Items className="items-end cursor-pointer" key={i}>
                        <p className="py-2 px-3 bg-white/20 hover:bg-white/30 text-center">
                          {item}
                        </p>
                      </Menu.Items>
                    ))}
                  </Menu> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Detail;
