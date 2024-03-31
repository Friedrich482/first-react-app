import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import houses from "./components/HousesData";
import Badge from "./assets/imgs/icons/badge.svg";
import iconsProps from "./components/iconsData";
import { useState } from "react";
import "./index.css";

function App() {
  const [houseSold, setHouseSold] = useState(Array(houses.length).fill(false));
  const handleClick = (index) => {
    const newHouseSold = [...houseSold];
    newHouseSold[index] = true;
    setHouseSold(newHouseSold);
  };
  return (
    <div className="align-center flex flex-col justify-center gap-12">
      <Header />
      <Content
        houses={houses}
        badge={Badge}
        houseSold={houseSold}
        setHouseSold={setHouseSold}
        handleClick={handleClick}
      />
      <Footer iconsProps={iconsProps} />
    </div>
  );
}

export default App;
