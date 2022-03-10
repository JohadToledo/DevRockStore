import React, { useContext } from "react";
import Context from "../context/Context";

export default function Item() {
  const { addProduct } = useContext(Context);

  return (
    <>
      <div className="home-item">
        <img
          src="http://escueladevrock.com/store/0.png"
          alt=""
          className="home-item-img"
        />
        <div className="home-item-info">
          <a href="producto.html">
            <h1 className="home-item-titulo">Cerebro loco</h1>
          </a>
          <p className="home-item-medidas">Medidas: 20x10</p>
          <div className="home-item-actions">
            <h3 className="home-item-precio">AR$ 150</h3>
            <button
              className="home-item-comprar"
              onClick={() => {
                addProduct('panchoo');
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
