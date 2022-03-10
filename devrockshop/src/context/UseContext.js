import axios from "axios";
import Context from "./Context";
import { useState } from "react";

export default function UseContext(props) {
  const { children } = props;
  const [ state, setState ] = useState([]);
  const initialState = {
    products: [],
    cart: [],
  };
  const getProducts = async () => {
    const res = await axios.get(
      "https://devrockstore-default-rtdb.firebaseio.com/productos.json"
    );
    setState(res.data);
    console.log(res.data);
  };

  const addProduct = () => {};

  const deleteProduct = () => {};
  return (
    <Context.Provider
      value={{
        products: state,
        // cart: initialState.cart,
        getProducts,
        addProduct,
        deleteProduct,
      }}
    >
      {children}
    </Context.Provider>
  );
}
