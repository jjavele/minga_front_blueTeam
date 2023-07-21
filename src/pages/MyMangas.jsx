import React, { useState, useEffect } from "react";
import { api, apiUrl, endpoints } from "../utils/api";
import { useDispatch, useSelector, useStore } from "react-redux";
import inputActions from "../redux/actions/mangas";
import { Link as Anchor } from "react-router-dom";
import ModalMangas from "../components/ModalMangas";

export default function MyMangas() {
  const dispatch = useDispatch();
  const [mangas, setMangas] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(undefined);
  const [stateModal, setStateModal] = useState(false);
  const text = useSelector((state) => state.check.text);
  const userId = JSON.parse(localStorage.getItem("user"))._id;

  const getMangas = async () => {
    try {
      let token = localStorage.getItem("token");
      let headers = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      let { data } = await api.get(
        apiUrl + endpoints.get_me + `?title=${text}&page=${page}`,
        headers
      );
      setMangas(data.mangas);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.log(error);
    }
  };

  const PrevButton = (props) => {
    const { page } = props;
    if (page !== 1) {
      return (
        <button
          {...props}
          className="self-center text-white font-bold text-lg hover:scale-[1.1]"
        >
          <strong>{"<<<"}</strong>
        </button>
      );
    } else {
      return (
        <button
          {...props}
          className="self-center text-gray-400 font-bold text-lg hover:scale-[1.1]"
          disabled
        >
          <strong>{"<<<"}</strong>
        </button>
      );
    }
  };

  const NextButton = (props) => {
    const { page, totalPages } = props;
    if (page !== totalPages) {
      return (
        <button
          {...props}
          className="self-center text-white font-bold text-lg hover:scale-[1.1]"
        >
          <strong>{">>>"}</strong>
        </button>
      );
    } else {
      return (
        <button
          {...props}
          className="self-center text-gray-400 font-bold text-lg hover:scale-[1.1]"
          disabled
        >
          <strong> {">>>"}</strong>
        </button>
      );
    }
  };

  const goToPrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const goToNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    getMangas();
  }, [text, page]);

  console.log(mangas);

  return (
    <div className="flex flex-col min-h-screen bg-[url('/src/assets/images/mymangasbackground.png')] bg-contain bg-no-repeat">
      <div className="flex flex-col items-center mt-[10rem]">
        <h1 className="text-white text-5xl font-bold m-[5rem] p-2">
          Own Mangas
        </h1>
        <div className="min-h-[27rem] w-[90%] bg-white rounded-2xl items-center justify-center text-center mb-[2rem]">
          <div className="justify-center items-center flex flex-wrap gap-[5rem]">
            <input
              onKeyUp={(e) => {
                dispatch(inputActions.changeText(e.target.value));
                console.log(e.target.value);
              }}
              type="search"
              className="p-3 h-10 w-full m-5 rounded-lg text-center border-solid border-4 border-black"
              placeholder="Find your manga here"
            />
            <Anchor
              to="/manga-form"
              className="h-[14rem] w-[25rem] flex justify-center items-center border-solid rounded-xl border-green-500 border-l-2 shadow-2xl hover:scale-[1.1]"
            >
              <img
                className="h-[6rem] "
                src="../../src/assets/images/add_icon.jpg"
              />
            </Anchor>
            {mangas?.map((manga) => (
              <div
                key={manga.title}
                className="h-[14rem] w-[25rem] flex justify-end border-solid rounded-xl border-blue-500 border-l-2 shadow-2xl "
              >
                <div className="w-[50%] flex flex-col text-center items-center justify-center">
                  <div className="flex">
                    <Anchor to="/chapter-form/:id_manga">
                      <img
                        src="/src/assets/images/add.png"
                        className="h-6 m-1 p-1 border-solid border-black border-2 rounded-full"
                      />
                    </Anchor>
                    <Anchor to="/edit/:id_manga">
                      <img
                        src="/src/assets/images/edit.png"
                        className="h-6 m-1 p-1 border-solid border-black border-2 rounded-full"
                      />
                    </Anchor>
                  </div>
                  <br />
                  <Anchor
                    to={`/mangas/:page`}
                    className="text-lg hover:scale-[1.1]"
                  >
                    {manga.title}
                  </Anchor>
                  <p className="text-gray-400 capitalize">
                    {manga.category_id.name}
                  </p>
                  <br />
                  <Anchor className="text-center">
                    <button
                      onClick={() => {
                        setStateModal(!stateModal);
                      }}
                      className="h-[2rem] w-[4rem] bg-blue-500 rounded-full shadow-sm hover:scale-[1.1] m-2"
                      style={{
                        fontSize: "20px",
                        color: "white",
                        borderRadius: "50px",
                      }}
                    >
                      Edit
                    </button>

                    <button
                      className="h-[2rem] w-[5rem] bg-red-500 rounded-full shadow-sm hover:scale-[1.1] m-2"
                      style={{
                        fontSize: "20px",
                        color: "white",
                        borderRadius: "50px",
                      }}
                    >
                      Delete
                    </button>
                  </Anchor>
                </div>
                <Anchor to={`/mangas/:page`} className="w-[50%]">
                  <img
                    src={manga.cover_photo}
                    className="w-full h-full max-h-max rounded-[30%_0px_0_30%]"
                  />
                </Anchor>
              </div>
            ))}
            {mangas?.length === 0 && (
              <div className="m-[4rem]">
                <p className="text-white bg-gradient-to-r from-blue-400 to-pink-500 rounded-full p-3 inline-block">
                  Gomenasai!, I didn't find results
                </p>
                <img
                  className="h-[10rem]"
                  src="/src/assets/images/gif/noresults.gif"
                />
              </div>
            )}
          </div>
        </div>
        <div className="flex h-[3rem] w-[30rem] m-4 justify-around bg-gradient-to-r from-blue-400 to-pink-400 rounded-3xl">
          <PrevButton page={page} onClick={goToPrevPage}></PrevButton>
          <img className="" src="../src/assets/images/prevchan.webp" />
          <div className="w-[15rem]"></div>
          <img className="" src="../src/assets/images/nextchan.webp" />
          <NextButton
            page={page}
            totalPages={totalPages}
            onClick={goToNextPage}
          ></NextButton>
        </div>
        <ModalMangas state={stateModal} change={setStateModal}></ModalMangas>
      </div>
    </div>
  );
}
