import React from "react";
import House1 from "../assets/imgs/houses/h1.jpg";
import House2 from "../assets/imgs/houses/h2.jpeg";
import House3 from "../assets/imgs/houses/h3.jpg";
import House4 from "../assets/imgs/houses/h4.jpg";
import House5 from "../assets/imgs/houses/h5.jpeg";
import House6 from "../assets/imgs/houses/h6.jpg";
const houses = [
  {
    id: 1,
    src: House1,
    description:
      "A wonderful house at Kansas City. Much beautiful the night with a lot of light !",
    price: 120000,
    sold: true,
  },
  {
    id: 2,
    src: House2,
    description:
      "The house of your dreams with a pool. Perfect for your holidays !",
    price: 200000,
    sold: false,
  },
  {
    id: 3,
    src: House3,
    description: "With this one and its beautiful pool, the summer is yours !",
    price: 115000,
    sold: false,
  },
  {
    id: 4,
    src: House4,
    description:
      "A fortress with a big park. Your kids wont miss space to play !",
    price: 150000,
    sold: true,
  },
  {
    id: 5,
    src: House5,
    description:
      "This house is perfect if you want to stay cozy and have forest near you !",
    price: 99000,
    sold: false,
  },
  {
    id: 6,
    src: House6,
    description: "A simple ward for those who prefer little towns!",
    price: 99000,
    sold: false,
  },
];

export default houses;
