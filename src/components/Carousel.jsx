import { useState, useEffect } from "react";
import axios from "axios";
import Arrow from "./Arrow";

export default function Carousel() {
  let iconLeft =
    "M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z";
  let iconRight =
    "M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z";

  const [categories, setCategories] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/categories")
      .then((res) => {
        setCategories(res.data.response);
      })
      .catch((err) => console.log(err));
  }, []);

  const next = () => {
    counter !== categories.length - 1 ? setCounter(counter + 1) : setCounter(0);
  };

  const prev = () => {
    counter !== 0 ? setCounter(counter - 1) : setCounter(categories.length - 1);
  };

  if (categories.length === 0) {
    return null;
  }

  const currentCategory = categories[counter];
  const { character_photo, cover_photo, description, name } = currentCategory;

  return (
    <div className="hidden lg:flex justify-center items-center w-full h-[100%]">
      <div className="flex text-white w-[90%] h-[25rem] rounded-md bg-[linear-gradient(45deg,#4338CA_0%,#5E52F3_100%)] justify-around gap-[15px] items-center p-2">
        <Arrow icon={iconLeft} onClick={prev} />
        <img
          className="h-[25rem] w-[20rem] relative bottom-[5rem]"
          src={categories[counter].character_photo}
          alt="footer-1"
        />
        <img
          className="h-[20rem] w-[14rem] relative bottom-[7rem]"
          src={categories[counter].cover_photo}
          alt="footer-2"
        />
        <div className="flex flex-col w-[40%] gap-4 ms-3">
          <p className="w-[90%] text-[3rem] capitalize">
            {categories[counter].name}:
          </p>
          <p className="w-[90%] text-[1rem] capitalize-first">
            {categories[counter].description}
          </p>
        </div>
        <Arrow icon={iconRight} onClick={next} />
      </div>
    </div>
  );
}
