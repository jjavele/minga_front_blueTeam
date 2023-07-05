import React from "react";
import ButtonWelcome from "../components/ButtonWelcome";

export default function NotAllow() {
  const consolasFont = {
    fontFamily: "Consolas, mono",
  };

  return (
    <div className="h-[100vh] w-full flex justify-center items-center">
      <div className="bg-violet-400 h-[70vh] w-[50rem] flex justify-start items-center flex-col p-6 border-black border-2 rounded-3xl">
        <div>
          <img
            className="h-[10rem] border-dashed border-black border-2 m-[2rem] mb-[4rem] rounded-2xl"
            src="../src/assets/images/gif/brook-yohoho.gif"
            alt="yohohohoho"
          />
        </div>
        <div className="flex flex-col text-center mb-[2rem] ">
          <h1 className="font-serif mb-[5px]">Oops! Something went wrong!🥺</h1>
          <h2 className="font-serif" style={consolasFont}>
            The page does not exist or you do not have access to it
          </h2>
        </div>
        <div>
          <ButtonWelcome to="/signin" name="Sign In"/>
        </div>
      </div>
    </div>
  );
}
