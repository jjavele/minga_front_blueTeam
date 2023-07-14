import React from 'react'

export default function MangaCards({title, cover_photo}) {
  return (
    <div className="flex flex-col md:flex-row  items-center px-4 gap-2">
      <h3>{title}</h3>
      <img className="" src={cover_photo} alt={title} />
    </div>
  );
};
