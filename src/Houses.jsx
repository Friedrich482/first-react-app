import React from "react";
import houses from "./housesData";
import { useState } from "react";
import Badge from "./assets/imgs/icons/badge.svg";
const Houses = () => {
  const [buyButton, setBuyButton] = useState("Buy Now !");
  return houses.map((house, index) => (
    <div
      key={index}
      className=" flex items-center flex-col border-8 border-amber-800 rounded-lg min-w-[450px] sm:w-5/12 gap-2 h-[530px] bg-indigo-950"
    >
      <img
        src={house.src}
        alt={`House n°${index + 1}`}
        className="size-72 aspect-square mt-8 border-solid border-4 border-red-600 rounded-lg w-11/12"
      ></img>
      <p className="text-center text-teal-100 w-5/6 text-xl">
        {house.description}
      </p>
      <p className="text-3xl text-black font-bold bg-red-600 w-full border-yellow-300 border-double border-t-4 border-b-4 text-center flex items-center justify-center">
        <img src={Badge} alt={`Price badge for the house n°${index + 1}`} className="size-8" />
        {house.price} $
      </p>
      <button
        type="button"
        className="bg-yellow-600 hover:scale-110 transition duration-1000 hover:border-white hover:border-2 hover:text-xl hover:text-black"
        onClick={(event) => {
          event.target.innerText === "Buy Now !"
            ? setBuyButton("Sold !")
            : setBuyButton("Buy Now !");
        }}
      >
        {buyButton}
      </button>
    </div>
  ));
};

export default Houses;
