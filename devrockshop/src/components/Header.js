import React from 'react'
import imgback from '../assets/statics/back.png'
import imgcart from '../assets/statics/cart.png'
export default function Header() {
  return (
    <>
    <a href="carrito.html"><img src={imgcart} alt="" className="carritou"/></a>
          <a href=""><img src={imgback} alt="" className="volver"/></a>

        <h1 className="titulo">
          Dev <br />
          RockStore
        </h1>
    </>
  )
}
