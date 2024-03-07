import React from "react";
const Houses = ({houses}, badge) => {
  return houses.map(({id, src, description, price}) => (
    <div
      key={id}
      className=" flex items-center flex-col border-8 border-amber-800 rounded-lg min-w-[450px] sm:w-5/12 gap-2 h-[530px] bg-indigo-950"
    >
      <img
        src={src}
        alt={`House n°${id + 1}`}
        className="size-72 aspect-square mt-8 border-solid border-4 border-red-600 rounded-lg w-11/12"
      ></img>
      <p className="text-center text-teal-100 w-5/6 text-xl">
        {description}
      </p>
      <p className="text-3xl text-black font-bold bg-red-600 w-full border-yellow-300 border-double border-t-4 border-b-4 text-center flex items-center justify-center">
        <img src={badge} alt={`Price badge for the n°${id + 1}`} className="size-8" />
        {price} $
      </p>
      {/* <button
        type="button" key={id}
        className="bg-yellow-600 hover:scale-110 transition duration-1000 hover:border-white hover:border-2 hover:text-xl hover:text-black"
        onClick={(event) => {
          event.target.innerText === "Buy Now !"
            ? setBuyButton("Sold !")
            : setBuyButton("Buy Now !");
        }}
      >
        {buyButton}
      </button> */}
    </div>
  ));
};

export default Houses;
