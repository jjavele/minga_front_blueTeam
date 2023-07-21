import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import mangaActions from "../redux/actions/manga";
import axios from "axios";
import Button from "/src/components/Button";
import { Link as Anchor } from "react-router-dom";
import ModalComment from "../components/ModalComment";

export default function MangaDetail() {
  const { id, page } = useParams();
  const manga = useSelector((store) => store.manga.manga);
  const chapters = useSelector((store) => store.manga.chapters);
  console.log(chapters);
  const dispatch = useDispatch();
  let currentPage = Number(page);

  let token = localStorage.getItem("token");
  let headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/mangas/${id}`, headers)
      .then((res) => dispatch(mangaActions.datos_manga(res.data.manga)))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/api/chapters/?manga_id=${id}&page=${currentPage}`,
        headers
      )
      .then((res) => dispatch(mangaActions.chapters_manga(res.data)))
      .catch((err) => console.error(err));
  }, [page]);

  let [active, setActive] = useState(false);

  let [isModalOpen, setModalOpen] = useState(false)
  let [selectedChapterId, setSelectedChapterId] = useState(null)

  let handleOpenModal = (chapterId) => {
    setModalOpen(true);
    setSelectedChapterId(chapterId);
  }

  let handleCloseModal = () => {
    setModalOpen(false);
  }

  return (
    <div className=" flex flex-col lg:flex-row justify-center items-center  py-20 px-6 bg-gray-100 ">
      <div className="lg:w-[50vw] lg:flex lg:justify-center lg:items-center min-h-[50vh] ">
        <img className="" src={manga?.cover_photo} alt="" />
      </div>
      <div className="w-full lg:w-[50vw] lg:flex lg:justify-center lg:items-center lg:flex-col min-h-[80vh]  ">
        <h1 className="text-3xl pt-3 my-3">{manga?.title}</h1>
        <div className="flex justify-between items-center ">
          <h2 className="text-rose-400 w-28 h-10 p-2 border rounded-full text-center bg-[#FFE0DF]">
            {manga?.category_id.name}
          </h2>
          <h2 className="text-gray-400 text-xl">{manga?.author_id.name}</h2>
        </div>
        <div className="flex self-center  lg:justify-center lg:items-center my-3 w-16">
          <img src="/src/assets/images/👍.png" alt="" />
          <img src="/src/assets/images/👎️.png" alt="" />
          <img src="/src/assets/images/😮.png" alt="" />
          <img src="/src/assets/images/😍.png" alt="" />
        </div>
        <div className="w-72 h-14 border rounded-2xl text-center bg-white flex justify-around ">
          <div className="flex flex-col justify-center">
            <h3>4.5/5</h3>
            <p className="text-gray-400">Rating</p>
          </div>
          <div className="flex flex-col justify-center">
            <h3>265</h3>
            <p className="text-gray-400 justify-center">Chapters</p>
          </div>

          <div className="flex flex-col">
            <h3>Eng</h3>
            <p className="text-gray-400">Language</p>
          </div>
        </div>
        <div className="text-white my-5 w-72 h-9 rounded-full bg-gray-300 flex justify-around text-center">
          <button onClick={() => setActive(false)} className={`px-4 w-48 rounded-full ${!active ? "bg-blue-700" : "bg-transparent"}`}>
            Manga
          </button>
          <button onClick={() => setActive(true)} className={`px-4 w-48 rounded-full ${active ? "bg-blue-700" : "bg-transparent"}`}>
            Chapters
          </button>
        </div>
              {!active ? (
              <p>{manga?.description}</p>) : (
                <div className="w-full flex-col flex gap-4 justify-around my-6 lg:flex lg:flex-wrap">
                  {chapters.map((chapter, index) => (
                    <div className=" flex gap-4 justify-around my-6 lg:flex lg:flex-wrap" key={index}>
                      {" "}
                      <img src={chapter?.cover_photo} alt="" className="hover:focus:placeholder:marker w-20"/>
                      <div className="flex gap-4 flex-col">
                        <h3>{chapter?.title}</h3>
                        <div className="flex">
                          <button onClick={() => handleOpenModal(chapter._id)}>
                            {console.log(chapter?._id)}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"/>
                            </svg>{" "}
                          </button>
                          <p>{chapter?.number}</p>
                        </div>
                      </div>
                        <Anchor to={`/chapter/${id}/${chapter._id}/1`} className="text-center font-bold text-white rounded-full bg-blue-700 h-fit p-3">
                          {" "}
                          Read
                        </Anchor>
                      </div>
                  ))}
                  <ModalComment isOpen={isModalOpen} onClose={handleCloseModal} chapterId={selectedChapterId} />
                  <div className="flex justify-center">
                    <Button />
                  </div>
                </div>
              )}
      </div>
    </div>
  );
}
