import React from "react";
import Houses from "./Houses";
const Content = ({houses}, badge) => {
  return (
    <main className="flex items-center justify-center flex-col gap-8">
      <Houses houses={houses} badge={badge}/>
    </main>
  );
};

export default Content;
