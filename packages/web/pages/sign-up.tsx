import React from 'react';
function Signup() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-100">
      <div className="w-auto py-10 rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="flex flex-col gap-y-3 py-2">
            <div>
              <label htmlFor="">Firstname</label>
              <input
                className="border-2 w-full p-1 rounded-md"
                type="text"
                placeholder="Firstname"
              />
            </div>
            <div>
              <label htmlFor="">Lastname</label>
              <input
                className="border-2 w-full p-1 rounded-md"
                type="text"
                placeholder="Lastname"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signup;
