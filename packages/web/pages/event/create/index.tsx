import Image from 'next/image';
import React, { useState } from 'react';
import { NavBar, Footer } from '../../../components';
import { createEvent, EventType } from '../../../data';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
import Link from 'next/link';

const CreateEvent = () => {
  const router = useRouter();
  const [postData, setPostData] = useState<EventType[]>([]);
  const [step, setStep] = useState<createEvent>(createEvent['add title']);
  const [title, setTitle] = useState('');
  const [eventType, setEventType] = useState('');
  const [country, setCountry] = useState('');
  const [description, setDescription] = useState('');
  const [stateLocation, setState] = useState('');
  const [postCode, setPostcode] = useState('');
  const [address, setAddress] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [imageFile, setImageFile] = useState('');

  const shiftStepForward = (currentStep: createEvent) => {
    const current = currentStep.toString();

    if (current === createEvent['add title'].toString()) {
      setStep(createEvent['add date and location']);
    } else if (current === createEvent['add date and location'].toString()) {
      setStep(createEvent['add description']);
    } else if (current === createEvent['add description'].toString()) {
      setStep(createEvent['upload cover image']);
    }
  };

  const shiftStepBackward = (currentStep: createEvent) => {
    const current = currentStep.toString();

    if (current === createEvent['add date and location'].toString()) {
      setStep(createEvent['add title']);
    } else if (current === createEvent['add description'].toString()) {
      setStep(createEvent['add date and location']);
    } else if (current === createEvent['upload cover image'].toString()) {
      setStep(createEvent['add description']);
    }
  };

  const getAllEvent = async (slug: string) => {
    await fetch(`http://localhost:9001/event/slug/${slug}`).then(
      async (response) => {
        setPostData((await response.json()) as EventType[]);
      }
    );
  };

  const postCreateEvent = async () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('type', eventType);
    formData.append('description', description);
    formData.append('country', country);
    formData.append('state', stateLocation);
    formData.append('postalCode', postCode);
    formData.append('address', address);
    formData.append('slug', title.toLowerCase().split(' ').join('-'));
    formData.append('startTime', startDate);
    formData.append('endTime', endDate);
    formData.append('image', imageFile);

    await fetch('http://localhost:9001/event/create', {
      method: 'POST',
      body: formData,
    })
      .then(async (response) => {
        response.json();
        getAllEvent(title.toLowerCase().split(' ').join('-'));
      })
      .catch((e) => console.log(e))
      .finally(() => {
        console.log(imageFile);

        console.log(postData);
        Swal.fire({
          icon: 'success',
          title: `Created ${title} event`,
          text: "Let's place the ticket to sell!",
          html: `${(
            <Link
              href={{ pathname: '/event/create/ticket/[id]' }}
              as={`/event/create/ticket/${postData[0].id}`}
            >
              <button className="my-4 bg-slate-200 py-1 px-4 font-semibold">
                Create ticket
              </button>
            </Link>
          )}`,
          showConfirmButton: false,
        });
      });
  };

  return (
    <>
      <NavBar />
      <div className="grid grid-cols-12 min-h-[70vh] mt-28">
        <div className="col-start-2 col-end-12 flex justify-center py-10 my-4">
          <div className="relative w-2/12">
            <Image
              src="https://i.pinimg.com/564x/b2/2e/f1/b22ef11ae027f640c90112018e093a90.jpg"
              fill
              alt=""
              className="rounded-tl-md rounded-bl-md "
            />
          </div>
          <div className="bg-[#ededed]/50 rounded-tr-md rounded-br-md w-2/6">
            <div className="px-6 mt-10">
              {step === createEvent['add title'] && (
                <div>
                  <label htmlFor="" className="text-gray-800 font-semibold">
                    How would you call your event?
                  </label>
                  <input
                    className="border-2 w-full py-2 px-2 rounded-md my-4"
                    type="text"
                    placeholder="Jingle Xmas Tingle"
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                    required
                  />
                  <label htmlFor="" className="text-gray-800 font-semibold">
                    What type is your event?
                  </label>
                  <select
                    defaultValue={'Select'}
                    className="w-full rounded h-10 border my-4"
                    onChange={(e) => setEventType(e.target.value)}
                  >
                    {EventType.map((item: string, i: number) => {
                      return (
                        <option className="text-center" value={item} key={i}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </div>
              )}

              {step === createEvent['add date and location'] && (
                <div>
                  <label htmlFor="" className="text-gray-800 font-semibold">
                    When and where would you held your event?
                  </label>
                  <div className="flex gap-3 py-2 my-4">
                    <div className="w-full">
                      <label htmlFor="" className="text-gray-800 font-semibold">
                        Country
                      </label>
                      <input
                        className="border-2 w-full py-2 px-2 rounded-md"
                        type="text"
                        placeholder="Ohio"
                        onChange={(e) => {
                          setCountry(e.target.value);
                        }}
                        required
                      />
                    </div>
                    <div className="w-full">
                      <label htmlFor="" className="text-gray-800 font-semibold">
                        State
                      </label>
                      <input
                        className="border-2 w-full py-2 px-2 rounded-md"
                        type="text"
                        placeholder="Ohio"
                        onChange={(e) => {
                          setState(e.target.value);
                        }}
                        required
                      />
                    </div>
                    <div className="w-2/3">
                      <label htmlFor="" className="text-gray-800 font-semibold">
                        Postal Code
                      </label>
                      <input
                        className="border-2 w-full py-2 px-2 rounded-md"
                        type="text"
                        placeholder="*****"
                        onChange={(e) => {
                          setPostcode(e.target.value);
                        }}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex gap-3 py-2 my-4">
                    <div className="w-full">
                      <label htmlFor="" className="text-gray-800 font-semibold">
                        Address
                      </label>
                      <input
                        className="border-2 w-full py-2 px-2 rounded-md"
                        type="text"
                        placeholder="42 Ohio rd."
                        onChange={(e) => {
                          setAddress(e.target.value);
                        }}
                        required
                      />
                    </div>
                  </div>
                  <label htmlFor="" className="text-gray-800 font-semibold">
                    When would you plan to sell your ticket?
                  </label>
                  <div className="flex gap-3 py-2 my-4">
                    <div className="w-full">
                      <label htmlFor="" className="text-gray-800 font-semibold">
                        Start Date
                      </label>
                      <input
                        className="border-2 w-full py-2 px-2 rounded-md"
                        type="Date"
                        onChange={(e) => {
                          setStartDate(e.target.value);
                        }}
                        required
                      />
                    </div>
                    <div className="w-full">
                      <label htmlFor="" className="text-gray-800 font-semibold">
                        End Date
                      </label>
                      <input
                        className="border-2 w-full py-2 px-2 rounded-md"
                        type="Date"
                        onChange={(e) => {
                          setEndDate(e.target.value);
                        }}
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === createEvent['add description'] && (
                <div>
                  <label htmlFor="" className="text-gray-800 font-semibold">
                    Tell us more about your event!
                  </label>
                  <textarea
                    className="border-2 w-full py-2 px-2 rounded-md my-4"
                    placeholder="Jingle Xmas Tingle is for everyone"
                    rows={15}
                    maxLength={2000}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                    required
                  />
                </div>
              )}

              {step === createEvent['upload cover image'] && (
                <div>
                  <label htmlFor="" className="text-gray-800 font-semibold">
                    Upload cover image for your event
                  </label>
                  <input
                    type="file"
                    id="myFile"
                    name="filename"
                    className="mt-4"
                    onChange={(e) => {
                      setImageFile(e.target.files[0]);
                    }}
                    required
                  />
                </div>
              )}

              <div className="flex justify-between items-center">
                {step !== createEvent['add title'] && (
                  <div className="flex gap-x-2 place-self-end mt-4 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                      />
                    </svg>

                    <p
                      className="font-semibold"
                      onClick={() => {
                        shiftStepBackward(step);
                      }}
                    >
                      Previous Step
                    </p>
                  </div>
                )}

                {step !== createEvent['upload cover image'] && (
                  <div className="flex gap-x-2 place-self-end mt-4 cursor-pointer">
                    <p
                      className="font-semibold"
                      onClick={() => {
                        shiftStepForward(step);
                      }}
                    >
                      Next Step
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </div>
                )}

                {step === createEvent['upload cover image'] && (
                  <button
                    className="mt-4 rounded bg-[#1AAD90] hover:bg-opacity-70 transition text-white py-2 px-3 font-semibold"
                    onClick={postCreateEvent}
                  >
                    Create Event
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CreateEvent;
