import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import houses from "./data/housesData";
import Badge from "./assets/imgs/icons/badge.svg";
import iconsProps from "./data/iconsData";
import { useState } from "react";
import "./index.css";

function App() {
  const [houseSold, setHouseSold] = useState(Array(houses.length).fill(false));

  const handleClick = (index) => {
    const newHouseSold = [...houseSold];
    newHouseSold[index] = !newHouseSold[index];
    setHouseSold(newHouseSold);
  };

  return (
    <div className="flex justify-center align-center flex-col gap-16">
      <Header />
      <Content
        houses={houses}
        badge={Badge}
        houseSold={houseSold}
        handleClick={handleClick}
      />
      <Footer iconsProps={iconsProps}/>
    </div>
  );
}

export default App;
