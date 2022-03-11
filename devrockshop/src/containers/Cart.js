import React, { useContext } from 'react'
import CartItem from '../components/CartItem'
import Context from '../context/Context'

export default function Cart() {
  const {deleteProduct, cart} = useContext(Context)
  return (
    <>
    <div className="carrito">
          <div className="carrito-listadito">
            {cart.map((item, i)=>(
              <CartItem 
              {...item} 
              key={i} 
              deleteProduct={deleteProduct}/>
            ))}
          </div>

          <div className="carrito-precio">
            Total a pagar <br /><strong>U$D 3400</strong>
          </div>
        </div>
    </>
  )
}
