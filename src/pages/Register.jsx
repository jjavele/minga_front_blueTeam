import React, { useRef } from "react";
import ButtonForm from "../components/ButtonForm";
import Swal from "sweetalert2";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function Register() {

  let id = useParams();
  let inputEmail = useRef();
  let inputPhoto = useRef();
  let inputPassword = useRef();
  let navigate = useNavigate();

  function handleForm(element) {
    element.preventDefault();
    let data = {
      email: inputEmail.current.value,
      photo: inputPhoto.current.value,
      password: inputPassword.current.value,
    };
    {
      axios
        .post("http://localhost:8080/api/auth/register", data)
        .then((res) => {
          navigate("/login");
          Swal.fire({
            icon: "success",
            title: "User registered successfully!",
          });
        })
        .catch((error) => {
          const err = error.response.data.message.map(each => `<p>${each}</p>`).join("");
          Swal.fire({
            icon: "error",
            confirmButtonText: "Ok 🥺",
            html: err,
          });
        });
    }
    const token = localStorage.getItem("token");

    console.log(data);
    console.log(token);
  }
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
          <p className="w-[27rem] mb-[1rem] flex flex-wrap">
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
            ref={inputEmail}
          />
        </div>
        <div>
          <legend className="text-sm">Photo</legend>
          <input
            type="text"
            placeholder="Url"
            className="p-3 mb-1 border-2 border-black w-[75vw] md:w-[25vw] h-[40px] rounded-lg"
            ref={inputPhoto}
          />
        </div>
        <div>
          <legend className="text-sm">Password</legend>
          <input
            type="password"
            placeholder="6-15 characters"
            className="p-3 mb-1 border-2 border-black w-[75vw] md:w-[25vw] h-[40px] rounded-lg"
            ref={inputPassword}
          />
        </div>
        <div className="my-[8px]">
          <label className="">
            <input type="checkbox" id="miCheckbox" /> Send notification to my
            email
          </label>
        </div>
        <ButtonForm onClick={(e) => handleForm(e)} text="Sign up" />
        <div className="flex items-center justify-center p-3 my-[20px] border-2 border-black w-[75vw] md:w-[25vw] h-[3rem] rounded-lg">
          <img src="/src/assets/images/signup.png" alt="" className="h-[4vh]" />
        </div>
        <div className="text-center">
        <Link to="/login" className="mt-3">
        Already have an account?{" "}
            <span className="text-blue-500">Log In</span>
          </Link>
        </div>
          <Link to="/" className="mt-3">
            Go back to <span className="text-blue-500">home page</span>
          </Link>
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
