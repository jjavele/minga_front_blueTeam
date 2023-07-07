import React from "react";

export default function ButtonForm({text, onClick}) {
  return (
    <button
      onClick={onClick}
      type="submit"
      className="mt-2 w-[25vw] h-[8vh] rounded-lg bg-gradient-to-r from-[#4338CA] to-[#5E52F3] text-white font-bold text-lg "
      style={{
        boxShadow: "4px 4px 8px rgba(249, 115, 22, 2)",
      }}
    >
        {text}
    </button>
  );
}
