import React from "react";
import imgDelete from '../assets/statics/delete.png';

export default function CartItem(props) {
  const {nombre, precio, img, id} = props[0]
  console.log(props)
  const handleDelete = () =>{
    props.deleteProduct(id)
  }
  return (
    <>
    <div className="carrito-item">
    <img
      src={img}
      alt=""
      className="carrito-item-img"
    />
    <div className="carrito-txt">
      <h1 className="carrito-item-titulo">{nombre}</h1>
      <h3 className="carrito-item-precio">AR$ {precio}</h3>
    </div>
    <img src={imgDelete} alt="" className="carrito-item-borrar" onClick={handleDelete}/>
  </div>
    </>
  );
}
