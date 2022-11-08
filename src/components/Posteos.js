import React from 'react'
import Publicaciones from './data.json'
import Post from './Post'

export default function Posteos({sumar}) {
  return (
    <div className='container'>
      {Publicaciones.map(e=> <Post key={e.id} publicacion={e} sumar={sumar}/>)}
    </div>
  )
}
