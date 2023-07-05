import { useEffect, useState, useRef } from "react";
import axios from "axios";
import NotAllow from "./NotAllow";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function MangaForm() {
    // Obtiene el valor del rol almacenado en el localStorage
    let user = JSON.parse(localStorage.getItem("user"));
    console.log(localStorage.getItem("user"));
    let role = user?.role; 

    let [categories, setCategories] = useState([]);

    useEffect(() => {
        axios("http://localhost:8080/api/categories")
            .then((res) => setCategories(res.data.response))
            .catch((err) => console.error(err));
    }, []);

    const option = () => {
        return categories.map(a => <option key={a._id} value={a._id}>{a.name}</option>);
    }

    const navigate = useNavigate()
    const title = useRef()
    const category = useRef()
    const description = useRef()
    const cover_photo = useRef()

    //guardamos los datos en data, capturado de useRef
    const handleForm = (e) => {
        e.preventDefault();
        let data = {
            title: title.current.value,
            category_id: category.current.value,
            description: description.current.value,
            cover_photo: cover_photo.current.value
        }

        axios.post("http://localhost:8080/api/mangas/mangas", data)
            .then(res => {
                navigate('/')
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'center',
                    showConfirmButton: false,
                    timer: 2000,
                    width: "400px",
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                Toast.fire({
                    icon: 'success',
                    title: 'Your manga was successfully created',
                })
            })
            .catch(error => {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'center',
                    width: "400px",
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                Toast.fire({
                    icon: 'error',
                    title: error.response.data.message
                })
            })
    }


    if ( role == 1 || role == 2) {
        return (
            <div className="flex h-[100vh] ">
                <div className="w-[45vw] bg-[url('/src/assets/images/crear.png')] bg-cover hidden md:block"></div>
                <section className="flex flex-col w-[100vw] md:w-[55vw] justify-center items-center text-slate-300">
                    <div className="flex justify-center items-center mb-10 text-center text-black">
                        <h1 className="text-3xl -tracking-tight font-sans">New Manga</h1>
                    </div>
                    <form onSubmit={(e) => handleForm(e)} className="flex flex-col items-center justify-center space-y-6 pt-14">
                        <input
                            ref={title}
                            type="text"
                            placeholder="Insert title"
                            className="w-80 appearance-none border-0  p-2 px-4 text-black border-b border-gray-500 bg-transparent focus:outline-none text-center"
                        />
                        <div>
                            <input
                                ref={cover_photo}
                                type="text"
                                placeholder="Insert cover photo"
                                className="w-80 appearance-none text-black border-0  p-2 px-4  border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0 text-center"
                            />
                        </div>
                        <div>
                            <select ref={category} className="w-80 border-b border-gray-500 p-2">
                                <option>Select category</option>
                                {option()}
                            </select>
                        </div>
                        <div>
                            <input
                                type="text"
                                ref={description}
                                placeholder="Insert description"
                                className="w-80 appearance-none  border-0  p-2 px-4 text-black border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0 mb-20 text-center"
                            />
                        </div>
                        <button className="rounded-full bg-gradient-to-r from-[#4338CA] to-[#5E52F3]  p-2 w-[100%] max-md:w-[80%] py-4 text-white t-10 font-bold text-lg" >
                            {" "}
                            Send
                        </button>
                    </form>
                </section>
            </div>
        );
    } else if (role != 1 || role != 2) {
        return <NotAllow />;
    }
}
