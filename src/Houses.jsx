import React from "react";

const Houses = ({ houses, badge, houseSold, handleClick }) => {
  return houses.map(({ id, src, description, price }, index) => (
    <div
      key={id}
      className="flex items-center flex-col border-8 border-amber-800 rounded-lg w-[450px] gap-2 h-[530px] bg-indigo-950"
    >
      <img
        src={src}
        alt={`House n°${id + 1}`}
        className="size-72 aspect-square mt-8 border-solid border-4 border-red-600 rounded-lg w-11/12"
      />
      <p className="text-center text-teal-100 w-5/6 text-xl">{description}</p>
      <p className="text-3xl text-white font-bold bg-red-600 w-full border-yellow-300 border-double border-t-4 border-b-4 text-center flex items-center justify-center">
        <img
          src={badge}
          alt={`Price badge for the n°${id + 1}`}
          className="size-8"
        />
        {price} $
      </p>
      <button
        type="button"
        className="bg-yellow-600 hover:scale-110 transition duration-1000 hover:border-white hover:border-2 hover:text-xl hover:text-black"
        onClick={() => handleClick(index)}
      >
        {houseSold[index] ? "Already sold" : "Buy now"}
      </button>
    </div>
  ));
};

export default Houses;
