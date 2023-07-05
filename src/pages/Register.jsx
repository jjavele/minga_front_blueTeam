import React from "react";
import ButtonForm from "../components/ButtonForm";
import Swal from "sweetalert2";

export default function Register() {
  
  const handlerbutton = () => {
    Swal.fire({
      icon: "success",
      title: "User registered successfully!",
    });
  };

  return (
    <div className="h-screen w-full flex">
      <div className="h-screen w-[100vw] md:w-[50vw] flex flex-col items-center">
        <div className="flex flex-col items-center text-center mt-[4rem]">
          <img
            className="w-[11rem] mb-1"
            src="./src/assets/images/minga.png"
            alt=""
          />
          <h1 className="text-2xl font-bold">Welcome!</h1>
          <p className="w-[27rem] mb-[1rem]">
            Discover manga, manhua and manhwa, track your progress, have fun,
            read manga.
          </p>
        </div>
        <div>
          <legend className="text-sm">Email</legend>
          <input
            type="text"
            placeholder="example@outlook.com"
            className="p-3 mb-1 border-2 border-black w-[75vw] md:w-[25vw] h-[40px] rounded-lg"
          />
        </div>
        <div>
          <legend className="text-sm">Photo</legend>
          <input
            type="text"
            placeholder="Url"
            className="p-3 mb-1 border-2 border-black w-[75vw] md:w-[25vw] h-[40px] rounded-lg"
          />
        </div>
        <div>
          <legend className="text-sm">Password</legend>
          <input
            type="password"
            placeholder="6-15 characters"
            className="p-3 mb-1 border-2 border-black w-[75vw] md:w-[25vw] h-[40px] rounded-lg"
          />
        </div>
        <div className="flex">
        <label>
          <input type="checkbox" id="miCheckbox" /> Send notification to my
          email
        </label>
        </div>
        <ButtonForm onClick={handlerbutton} text="Sign up" />
        <div className="flex items-center justify-center p-3 mt-[1rem] border-2 border-black w-[75vw] md:w-[25vw] h-[3rem] rounded-lg">
          <img
            src="/src/assets/images/signup.png"
            alt=""
            className="h-[4vh]"
          />
        </div>
        <div className="text-center">
          <p className="mt-3">
            Already have an acount?{" "}
            <a href="#" className="text-blue-700">
              Log in
            </a>
          </p>
          <p className="mt-3">
            Go back to{" "}
            <a href="#" className="text-blue-700">
              home page
            </a>
          </p>
        </div>
      </div>
      <div className="hidden md:block">
        <img
          className="h-screen w-[50vw]"
          src="./src/assets/images/registerback.png"
          alt=""
        />
      </div>
    </div>
  );
}
