

const cardPlegadizas = ({ nombre, colores, vidrio, img }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-white shadow">
      <img src={img} alt={nombre} className="w-full" />
      <div className="p-4 w-full text-start">
        <h2 className="font-bold uppercase text-xl mb-4 border-b border-gray-200 text-center">{nombre}</h2>
        <div className="grid grid-cols-2 items-center text-center">
          <p className="font-bold py-2">Colores: <span className="font-light">{colores}</span></p>
          <p className="font-bold py-2">Vidrio: <span className="font-light">{vidrio}</span></p>
        </div>
      </div>
    </div>
  )
}

export default cardPlegadizas