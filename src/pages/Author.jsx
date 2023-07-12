import React, { useState, useEffect} from 'react'
import axios from 'axios';
import MangaCards from '../components/MangaCards';



export default function Author() {

  let [mangas, setMangas] = useState([])
  console.log(mangas)
  let [author, setAuthor] = useState([])
  let [title, setTitle] = useState("")

  let token = localStorage.getItem('token')
      let headers = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      };

  const getMangas = async () => {
    try {
      let { data } = await axios.get('http://localhost:8080/api/mangas/news', headers)
      setMangas(data.mangas)
    } catch (error) {
      console.log(error)
    }
  }
  const getAuthor = async () => {
    try {
      let { data } = await axios.get('http://localhost:8080/api/authors/me', headers)
      setAuthor(data)
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(()=>{
    getMangas()
    getAuthor()
  }, [])
    
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center text-[8vh] bg-[#EBEBEB] rounded">
        <div className="h-[30vh] w-[90vw] flex justify-evenly items-center pt-10">
            <img src="/src/assets/images/profile-picture.png" alt="profile-picture" />
            <div className="">
                <p className="text-[3.5vw] font-bold" >Lucas Ezequiel Silva</p>
                <p className="text-[3.5vw] flex items-center" ><spin><img src="/src/assets/images/location-marker.png" alt="location-marker" /></spin>Caseros, Buenos Aires</p>
                <p className="text-[3.5vw] flex items-center" ><spin><img src="/src/assets/images/cake.png" alt="cake" /></spin>16/02/2000</p>
            </div>
            <img src="/src/assets/images/edit-button.png" alt="" />
        </div>
        <div className="flex min-h-[5vh] w-[80vw] border-t border-black border-solid justify-center items-center">
            <p className="text-[2vh] me-4">New </p>
            <img className="mt-2" src="/src/assets/images/Switch.png" alt="switch" />
            <p className="text-[2vh] ms-4">Old </p>
        </div>
        <div className="h-[55vh] w-full ">
            
        </div>
        <div className="h-[10vh] w-full flex justify-center items-center">
            <button className="flex justify-center items-center w-[40vw] h-[5vh] rounded-full bg-gradient-to-r from-[#4338CA] to-[#5E52F3] text-white font-bold text-[2vh] "> Manage!</button>
        </div>
    </div>
  )
}

/*
<div className="h-[100vh] flex flex-col justify-center items-center text-[8vh] bg-[#EBEBEB] rounded">
        <div className="h-[30vh] w-[90vw] flex justify-evenly items-center pt-10">
            <img src="/src/assets/images/profile-picture.png" alt="profile-picture" />
            <div className="">
                <p className="text-[2vh] font-bold" >Lucas Ezequiel Silva</p>
                <p className="text-[2vh] flex items-center" ><spin><img src="/src/assets/images/location-marker.png" alt="location-marker" /></spin>Caseros, Buenos Aires</p>
                <p className="text-[2vh] flex items-center" ><spin><img src="/src/assets/images/cake.png" alt="cake" /></spin>16/02/2000</p>
            </div>
            <img src="/src/assets/images/edit-button.png" alt="" />
        </div>
        <div className="flex min-h-[5vh] w-[80vw] border-t border-black border-solid justify-center items-center">
            <p className="text-[2vh] me-4">New </p>
            <img className="mt-2" src="/src/assets/images/Switch.png" alt="switch" />
            <p className="text-[2vh] ms-4">Old </p>
        </div>
        <div className="h-[55vh] w-full ">
            <div className="">
            {
                mangas.map((manga) => (
                    <MangaCards key={manga._id} title={manga.title} cover_photo={manga.cover_photo}/>
                ))
            }
            </div> 
        </div>
        <div className="h-[10vh] w-full flex justify-center items-center">
            <button className="flex justify-center items-center w-[40vw] h-[5vh] rounded-full bg-gradient-to-r from-[#4338CA] to-[#5E52F3] text-white font-bold text-[2vh] "> Manage!</button>
        </div>
    </div>
    */
