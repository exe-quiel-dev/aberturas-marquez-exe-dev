import React from 'react'

const Categorias = ({children, categoria, subcategoria}) => {
  return (
    <section className="min-h-screen bg-categorias border-b border-gray-300 flex flex-col items-center">
      <h1 className="uppercase text-3xl md:text-4xl font-black py-6 text-white text-center w-full drop-shadow bg-slate-600/50">{categoria}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-items-center gap-4 w-full min-h-screen bg-slate-600/50 py-10 px-5 rounded">
        {children}
      </div>
    </section>
  )
}

export default Categorias