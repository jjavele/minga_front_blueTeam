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
      <Anchor to={prev !== 0
          ? "/manga/" + id + "/" + (currentPage - 1)
          : "/manga/" + id + "/" + currentPage
        }>
        {prev !== 0
          ?
            <div className="hover:scale-[1.3] hover:text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          :
            <div className="text-gray-500 disabled ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
        }
      </Anchor>

      <Anchor to={next !== 0
          ? "/manga/" + id + "/" + (currentPage + 1)
          : "/manga/" + id + "/" + currentPage
        }> {next !== 0
          ?
          <button className="hover:scale-[1.3] hover:text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
          </button>
          :
          <button className="text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
          </button>
        }
      </Anchor>
    </div>
  );
}
