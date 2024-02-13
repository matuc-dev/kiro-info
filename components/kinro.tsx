import React from "react";
import { HoverCard } from "./ui/hover-card";
import { Hover } from "./hoverCard";

export const Kinro = async() => {
  const res = await fetch(`https://kinro-api.vercel.app/`);
  const jsons = await res.json();
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center h-screen gap-10 font-noto">
      <div className="flex flex-col mb-10 gap-1">
        <h1 className="text-5xl font-black">{jsons.title}</h1>
        <h2 className="text-xl font-medium">{jsons.broadcastStartTime}</h2>
        <p>見たい！ {jsons.mitai}</p>
        <h3 className="flex absolute mt-[120px] md:mt-[150px] font-thin text-zinc-400 font-pop"><Hover /></h3>
      </div>
      
      <img className=" rounded-md w-[300px] md:w-[400px]" src={jsons.imageUrl} />

    </div>
  );
}


