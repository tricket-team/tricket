import React, { useState } from 'react';
import { Footer, NavBar } from '../../components';
import { createTicketState } from '../../data';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';

const CreateTicket = () => {
  const router = useRouter();
  const [step, setStep] = useState<createTicketState>(
    createTicketState['ticket type qty']
  );
  const [ticketTypeQty, setTicketTypeQty] = useState(0);
  const [ticketTitle, setTicketTitle] = useState('');
  const [ticketDate, setTicketDate] = useState('');
  const [ticketPrice, setTicketPrice] = useState(0);

  type CreateTicket = {
    title: '';
    date: '';
    price: number;
  };

  function Ticket(ticketTypeQty: number) {
    const getTicket = [];
    for (let i = 1; i <= ticketTypeQty - 1; i++) {
      getTicket.push(i);
    }

    return getTicket.map((num) => (
      <div className="w-full flex gap-x-4 mt-4" key={num}>
        <div>
          <label htmlFor="" className="text-gray-800 font-semibold">
            Title
          </label>
          <input
            className="w-full mt-2 rounded border-2 border-gray-400 pl-4 py-1"
            type="text"
            onChange={(e) => setTicketTitle(e.target.value)}
          />
        </div>
        <div className="w-2/4">
          <label htmlFor="" className="text-gray-800 font-semibold">
            Event Date
          </label>
          <input
            className="w-full mt-2 rounded border-2 border-gray-400 pl-4 py-1"
            type="date"
            onChange={(e) => setTicketDate(e.target.value)}
          />
        </div>
        <div className="w-2/4">
          <label htmlFor="" className="text-gray-800 font-semibold">
            Price
          </label>
          <input
            className="w-full mt-2 rounded border-2 border-gray-400 pl-4 py-1"
            type="number"
            accept="number"
            onChange={(e) => setTicketPrice(parseInt(e.target.value))}
          />
        </div>
      </div>
    ));
  }

  const shiftStepForward = (currentStep: createTicketState) => {
    const current = currentStep.toString();

    if (current === createTicketState['ticket type qty'].toString()) {
      setStep(createTicketState['create ticket']);
    }
  };

  const shiftStepBackward = (currentStep: createTicketState) => {
    const current = currentStep.toString();

    if (current === createTicketState['create ticket'].toString()) {
      setStep(createTicketState['ticket type qty']);
    }
  };

  const postCreateTicket = async () => {
    const formData = new FormData();
    for (let i = 1; i < ticketTypeQty; i++) {
      formData.append('title', ticketTitle);
      formData.append('date', ticketDate);
      formData.append('price', ticketPrice);
    }

    await fetch('http://localhost:9000/ticket/create/:eventId', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        response.json();
        Swal.fire({
          icon: 'success',
          title: `Created ${ticketTypeQty} tickets`,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((e) => console.log(e))
      .finally(() => router.push('/event'));
  };

  return (
    <>
      <NavBar />
      <div className="grid grid-cols-12 min-h-screen">
        <div className="col-start-2 col-end-12 flex justify-center items-center mt-24">
          <div className="bg-[#ededed]/50 rounded-md w-2/6">
            <div className="px-6 py-8">
              {step === createTicketState['ticket type qty'] && (
                <div>
                  <label htmlFor="" className="text-gray-800 font-semibold">
                    How many type of ticket do you have?
                  </label>
                  <input
                    className="w-full mt-4 rounded border-2 border-gray-400 pl-4 py-1"
                    type="number"
                    min={1}
                    onChange={(e) => setTicketTypeQty(parseInt(e.target.value))}
                  />
                </div>
              )}
              {step === createTicketState['create ticket'] && (
                <div>
                  <label htmlFor="" className="text-gray-800 font-semibold">
                    Ticket Lists
                  </label>
                  <div className="w-full flex gap-x-4 mt-4">
                    <div>
                      <label htmlFor="" className="text-gray-800 font-semibold">
                        Title
                      </label>
                      <input
                        className="w-full mt-2 rounded border-2 border-gray-400 pl-4 py-1"
                        type="text"
                        onChange={(e) => setTicketTitle(e.target.value)}
                      />
                    </div>
                    <div className="w-2/4">
                      <label htmlFor="" className="text-gray-800 font-semibold">
                        Event Date
                      </label>
                      <input
                        className="w-full mt-2 rounded border-2 border-gray-400 pl-4 py-1"
                        type="date"
                        onChange={(e) => setTicketDate(e.target.value)}
                      />
                    </div>
                    <div className="w-2/4">
                      <label htmlFor="" className="text-gray-800 font-semibold">
                        Price
                      </label>
                      <input
                        className="w-full mt-2 rounded border-2 border-gray-400 pl-4 py-1"
                        type="number"
                        accept="number"
                        onChange={(e) =>
                          setTicketPrice(parseInt(e.target.value))
                        }
                      />
                    </div>
                  </div>
                  {Ticket(ticketTypeQty)}
                </div>
              )}

              <div className="flex justify-between items-center mt-4">
                {step !== createTicketState['ticket type qty'] && (
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

                {step !== createTicketState['create ticket'] && (
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

                {step === createTicketState['create ticket'] && (
                  <button
                    className="mt-4 rounded bg-[#1AAD90] hover:bg-opacity-70 transition text-white py-2 px-3 font-semibold"
                    onClick={postCreateTicket}
                  >
                    Create Tickets
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

export default CreateTicket;
