import React from 'react';
import Image from 'next/image';
// import NavBar from '../../components/NavBar';

function Detail() {
  return (
    <div className="grid grid-cols-12 mb-10">
      <div className="col-span-12">
        <Image
          src="https://scontent.fbkk31-1.fna.fbcdn.net/v/t39.30808-6/294815604_5222659704488338_2909628041657591105_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=e25c_dmcgSMAX9_vYy9&_nc_ht=scontent.fbkk31-1.fna&oh=00_AfBxu8VuB57M4voGQe3UZkOH1zN6zeIXCm7Sm5AmpFt-cA&oe=63A6CFB7"
          width={1920}
          height={300}
          alt="gun_n_roses"
          className="w-full h-[700px] object-cover blur-xl"
        />
      </div>
      <div className="justify-center col-start-2 col-span-10 -mt-[550px] z-10">
        <div className="grid grid-cols-10 text-white">
          <span className="col-span-6 text-[96px] font-semibold">
            Guns N’ Rose Live in Bangkok
          </span>
          <div className="col-end-10 bg-white w-1"></div>
          <span className="col-end-11 text-right self-end">ParcParagon</span>
        </div>
        <div className="grid-rows-2 mt-[60px]">
          <Image
            src="https://scontent.fbkk31-1.fna.fbcdn.net/v/t39.30808-6/294815604_5222659704488338_2909628041657591105_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=e25c_dmcgSMAX9_vYy9&_nc_ht=scontent.fbkk31-1.fna&oh=00_AfBxu8VuB57M4voGQe3UZkOH1zN6zeIXCm7Sm5AmpFt-cA&oe=63A6CFB7"
            width={1600}
            height={300}
            alt="gun_n_roses"
            className="rounded-xl w-full h-[600px] object-cover"
          />
          <div className="grid grid-cols-10 gap-4 mt-5 text-white">
            <div className="bg-[#1D1D1D] rounded-lg col-span-6 w-full h-20 flex items-center justify-center flex-col">
              <p>Guns N’ Roses Live in Bangkok</p>
              <p>9 November 2022</p>
            </div>
            <div className="bg-[#1D1D1D] rounded-lg col-span-4 w-full h-20 flex items-center justify-center flex-col">
              <p>Wed 9 November 2022, 20:00</p>
              <p>Thunderdome Stadium</p>
            </div>
          </div>
          <div className="grid grid-cols-10 gap-4 mt-5">
            <div className="col-span-5">
              <Image
                src="https://scontent.fbkk31-1.fna.fbcdn.net/v/t39.30808-6/294811374_5222694421151533_429907347781770456_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dbeb18&_nc_ohc=FyVKddMZUZEAX8u7KT3&_nc_ht=scontent.fbkk31-1.fna&oh=00_AfCDqp7RMDcNJ6_Re_Dh09DU1x5x1WKflJrnHpCEdJYxBw&oe=63A83DAC"
                width={1600}
                height={300}
                alt="gun_n_roses"
                className="rounded-xl"
              />
            </div>
            <div className="col-span-5 pl-5">
              <p className="font-semibold text-[24px]">Event Description</p>
              <p className="mt-5 text-[24px]">
                Age Restrictions Admission to reserved seats for 6 years old and
                above only. Admission to standing pen for 12 years old and above
                only. Nightrain Member Pre-sale: 26 July 2022, 11 am - 11pm (GMT
                +7) Public Sale: 28 July 11 am (GMT +7) onwards *Subscribe to
                the IMC Live Global Newsletter by 26 July 2022, 12 pm (GMT+7)
                via http://bit.ly/IMCLiveFans⁣ to access the pre-sale. A
                pre-sale link will be sent to you via email on 26 July 2022, 6
                pm (GMT +7).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
