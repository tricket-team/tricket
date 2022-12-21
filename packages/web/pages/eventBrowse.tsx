import React from 'react';
import { EventCard } from '../components';

const EventBrowse = () => {
  return (
    <>
      <div className="w-full h-full grid grid-cols-12 py-20">
        <div className="col-start-2 col-end-12 mt-[60px]">
          <div className="w-full h-96 bg-black rounded-md"></div>
          <div className="mt-16">
            <h4 className="text-3xl font-semibold">Active Events</h4>
            <EventCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default EventBrowse;
