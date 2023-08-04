
const Card = ({ nombre, marco, hoja, bisagras, cerradura, img }) => {
  return (
    <div className="flex flex-col items-center justify-center w-4/5 lg:w-1/3 bg-white shadow">
      <img src={img} alt={nombre} className="w-full" />
      <div className="p-4 w-full text-start">
        <h2 className="font-bold uppercase text-xl mb-4 border-b border-gray-200 text-center">{nombre}</h2>
        <div className="grid grid-cols-2 items-center text-center">
          <p className="font-bold py-2">Marco: <span className="font-light">{marco}</span></p>
          <p className="font-bold py-2">Hoja: <span className="font-light">{hoja}</span></p>
          <p className="font-bold py-2">Bisagras: <span className="font-light">{bisagras}</span></p>
          <p className="font-bold py-2">Cerradura: <span className="font-light">{cerradura}</span></p>
        </div>
      </div>
    </div>
  )
}

export default Card