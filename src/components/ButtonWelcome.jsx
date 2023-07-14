import React from "react";
import { Link as Anchor } from "react-router-dom";

export default function ButtonWelcome({ name }) {
  const isLoggedIn =
    localStorage.getItem("token") && localStorage.getItem("user");

  return (
    <div className="flex justify-center">
      {isLoggedIn ? (
        <Anchor
          to={"/mangas"}
          className="text-white bg-blue-600 flex justify-center items-center gap-2.5 px-[55px] py-5 text-center text-xl font-medium leading-[95.187%] w-60"
        >
          Explore Mangas!
        </Anchor>
      ) : (
        <Anchor
          to={"/login"}
          className="text-white bg-blue-600 flex justify-center items-center gap-2.5 px-[55px] py-5 text-center text-xl font-medium leading-[95.187%] w-60"
        >
          {name}
        </Anchor>
      )}
    </div>
  );
}
