import React from "react";
import { Link as Anchor } from "react-router-dom";

const isLoggedIn =
  localStorage.getItem("token") && localStorage.getItem("user");
export default function ButtonWelcome({ name }) {
  return (
    <div className="flex justify-center">
      {isLoggedIn ? (
        <Anchor
          to={"/mangas"}
          className="bg-white text-orange-600 flex justify-center items-center gap-2.5 px-[55px] py-5 text-center text-xl font-medium leading-[95.187%] rounded-md w-60"
        >
          Explore Mangas!
        </Anchor>
      ) : (
        <Anchor
          to={"/login"}
          className="bg-white text-orange-600 flex justify-center items-center gap-2.5 px-[55px] py-5 text-center text-xl font-medium leading-[95.187%] rounded-md w-60"
        >
          Lets Go!
        </Anchor>
      )}
    </div>
  );
}
