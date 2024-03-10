import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import {houses1, houses2, houses3} from "./data/housesData";
import Badge from "./assets/imgs/icons/badge.svg";
import iconsProps from "./data/iconsData";
import { useState } from "react";
import "./index.css";

function App() {
  const [houseSold, setHouseSold] = useState(Array(houses1.length).fill(false));

  const handleClick = (index) => {
    const newHouseSold = [...houseSold];
    newHouseSold[index] = !newHouseSold[index];
    setHouseSold(newHouseSold);
  };
  const housesChoosen = [houses1, houses2, houses3];
  let randomIndex = Math.floor(Math.random() * 3)
  return (
    <div className="flex justify-center align-center flex-col gap-12">
      <Header />
      <Content
        houses={housesChoosen[randomIndex]}
        badge={Badge}
        houseSold={houseSold}
        handleClick={handleClick}
      />
      <Footer iconsProps={iconsProps}/>
    </div>
  );
}

export default App;
