import axios from "axios";
import Context from "./Context";
import { useReducer } from "react";
import Reducer from "./Reducer";

export default function UseContext(props) {
  const { children } = props;
  const initialState = {
    products: [],
    cart: [],
  };
  const [ state, dispatch ] = useReducer(Reducer, initialState);

  const getProducts = async () => {
    const res = await axios.get(
      "https://devrockstore-default-rtdb.firebaseio.com/productos.json"
      );
      dispatch({type: "GET_PRODUCTS", payload: res.data })
    };
    
    const addProduct = (item) => {
      console.log('add to cart ', item)
      console.log('es el state from usecontext: ', state)
      console.log('es el cart from usecontext: ', state.cart)
      dispatch({ type: "ADD_PRODUCT", payload: item });
    };

  const deleteProduct = (item) => {
    console.log("Eliminar carrito", item);
    dispatch({ type: "DELETE_PRODUCT", payload: item });
  };
  return (
    <Context.Provider
      value={{
        products: state.products,
        cart: state.cart,
        getProducts,
        addProduct,
        deleteProduct,
      }}
    >
      {children}
    </Context.Provider>
  );
}
