import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setChapterData,
  setNextChapterId,
  setPageCounter,
} from "../redux/actions/chapters";
import ArrowPage from "../components/Arrow";
import axios from "axios";
import Swal from "sweetalert";
import ModalComment from "../components/ModalComment";

const Page = () => {
  const [chapter, setChapter] = useState([]);
  const { id, page, manga_id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const pageCounter = useSelector((state) => state.chapters.pageCounter); //al estado almacenado del store
  const nextChapterId = useSelector((state) => state.chapters.nextChapterId);
  const number = useSelector((state) => state.chapters.number);
  const { title } = useSelector((state) => state.chapters);
  const [counter, setCounter] = useState(pageCounter);

  useEffect(() => {
    console.log(nextChapterId);
    axios
      .get(`http://localhost:8080/api/chapters/${id}?manga_id=${manga_id}`)
      .then((res) => {
        console.log(res.data);
        setChapter(res.data.chapter);
        dispatch(setNextChapterId(res.data.next));
        dispatch(
          setChapterData({
            number: res.data.chapter.order,
            title: res.data.chapter.title,
            manga_id: res.data.chapter.manga_id,
          })
        );
        setCounter(page - 1);
      })
      .catch((err) => console.log(err));
  }, [id, page]);

  useEffect(() => {
    dispatch(setPageCounter(counter + 1));
  }, []);

  const navigateToDetailPage = () => {
    navigate(`/chapter/${id}/detail`);
  };

  const navigateToNextChapter = () => {
    if (nextChapterId) {
      dispatch(setPageCounter(1));
      navigate(`/chapter/${nextChapterId}/${manga_id}/${1}`);
    } else {
      Swal({
        title: "Final chapter",
        text: "You have finished reading this manga!",
        icon: "success",
        button: "OK",
      });
    }
  };

  const handleClick = (side) => {
    if (pageCounter === 0 && side === "left") {
      navigateToDetailPage();
    } else if (pageCounter === chapter.pages.length - 1 && side === "right") {
      navigateToNextChapter();
    } else if (side === "left") {
      dispatch(setPageCounter(pageCounter - 1));
      navigate(`/chapter/${id}/${manga_id}/${pageCounter - 1}`);
    } else if (side === "right") {
      dispatch(setPageCounter(pageCounter + 1));
      navigate(`/chapter/${id}/${manga_id}/${pageCounter + 1}`);
    }
  };

  let iconLeft =
    "M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z";
  let iconRight =
    "M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z";

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
    <div className="h-screen flex flex-col items-center justify-center w-full gap-2">
      <div className="flex gap-1">
        <p className="font-semibold lg:text-xl">Cap n° {number}</p>
        <p className="font-semibold lg:text-xl">- {title}</p>
      </div>
      <div
        className="h-3/5 md:h-4/5 w-1/3 absolute left-0 cursor-pointer"
        onClick={() => handleClick("left")}
      />
      <button
        className="button absolute left-2"
        onClick={() => handleClick("left")}
      >
        <ArrowPage icon={iconLeft} alt="Previous" />
      </button>
      <img
        className="h-3/5 w-screen md:h-3/4 md:w-4/5 lg:h-2/3"
        src={chapter.pages && chapter.pages[counter]}
        alt="image page"
      />
      <button
        className="button absolute right-2"
        onClick={() => handleClick("right")}
      >
        <ArrowPage icon={iconRight} alt="Next" />
      </button>
      <div
        className="h-3/5 md:h-4/5 w-1/2 absolute right-0 cursor-pointer"
        onClick={() => handleClick("right")}
      />
      <div className="flex">
        <button onClick={() => handleOpenModal(chapter._id)}>
          {console.log(chapter?._id)}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"/>
          </svg>{" "}
        </button>
        <p className="text-center font-semibold lg:text-xl w-6 rounded-xl ps-4">
          {counter + 1}
        </p>
        <ModalComment isOpen={isModalOpen} onClose={handleCloseModal} chapterId={selectedChapterId} />


      </div>
    </div>
  );
};

export default Page;
