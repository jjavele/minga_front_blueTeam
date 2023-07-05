import { useRef } from "react";
import { api, apiUrl, endpoints } from "../utils/api";
import { Navigate, useNavigate } from "react-router-dom";
export default function SignIn() {
  let inputEmail = useRef("");
  let inputPassword = useRef("");
  async function handleFormSubmit(event) {
    event.preventDefault();

    let datos = {
      email: inputEmail.current.value,
      password: inputPassword.current.value,
    };
    try {
      let { data } = await api.post(apiUrl + endpoints.sign_in, datos);
      localStorage.setItem("token", data.response?.token);
      localStorage.setItem("user", JSON.stringify(data.response?.user));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/");
  };
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
          <form
            onSubmit={handleFormSubmit}
            className="flex flex-col"
            action="#"
            method="POST"
          >
            <fieldset>
              <legend
                className="self-start mt-15 h-2 relative z-10 bg-white ms-5"
                htmlFor="email"
              >
                Email
              </legend>
              <input
                ref={inputEmail}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="p-3 mb-4  border-4 w-[25vw] h-[5vh] rounded-lg"
              />
            </fieldset>
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

            <button
              onClick={handleButtonClick}
              type="submit"
              className="mt-4 w-[25vw] h-[8vh] rounded-lg bg-gradient-to-r from-[#4338CA] to-[#5E52F3] text-white text-center flex items-center justify-center font-bold text-lg"
            >
              Sign In
            </button>

            <div className=" flex items-center justify-center p-3 mt-4 border-4 w-[25vw] h-[5vh] rounded-lg">
              <img
                src="/src/assets/images/Group.png"
                alt=""
                className="h-[4vh] "
              />
            </div>
          </form>
          <p className="mt-3">
            you don&apos;t have an account yet?{" "}
            <span className="text-blue-500">Sign up</span>
          </p>
          <p className="mt-3">
            Go back to <span className="text-blue-500">home page</span>
          </p>
        </section>
      </div>
    </>
  );
}
