import React from "react";

type ProgramaProps = {
  name: string;
  desc: string;
  image: string;
}

const Programa = ({ name, desc, image }: ProgramaProps) => {
  return (
    <div className="mb-4 border-b border-red-600">
      <img className="h-72 w-full" src={image} />
      <div className="py-4">
        <h1 className="font-bold text-xl text-red-600">{name}</h1>
        <p className="text-sm">{desc}</p>
      </div>
    </div>
  )
}

export default Programa;
