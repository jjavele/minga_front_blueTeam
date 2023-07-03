import React from "react";

export default function Signin() {
  return (
    <>
      <div className="flex flex-col justify-start items-center text-center hidden lg:flex lg:w-[50%] object-cover">
        <img
          className=""
          src="/src/assets/images/minga.png"
          alt="full_minga_logo"
        />
        <h1>
          Welcome <span className="text-blue-500">back</span>!
        </h1>
        <p>
          Discover manga, manhua and manhwa, track your progress, have fun, read
          manga.
        </p>
      </div>
    </>
  );
}
