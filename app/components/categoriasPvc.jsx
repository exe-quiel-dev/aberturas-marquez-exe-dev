import React from 'react'

function CategoriasPvc({ children, categoria, subcategoria }) {
  return (
    <section className="min-h-screen bg-categorias py-10 border-b border-gray-300 flex flex-col items-center">
      <h1 className="uppercase text-3xl md:text-4xl font-black mb-4 text-white text-center w-full drop-shadow">{categoria}</h1>
      <h3 className="uppercase text-3xl md:text-4xl font-black mb-4 text-amber-400 text-center w-full drop-shadow-sm">{subcategoria}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items center justify-items-center gap-4 w-11/12 min-h-screen bg-black/50 py-10 px-5 rounded">
        {children}
      </div>
    </section>
  )
}

export default CategoriasPvc