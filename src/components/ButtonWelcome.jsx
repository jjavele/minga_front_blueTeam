import React from 'react'

export default function ButtonWelcome({name}) {
  return (
    <div className="flex justify-center">
          <a
            href="#"
            className="bg-gradient-to-r from-[#4338CA] to-[#5E52F3]  w-[10rem] h-10 rounded-3xl lg:w-[10rem] flex items-center justify-center lg:hover:scale-110 lg:rounded-[6px]"
          >
            <p className="text-white lg:hidden">Started</p>
            <p className="text-white hidden lg:block">Let's Go!</p>
          </a>
        </div>

  )
}

