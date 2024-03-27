const Houses = ({ houses, badge, houseSold, handleClick }) => {
  return houses.map(({ id, src, description, price }, index) => (
    <div
      key={id}
      className="flex min-w-72 max-w-80 flex-col items-center rounded-lg border-8 border-amber-800 bg-indigo-950 pb-1"
    >
      <img
        src={src}
        alt={`House n°${id + 1}`}
        className="mt-8 aspect-square size-72 w-11/12 rounded-lg border-4 border-solid border-red-600"
      />
      <p className="w-5/6 text-center text-xl text-teal-100">{description}</p>
      <p className="flex w-full items-center justify-center border-b-4 border-t-4 border-double border-yellow-300 bg-red-600 text-center text-3xl font-bold text-white">
        <img
          src={badge}
          alt={`Price badge for the n°${id + 1}`}
          className="size-8"
        />
        {price} $
      </p>
      <button
        type="button"
        className="w-7/12 transform rounded-lg bg-yellow-600 p-2 font-bold duration-1000 hover:scale-110 hover:border-2 hover:border-white hover:text-xl hover:text-black"
        onClick={() => handleClick(index)}
      >
        {houseSold[index] ? "Already sold !" : "Buy now !"}
      </button>
    </div>
  ));
};

export default Houses;
