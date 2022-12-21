import React from 'react';
import { EventCard, NavBar, Footer } from '../../components';

const Event = () => {
  return (
    <>
      <NavBar />
      <div className="w-full h-full grid grid-cols-12 py-14">
        <div className="col-start-2 col-end-12">
          <div className="w-full h-96 bg-black rounded-md"></div>
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
