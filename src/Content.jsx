import React from "react";
import Houses from "./Houses";
const Content = ({ houses, badge, houseSold, setHouseSold, handleClick }) => {
  return (
    <main className="flex items-center justify-center flex-col gap-8">
      <Houses
        houses={houses}
        badge={badge}
        houseSold={houseSold}
        setHouseSold={setHouseSold}
        handleClick={handleClick}
      />
    </main>
  );
};

export default Content;
