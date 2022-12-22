import React from 'react';
import Image from 'next/image';
import Navbar from '../../../../components/NavBar';
import { eventDetailDummy, TicketType } from '../../../../data';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Footer } from '../../../../components';

function Ticket(item: TicketType) {
  const getTicket = [];
  for (let i = 0; i <= item.quantity; i++) {
    getTicket.push(i);
  }

  return getTicket.map((num) => (
    <option className="text-center" value={num} key={num}>
      {num}
    </option>
  ));
}

function Detail() {
  const router = useRouter();
  const slug = router.query.slug as string;

  useState(() => {
    fetch('');
  });

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-12 mb-10">
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
                <p className="font-semibold font-lg">
                  {eventDetailDummy.title}
                </p>
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
                    <select
                      defaultValue={'Select'}
                      className="bg-[#1E1E1E] hover:bg-[#1E1E1E]/70 border-2 border-white/20 rounded w-10"
                    >
                      {Ticket(item)}
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="col-start-2 col-end-12 bg-[#1E1E1E] py-4 text-white rounded-md font-semibold">
          Buy Ticket
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Detail;
