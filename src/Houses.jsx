import React from "react";
import houses from "./housesData";
const Houses = () => {
  return houses.map((house, index) => (
    <div
      key={index}
      className=" flex items-center flex-col border-8 border-teal-700 rounded-lg min-w-[450px] sm:w-10/12 gap-2 h-[640px]"
    >
      <img
        src={house.src}
        alt={`House n°${index + 1}`}
        className="size-96 aspect-square mt-8 border-solid border-4 border-red-500 rounded-lg"
      ></img>
      <p className="text-center text-yellow-500 w-5/6 text-xl">{house.description}</p>
      <p className="text-3xl text-black font-bold bg-red-600 w-full border-yellow-300 border-double border-t-4 border-b-4 text-center">{house.price} $</p>
      <button type="button" className="bg-yellow-600 hover:scale-110 transition duration-1000 hover:border-white hover:border-2 hover:text-xl hover:text-black">Buy Now !</button>
    </div>
  ));
};

export default Houses;
