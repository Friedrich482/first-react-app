import { useState } from "react";
import LocationIcon from "../../assets/imgs/icons/location.svg";
import Badge from "../../assets/imgs/icons/badge.svg";

export interface HouseProps{
  src: string;
  id: number; 
  price: number;
  location: string;
}

const House = ({ src, id, price, location }: HouseProps) => {
  const [houseSold, setHouseSold] = useState(false);

  const handleSoldButtonClick = (previousState: boolean) => {
    if (!previousState) {
      setHouseSold(!previousState);
    }
  };
  return (
    <div
      key={id}
      className="flex min-h-[500px] min-w-72 max-w-80 transform flex-col items-center gap-3 rounded-lg border-8 border-amber-800 bg-indigo-950 duration-700 hover:scale-110 hover:shadow-md hover:shadow-black hover:outline hover:outline-black"
    >
      <img
        src={src}
        alt={`House n°${id + 1}`}
        className="mt-8 aspect-square size-72 w-11/12 rounded-lg border-4 border-solid border-red-600"
      />
      <div className="flex w-5/6 items-center justify-center text-center text-xl text-white">
        <img src={LocationIcon} alt="LocationIcon" className="size-6 w-2/6" />
        <p className="w-4/6 text-start text-2xl font-bold">{location}</p>
      </div>
      <p className="flex w-full items-center justify-center border-b-4 border-t-4 border-double border-yellow-300 bg-red-600 text-center text-3xl font-bold text-white">
        <img
          src={Badge}
          alt={`Price badge for the n°${id + 1}`}
          className="size-8"
        />
        {price} $
      </p>
      <button
        type="button"
        className={`w-8/12 rounded-lg p-2 font-bold  ${houseSold ? "cursor-not-allowed bg-yellow-600 opacity-85" : "transform bg-yellow-600 duration-1000 hover:scale-110 hover:border-2 hover:border-white hover:text-xl hover:text-black"}`}
        onClick={() => handleSoldButtonClick(houseSold)}
      >
        {houseSold ? "Already sold !" : "Buy now !"}
      </button>
    </div>
  );
};

export default House;
