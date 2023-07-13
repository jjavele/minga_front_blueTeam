import React, { useState, useEffect} from 'react'
import axios from 'axios';
import authorActions from '../redux/actions/me_authors';
import mangasActions from '../redux/actions/mangas_news';
import { useSelector, useDispatch } from 'react-redux';
import ToggleSwitch from '../components/Switch';
import moment from 'moment';

export default function Author() {

  let token = localStorage.getItem("token");
  let headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  //PARA LOS DATOS DEL AUTOR:
  let author = useSelector((store) => store.author.author);
  console.log(author);
  let dispatch = useDispatch();

  useEffect(() => {
    axios(`http://localhost:8080/api/authors/me`, headers)
      .then((res) => dispatch(authorActions.datos_author(res.data.profile)))
      .catch((err) => console.error(err));
  }, []);

  //PARA LOS DATOS DE LOS MANGAS:
  let mangas = useSelector((store) => store.mangas.mangas);
  console.log(mangas);

  let [toggle, setToggle] = useState(true);

  useEffect(() => {
    axios(`http://localhost:8080/api/mangas/news?sort=${toggle ? "desc" : "asc"}`, headers)
    .then((res) => dispatch(mangasActions.datos_mangas(res.data.mangas)))
    .catch((err) => console.error(err));
  }, [toggle]);



  function handleClick() {
    let [asc, desc] = useState(false)
  }
  //let [active, setActive] = useState(false);

  //console.log(author?.photo)

  let createdDate = mangas?.createdAt;
  let createDateFormated = moment(createdDate).format('DD-MM-YYYY')


  return (
    <div className="flex flex-col justify-center items-center text-[8vh] bg-[#EBEBEB] rounded">
        <div className="h-[30vh] w-[90vw] flex justify-evenly items-center pt-10">
            <img className="w-[10vh] h-[10vh] md:w-[15vh] md:h-[15vh] rounded-full object-fill object-center" src={author?.photo} alt="profile-picture" />
            <div className="">
                <p className="text-[3.5vw] md:text-[2.5vw] xl:text-[2vw] font-bold capitalize" >{author?.name}<spin> </spin>{author?.last_name} </p>
                <p className="text-[3.5vw] md:text-[2.5vw] xl:text-[2vw] flex items-center capitalize" ><spin><img src="/src/assets/images/location-marker.png" alt="location-marker" /></spin>{author?.city}</p>
                <p className="text-[3.5vw] md:text-[2.5vw] xl:text-[2vw] flex items-center" ><spin><img src="/src/assets/images/cake.png" alt="cake" /></spin>{createDateFormated}</p>
            </div >
            <img className="md:w-[3vw] " src="/src/assets/images/edit-button.png" alt="edit-button" />
        </div>
        <div className="flex min-h-[5vh] w-[80vw] border-t border-black border-solid justify-center items-center">
            <p className="text-[2vh] me-4">Old </p>
            <div className="flex items-center justify-center">
              <ToggleSwitch onClick={() => setToggle(!toggle)} />
            </div>
            <p className="text-[2vh] ms-4">New </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 min-h-[55vh] w-full">
          {mangas && mangas.map((manga) => (
          <div key={manga._id } className="flex items-center justify-between border-gray-400 py-2">
            <div className="flex flex-col">
              <img className="w-[40vw] h-[50vw] md:w-[25vw] md:h-[30vw] xl:w-[18vw] xl:h-[23vw] object-cover rounded-[15px] shadow-[0px_2px_7px_0px_rgba(0,0,0,0.15)]" src={manga.cover_photo} alt={manga} />
              <p className="text-[3.5vw] md:text-[2.5vw] xl:text-[1.5vw] font-bold">{manga.title}</p>
          </div>
        </div>
      ))}
            
        </div>
        <div className="min-h-[10vh] w-full flex justify-center items-center">
            <button className="flex justify-center items-center w-[40vw] md:w-[30vw] h-[5vh] rounded-full bg-gradient-to-r from-[#4338CA] to-[#5E52F3] text-white font-bold text-[2vh] "> Manage!</button>
        </div>
    </div>
  )
}