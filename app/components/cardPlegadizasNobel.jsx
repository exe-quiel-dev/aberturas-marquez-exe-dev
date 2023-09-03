import React from 'react'

const cardPlegadizasNobel = ({ nombre, caracteristicas, img }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-white shadow">
      <img src={img} alt={nombre} className="w-full" />
      <div className="p-4 w-full text-start">
        <h2 className="font-bold uppercase text-xl mb-4 border-b border-gray-200 text-center">{nombre}</h2>
        <div className="flex items-center justify-center text-center">
          <p className="font-bold py-2">Caracteristicas: <span className="font-light">{caracteristicas}</span></p>
        </div>
      </div>
    </div>
  )
}

export default cardPlegadizasNobel