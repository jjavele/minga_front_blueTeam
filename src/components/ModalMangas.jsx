import React from "react";

export default function ModalMangas({ state, change }) {


  return (
    <div>
      {state && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-opacity-50 bg-black flex items-center justify-center">
          <div class="w-[50%] min-h-100 bg-white rounded-xl shadow-md p-[2rem] pb-[1rem]">
            <div className="flex justify-between border-b-2 border-black">
              <h1 class="text-blue-500 mb-2 ">Edit</h1>
              <button
                onClick={() => {
                  change(false);
                }}
                class="text-red-500 hover:bg-red-100 rounded-xl mb-2 w-[4rem]"
              >
                Close
              </button>
            </div>
            <div className="mt-[2rem]">
              <div className="flex justify-between">
                <p>Edit manga name:</p>
                <input
                  type="text"
                  className="ml-4 border-solid border-2 border-black pl-2"
                  placeholder="Enter new name"
                />
              </div>
              <br />
              <div className="flex justify-between">
                <p>Edit manga photo:</p>
                <input
                  type="text"
                  className="ml-4 border-solid border-2 border-black pl-2"
                  placeholder="Enter a URL photo"
                />
              </div>
              <br />
              <div className="flex justify-between">
                <p>Edit manga description:</p>
                <input
                  type="text"
                  className="ml-4 border-solid border-2 border-black pl-2"
                  placeholder="Enter a new description"
                  />
              </div>
            </div>
            <div className="flex justify-between">
            <button class="bg-green-500 text-white px-4 py-2 rounded-xl mt-[2rem] hover:scale-[3rem]">Confirm</button>
            <button class="bg-red-500 text-white px-4 py-2 rounded-xl mt-[2rem] hover:scale-[3rem]">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
