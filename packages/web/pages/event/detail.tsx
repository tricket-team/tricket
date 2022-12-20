import React from 'react';
import Image from 'next/image';
import NavBar from '../../components/NavBar';

function Detail() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center mt-10">
        <div className="grid-rows-2">
          <Image
            src="/img/wall_gun_n_roses.png"
            width={500}
            height={300}
            alt="gun_n_roses"
            className="rounded-xl"
          />
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-700 h-120 w-36 rounded-xl justify-self-center">
              <p className="text-white text-center">
                Guns N’ Roses Live in Bangkok
              </p>
            </div>
            <div className="bg-gray-700 h-120 w-36 rounded-xl justify-self-center">
              <p className="text-white text-center align-middle">
                9 November 2022
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
