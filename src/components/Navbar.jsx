import React, { useState } from "react";
import Drawer from "./Drawer";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div>
        <div className="flex w-full justify-between p-5 absolute">

            <button onClick={toggleNavbar} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-violet-400 focus:bg-gray-800 focus:text-white transition duration-300 ease-in-out">
              <img className="h-8 md:h-11 lg:h-16" src="/src/assets/images/menuicon.png" alt="menu_icon"/>
            </button>
        <div className="flex items-center">
            <img className="h-8 md:h-11 lg:h-16" src="/src/assets/images/mingalogo.png" alt="minga_logo"/>
          </div>
        </div>
      </div>{
        isOpen && <Drawer isOpen={isOpen} setIsOpen={setIsOpen}/>
      }
    </nav>
  );
};

export default Navbar;