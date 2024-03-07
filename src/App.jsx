import "./assets/style.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import houses from "./housesData";
import Badge from "./assets/imgs/icons/badge.svg";
// import { useState } from "react";

function App() {
  // const [buyButton, setBuyButton] = useState("Buy Now !");
  return (
    <div className="flex justify-center align-center flex-col gap-16">
      <Header />
      <Content houses={houses} badge={Badge} />
      <Footer />
    </div>
  );
}

export default App;
