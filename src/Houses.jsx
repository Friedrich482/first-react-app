import React from "react";
import houses from "./housesData";
const Houses = () => {
  return houses.map((house, index) =>(
    <div key={index} className="flex items-center justify-center flex-col border-2 border-teal-500 rounded-md w-8/12">
      <img src={house.src} alt ={`House n°${index + 1}`} className="size-80 mt-8"></img>
      <p className="text-center">{house.description}</p>
      <p>{house.price} $</p>
    </div>
  ))
};

export default Houses;
