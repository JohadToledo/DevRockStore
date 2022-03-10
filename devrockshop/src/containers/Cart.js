import React from 'react'
import CartItem from '../components/CartItem'

export default function Cart() {
  return (
    <>
    <div className="carrito">
          <div className="carrito-listadito">
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>

          <div className="carrito-precio">
            Total a pagar <br /><strong>U$D 3400</strong>
          </div>
        </div>
    </>
  )
}
