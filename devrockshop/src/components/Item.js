import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../context/Context";

export default function Item(props) {
  const {img, nombre, precio, medidas, id} = props
  const { addProduct } = useContext(Context);

  return (
    <>
      <div className="home-item">
        <img
          src={img}
          alt=""
          className="home-item-img"
        />
        <div className="home-item-info">
          <Link to="/product">
            <h1 className="home-item-titulo">{nombre}</h1>
          </Link>
          <p className="home-item-medidas">Medidas: {medidas}</p>
          <div className="home-item-actions">
            <h3 className="home-item-precio">AR$ {precio}</h3>
            <button
              className="home-item-comprar"
              onClick={() => {
                addProduct(id);
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
