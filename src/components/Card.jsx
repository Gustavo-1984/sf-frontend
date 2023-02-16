

const Card = ({titulo, image, descripcion}) => {
  return (
    <div className="bg-sky-600 h-64 rounded flex flex-col shadow-xl max-md:h-56 max-sm:w-auto">
        <div className="flex basis-10 justify-center mt-5  max-sm:mt-5">
            <h1 className="font-bold text-6xl  text-black max-sm:text-4xl max-lg:text-4xl">{titulo}</h1>
        </div>
        <div className="flex basis-10 justify-center mt-5 ">
            <img className="h-20 max-sm:h-14" src={image} alt="ventas" />
        </div>
        <div className="flex basis-10 justify-center mt-5 ">
        <h1 className="font-bold text-3xl  text-black   max-sm:text-xl  max-lg:text-xl ">{descripcion}</h1>
        </div>
    </div>
  )
}

export default Card