import React from 'react';
import Image from 'next/image';
import { EventCard, NavBar, Footer } from '../../components';

const Event = () => {
  return (
    <>
      <NavBar />
      <div className="w-full h-full grid grid-cols-12 py-14 mt-14">
        <div className="col-start-2 col-end-12">
          <div className="relative w-full h-[600px] min-h-400">
            <Image
              src="https://s3-ap-southeast-1.amazonaws.com/tm-img-banner/banner-1440x550-ticketmelon-homepage.jpg?format=basic&resize=w1440,h550"
              alt=""
              fill
              className="rounded-md"
            />
          </div>
          <div className="mt-16">
            <h4 className="text-3xl font-semibold">Active Events</h4>
            <EventCard />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Event;
