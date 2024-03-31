
const Icon = ({link, logo, id, altText}) => {
  return (
    <a href={link} key={id}>
      <div className=" hover:shadow-lg hover:shadow-black transform duration-500 hover:scale-110 rounded-lg flex items-center justify-center p-1 active:bg-stone-300">
        <img src={logo} alt={altText} className="size-8"></img>
      </div>
    </a>
  )
}

export default Icon