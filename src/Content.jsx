import Houses from "./Houses";
const Content = ({ houses, badge, houseSold, setHouseSold, handleClick }) => {
  return (
    <main className="flex w-full flex-wrap items-center justify-center gap-10 pl-10 pr-10">
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
