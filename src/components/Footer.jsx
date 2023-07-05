import React from "react";

export default function Footer() {
  return (
    <footer>
      <div>
        <img
          className="rounded-[0px_0px_50%_50%] h-[30vh] w-full"


          src="/src/assets/images/gohanvidel.png"

          alt="gohan videl goten trunks"
        />
      </div>
      <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-around lg:my-[4rem]">
        <div className="flex">
          <a
            href="#"
            className="text-sm m-2 mt-5 md:text-xl hover:underline lg:mr-[5rem]"
          >
            Home
          </a>
          <a href="#" className="text-sm m-2 mt-5 md:text-xl hover:underline">
            Mangas
          </a>
        </div>

        <img
          className="h-9 m-5 md:h-14"
          src="/src/assets/images/minga.png"
          alt="full_minga_logo"
        />
        <div className="flex flex-col items-center">
          <div className="flex ">
            <img
              className="h-6 w-6 m-3 md:h-8 md:w-8"
              src="/src/assets/images/icon_contact/facebook-black.png"
              alt="facebook_icon"
            />
            <img
              className="h-6 w-6 m-3 md:h-8 md:w-8"
              src="/src/assets/images/icon_contact/twitter-black.png"
              alt="twitter_icon"
            />
            <img
              className="h-6 w-6 m-3 md:h-8 md:w-8"
              src="/src/assets/images/icon_contact/vimeo-black.png"
              alt="vimeo_icon"
            />
            <img
              className="h-6 w-6 m-3 md:h-8 md:w-8"
              src="/src/assets/images/icon_contact/youtube-black.png"
              alt="youtube_icon"
            />
          </div>
          <div>
            <a
              href="#"
              className="flex justify-center items-center bg-blue-600 w-[14rem] h-10 rounded-3xl mb-5 hover:scale-110 transition-transform"
            >
              <p className="text-white">Donate</p>
              <img
                className="h-5 w-5"
                src="/src/assets/images/heart.png"
                alt="heart_icon"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="h-[2rem] w-[70%] border-t-2 border-black border-solid m-auto"></div>
    </footer>
  );
}
