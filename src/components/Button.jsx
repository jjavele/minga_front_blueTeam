import React from "react";

import { Link as Anchor } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function MangaBtns() {
  let currentPage = Number(useParams().page);
  let { id } = useParams();
  console.log(useParams());
  console.log(currentPage);
  const chapters = useSelector((store) => store.manga.chapters);
  const { prev, next } = useSelector((store) => store.manga);

  return (
    <div className="flex gap-6">
      <Anchor
        className={
          prev !== 0
            ? "text-white bg-blue-700 w-24  px-6 rounded"
            : "text-white bg-gray-700 w-24  px-6 rounded"
        }
        to={
          prev !== 0
            ? "/manga/" + id + "/" + (currentPage - 1)
            : "/manga/" + id + "/" + currentPage
        }
      >
        Prev
      </Anchor>

      <Anchor
        className={
          next !== 0
            ? "text-white bg-blue-700 w-24  px-6 rounded"
            : "text-white bg-gray-700 w-24  px-6 rounded"
        }
        to={
          next !== 0
            ? "/manga/" + id + "/" + (currentPage + 1)
            : "/manga/" + id + "/" + currentPage
        }
      >
        Next
      </Anchor>
    </div>
  );
}
