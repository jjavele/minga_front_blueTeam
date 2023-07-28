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
  //console.log(chapters);
  const dispatch = useDispatch();
  let currentPage = Number(page);

  let token = JSON.parse(localStorage.getItem("token"));
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
      <div className="flex flex-col object-cover justify-center lg:w-[50vw] lg:flex lg:justify-center lg:items-center min-h-[40vh] ">
        <img className="rounded-xl h-[50vh] object-contain" src={manga?.cover_photo} alt="" />
        <h1 className="text-3xl my-3 self-center">{manga?.title}</h1>
        <div className="flex w-[80vw] lg:w-[40vw] justify-between items-center">
          <h2 className="text-rose-400 w-[20vw] lg:w-[10vw] border rounded-full text-center bg-[#FFE0DF]">
            {manga?.category_id.name}
          </h2>
          <h2 className="text-gray-400 text-xl">{manga?.author_id.name}</h2>
        </div>
        <div className="flex w-[60vw] lg:w-[30vw] pt-20 justify-around my-3 self-center">
          <img className="w-[15vw] lg:w-[6vw] " src="/src/assets/images/👍.png" alt="" />
          <img className="w-[15vw] lg:w-[6vw] " src="/src/assets/images/👎️.png" alt="" />
          <img className="w-[15vw] lg:w-[6vw] " src="/src/assets/images/😮.png" alt="" />
          <img className="w-[15vw] lg:w-[6vw] " src="/src/assets/images/😍.png" alt="" />
        </div>
        <div className="w-[80vw] lg:w-[40vw] h-14 border rounded-2xl text-center bg-white flex justify-around ">
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
        <div className="text-white my-5 w-[80vw] lg:w-[40vw] h-9 rounded-full bg-gray-300 flex justify-around text-center mt-10">
          <button onClick={() => setActive(false)} className={`px-4 w-[40vw] rounded-full ${!active ? "bg-blue-700" : "bg-transparent"}`}>
            Manga
          </button>
          <button onClick={() => setActive(true)} className={`px-4 w-[40vw] rounded-full ${active ? "bg-blue-700" : "bg-transparent"}`}>
            Chapters
          </button>
        </div>
      </div>
      <div className="flex flex-col w-full items-center justify-around lg:w-[50vw] lg:flex lg:justify-center lg:items-center lg:flex-col min-h-[60vh]  ">
              {!active ? (
              <p className="font-sans text-justify w-[80vw] lg:w-[40vw] ">{manga?.description}</p>) : (
                <div className="w-full flex-col flex gap-4 justify-around my-6 lg:flex lg:flex-wrap">
                  {chapters?.map((chapter, index) => (
                    <div className=" flex gap-4 justify-around my-3 lg:flex lg:flex-wrap" key={index}>
                      {" "}
                      <img src={chapter?.cover_photo} alt="" className="hover:focus:placeholder:marker w-[20vw] h-[20vw] lg:w-[10vw] lg:h-[10vw] object-cover"/>
                      <div className="flex gap-4 flex-col items-center justify-around">
                        <h3>{chapter?.title}</h3>
                        <div className="flex ">
                          <button onClick={() => handleOpenModal(chapter._id)}>
                            {console.log(chapter?._id)}
                            <img className="w-[6vw] md:w-[2vw] " src="/src/assets/images/chat.png" alt="chat" />{" "}
                          </button>
                          <p>{chapter?.number}</p>
                        </div>
                      </div>
                        <Anchor to={`/chapter/${id}/${chapter._id}/1`} className="text-center w-[15vw] font-bold text-white rounded-full bg-blue-700 h-fit p-3 self-center">
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
