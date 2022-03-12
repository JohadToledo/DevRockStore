import React from "react";
import { Link } from "react-router-dom";
import imgback from "../assets/statics/back.png";
import imgcart from "../assets/statics/cart.png";
export default function Header() {
  return (
    <>
      <Link to="/cart">
        <img src={imgcart} alt="" className="carritou" />
      </Link>
      <Link to="/">
        <img src={imgback} alt="" className="volver" />
      </Link>

      <h1 className="titulo">
        Dev <br />
        RockStore
      </h1>
    </>
  );
}
