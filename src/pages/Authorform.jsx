import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Home from "./Home";
import axios from "axios";

export default function MangaForm() {
    let user = JSON.parse(localStorage.getItem("user"));
    let role = user.role;

    const [$photo, setProfileImageUrl] = useState('');
    const navigate = useNavigate();
    const cityCountry = useRef();
    const last_name = useRef();
    const photo = useRef();
    const name = useRef();
    const date = useRef();

    const handleProfileImageChange = (event) => {
        setProfileImageUrl(event.target.value);
    };

    //guardamos los datos en data, capturado de useRef
    const handleForm = (e) => {
        e.preventDefault();
        const cityCountryValue = cityCountry.current.value;
        const [city, country] = cityCountryValue.includes(",") ? cityCountryValue.split(",").map(value => value.trim()) : ["", ""];
        let data = {
            last_name: last_name.current.value,
            photo: photo.current.value,
            name: name.current.value,
            city: city.trim(),
            country: country.trim(),
        };

        let token = localStorage.getItem("token");
        let headers = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        axios
            .post("http://localhost:8080/api/authors/authors", data, headers)
            .then((res) => {
                console.log(res.data)
                navigate("/");
                const Toast = Swal.mixin({
                    toast: true,
                    position: "center",
                    showConfirmButton: false,
                    timer: 2000,
                    width: "400px",
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener("mouseenter", Swal.stopTimer);
                        toast.addEventListener("mouseleave", Swal.resumeTimer);
                    },
                });
                Toast.fire({
                    icon: "success",
                    title: "Your manga was successfully created",
                });
            })
            .catch((error) => {
                const Toast = Swal.mixin({
                    toast: true,
                    position: "center",
                    width: "400px",
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener("mouseenter", Swal.stopTimer);
                        toast.addEventListener("mouseleave", Swal.resumeTimer);
                    },
                });
                Toast.fire({
                    icon: "error",
                    title: error.response.data.message,
                });
            });
    };

    if (role == 1) {
        return (
            <div className="flex h-[100vh] ">
                <div className="w-[45vw] bg-[url('/src/assets/images/signin.png')] bg-cover hidden md:block"></div>
                <section className="flex flex-col w-[100vw] md:w-[55vw] justify-center items-center text-slate-300">
                    <div className="flex justify-center items-center mb-10 text-center text-black">
                        <h1 className="text-3xl -tracking-tight font-sans">New Author</h1>
                    </div>
                    <form
                        onSubmit={(e) => handleForm(e)}
                        className="flex flex-col items-center justify-center space-y-6 pt-14"
                    >
                        <input
                            ref={name}
                            type="text"
                            placeholder="Insert name"
                            className="w-80 appearance-none border-0  p-2 px-4 text-black border-b border-gray-500 bg-transparent focus:outline-none text-center"
                        />
                        <input
                            ref={last_name}
                            type="text"
                            placeholder="Insert last_name"
                            className="w-80 appearance-none border-0  p-2 px-4 text-black border-b border-gray-500 bg-transparent focus:outline-none text-center"
                        />
                        <input
                            ref={cityCountry}
                            type="text"
                            placeholder="Insert country"
                            className="w-80 appearance-none border-0  p-2 px-4 text-black border-b border-gray-500 bg-transparent focus:outline-none text-center"
                        />
                        <input
                            ref={date}
                            placeholder="28/12/2022"
                            className="w-80 appearance-none border-0  p-2 px-4 text-black border-b border-gray-500 bg-transparent focus:outline-none text-center"
                        />
                        <div>
                            <input
                                ref={photo}
                                onChange={handleProfileImageChange}
                                type="text"
                                placeholder="URL profile image"
                                className="w-80 appearance-none text-black border-0  p-2 px-4  border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0 text-center"
                            />
                        </div>
                        <button className="rounded-full bg-gradient-to-r from-[#4338CA] to-[#5E52F3]  p-2 w-[100%] max-md:w-[80%] py-4 text-white t-10 font-bold text-lg">
                            {" "}
                            Send
                        </button>
                    </form>
                </section>
            </div>
        );
    } else if (role != 1) {
        return <Home />;
    }
}
