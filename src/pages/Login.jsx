import { useRef, useEffect, useState } from "react";
import { api, apiUrl, endpoints } from "../utils/api";
import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router-dom";
import { Link as Anchor } from "react-router-dom";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";
import axios from "axios";

export default function SignIn() {

  let inputEmail = useRef("");
  let inputPassword = useRef("");
  let navigate = useNavigate();
  console.log(inputEmail);

  async function handleFormSubmit(event) {
    event.preventDefault();

    let datos = {
      email: inputEmail.current.value,
      password: inputPassword.current.value,
    };

    try {
      let { data } = await api.post(apiUrl + endpoints.sign_in, datos);
      let token = data.response?.token;
      localStorage.setItem("token", JSON.stringify(data.response?.token));
      localStorage.setItem("user", JSON.stringify(data.response?.user));

      Swal.fire({
        icon: "success",
        title: "Logged In!",
      });
      navigate("/");
      console.log(data);
      console.log(token);

    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: error,
      });
    }
  }

  let clientID = '738973468424-j7rjiq0j4tp1o72uihh9pp65cdbvh2rl.apps.googleusercontent.com'

  useEffect(() => {
    let start = () => {
      gapi.auth2.init({
        clientId: clientID
      })
    }

    gapi.load("client:auth2", start)
  }, [])

  const onSuccess = (response) => {
    console.log(response)
    const { email, googleId } = response.profileObj;

    let data = {
      email: email,
      password: googleId,
    }
    console.log(data)
    
    axios.post("http://localhost:8080/api/auth/signin", data)
      .then(res => {
        console.log(res)
        localStorage.setItem('token', JSON.stringify(res.data.response.token));
        localStorage.setItem('user', JSON.stringify(res.data.response.user));

        Swal.fire({
          icon: "success",
          title: "Logged In!",
        });
        navigate("/");

      })
      .catch(error => {
        // console.log(err)
        Swal.fire({
          icon: "error",
          title: error,
        });
      })

  }
  
  let onFailure = () => {
    console.log("something went wrong");
  }

  return (
    <>
      <div className="flex h-[100vh]">
        <div className="w-[45vw] bg-[url('/src/assets/images/signin.png')] bg-cover hidden md:block "></div>
        <section className="flex flex-col w-[100vw] md:w-[55vw]  justify-center items-center ">
          <img src="/src/assets/images/minga.png" alt="" />
          <h1 className="text-3xl font-bold">
            Welcome <span className="text-blue-500">back</span>!
          </h1>
          <p className="text-center w-[25vw] h-[12vh]">
            Discover manga, manhua and manhwa, track your progress, have fun,
            read manga.
          </p>
          <form onSubmit={(e) => handleFormSubmit(e)} className="flex flex-col">
            <input
              onChange={() => console.log(inputEmail)}
              ref={inputEmail}
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder=" Email"
              className="p-3 mb-4  border-4 w-[25vw] h-[5vh] rounded-lg"
            />

            <input
              ref={inputPassword}
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="Password"
              className="p-3  border-4 w-[25vw] h-[5vh] rounded-lg"
            />

            <div>
              <input
                type="submit"
                value="Log in"
                className="cursor-pointer mt-4 w-[25vw] h-[8vh] rounded-lg bg-gradient-to-r from-[#4338CA] to-[#5E52F3] text-white text-center flex items-center justify-center font-bold text-lg"
                style={{
                  boxShadow: "4px 4px 8px rgba(249, 115, 22, 2)",
                }}/>
            </div>

            <div className='flex justify-center w-[25vw]'>
              <GoogleLogin className="flex space-x-2  w-[25vw] justify-center items-end hover:scale-105 mt-4 border-2 border-gray-300 text-gray-600 py-2 rounded-xl transition duration-100"
                clientId={clientID}
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_policy"}
            />
            </div>
          </form>
          <Anchor to="/register" className="mt-3">
            You don't have an account yet?{" "}
            <span className="text-blue-500">Sign up</span>
          </Anchor>
          <Anchor to="/" className="mt-3">
            Go back to <span className="text-blue-500">home page</span>
          </Anchor>
        </section>
      </div>
    </>
  );
}
