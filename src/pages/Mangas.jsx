import React, { useState, useEffect } from "react";
import { api, apiUrl, endpoints } from "../utils/api";
import { useDispatch, useSelector, useStore } from "react-redux";
import inputActions from "../../redux/actions/mangas";

const capitalize = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export default function Mangas() {
  const store = useStore();
  const dispatch = useDispatch();
  const [mangas, setMangas] = useState([]);
  const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState("");
  const [categoriesSelected, setCategoriesSelected] = useState([]);

  const state = store.getState();
  console.log(state);
  const checks = useSelector((state) => state.checks);
  const text = useSelector((state) => state.text);
  console.log(checks);
  const dispatchFilters = (check) => {
    let payload = [];
    if (!checks.includes(check)) {
      payload = [...checks, check];
      dispatch(inputActions.changeChecks([...checks, check]));
    } else {
      payload = checks.filter((category) => category !== check);
    }
    dispatch(inputActions.changeChecks(payload));
  };

  const getMangas = async () => {
    try {
      let { data } = await api.get(
        apiUrl + endpoints.read_mangas + `?title=${text}&category_id=${checks}`
      );
      setMangas(data.mangas);
    } catch (error) {
      console.log(error);
    }
  };

  const getCategories = async () => {
    try {
      let { data } = await api.get(apiUrl + endpoints.read_categories);
      setCategories(data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  const resetFilters = () => {
    setCategoriesSelected([]);
    dispatch(inputActions.changeChecks([]));
  };

  useEffect(() => {
    getMangas();
    getCategories();
  }, [text, checks]);

  return (
    <div className="flex flex-col min-h-screen bg-[url('/src/assets/images/backgroundmangas.png')] bg-contain bg-no-repeat justify-center">
      <div className="flex flex-col items-center mt-[15rem]">
        <h1 className="text-white text-5xl font-bold">Mangas</h1>
        <br />
        <br />
        <br />
        <input
          onKeyUp={(e) => {
            dispatch(inputActions.changeText(e.target.value));
            console.log(e.target.value);
          }}
          type="search"
          className="pl-3 h-10 w-1/2 rounded-lg"
          placeholder="Find your manga here"
        />
        <br />
        <br />
        <br />
        <br />
        <div className="min-h-[27rem] w-[90%] bg-white rounded-2xl items-center justify-center text-center mb-[2rem]">
          <div className="flex h-[6rem] justify-center items-center gap-4">
            <button
              onClick={() => resetFilters()}
              className="py-1 px-4 rounded-full text-white hover:scale-[1.1]"
              style={{
                borderRadius: "50px",
                background: "gray",
              }}
            >
              All
            </button>

            {categories.map((category) => (
              <button
                key={category._id}
                onClick={() => dispatchFilters(category._id)}
                style={{
                  backgroundColor: checks.includes(category._id)
                    ? category.hover
                    : category.color,
                }}
                className="py-1 px-4 rounded-full text-white hover:scale-[1.1]"
              >
                {capitalize(category.name)}
              </button>
            ))}
          </div>
          <div className="justify-center items-center flex flex-wrap gap-[5rem]">
            {mangas.map((manga) => (
              <div
                key={manga.title}
                className="h-[14rem] w-[25rem] flex justify-end border-solid rounded-xl border-blue-500 border-l-2 hover:scale-[1.1] shadow-2xl "
              >
                <div className="w-[50%] flex flex-col text-center items-center justify-center">
                  <p className="text-xl">{manga.title}</p>
                  <br />
                  <p className="text-gray-400">
                    {capitalize(manga.category_id?.name)}
                  </p>
                  <br />
                  <br />
                  <a href={`/manga/${manga._id}`} className="text-center">
                    <button
                      className="h-[2.5rem] w-[6rem] bg-green-500 rounded-full shadow-sm hover:scale-[1.2]"
                      style={{
                        fontSize: "20px",
                        color: "#00BA88",
                        borderRadius: "50px",
                        background: "#D1FBF0",
                      }}
                    >
                      Read
                    </button>
                  </a>
                </div>
                <img
                  className="w-[50%] max-h-max rounded-[30%_0px_0_30%]"
                  src={manga.cover_photo}
                  alt={manga.title}
                />
              </div>
            ))}
            {mangas.length === 0 && (
              <div className="m-[4rem]">
                <p className="text-white bg-gradient-to-r from-blue-400 to-pink-500 rounded-full p-3 inline-block">
                  Gomenasai!, I didn't find results
                </p>
                <img
                  className="h-[10rem]"
                  src="/src/assets/images/gif/noresults.gif"
                  alt=""
                />
              </div>
            )}
          </div>
        </div>
        <div className="flex h-[3rem] w-[30rem] m-4 justify-around bg-gradient-to-r from-blue-400 to-pink-400 rounded-3xl">
          <p className="self-center text-white font-bold text-lg">Prev</p>
          <img className="" src="../src/assets/images/prevchan.webp" />
          <div className="w-[15rem]"></div>
          <img className="" src="../src/assets/images/nextchan.webp" />
          <p className="self-center text-white font-bold text-lg">Next</p>
        </div>
      </div>
    </div>
  );
}
