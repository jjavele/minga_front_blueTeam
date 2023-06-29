import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div>
        <div className="flex w-full justify-between p-5 absolute">
          <div>
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white transition duration-300 ease-in-out"
            >
              <img
                className="h-8 md:h-11 lg:h-16"
                src="/src/assets/images/menuicon.png"
                alt="menu_icon"
              />
            </button>
          </div>
          <div className="flex items-center">
            <img
              className="h-8 md:h-11 lg:h-16"
              src="/src/assets/images/mingalogo.png"
              alt="minga_logo"
            />
          </div>
        </div>
      </div>
      <div
        className={`fixed right-0 top-0 h-screen w-[14rem] bg-gray-900 transition-translate duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-[100%]"
        }`}
      >
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8"></div>
      </div>
    </nav>
  );
};

export default Navbar;
