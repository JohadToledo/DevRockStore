// TYPES

const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";
const DELETE_PRODUCT = "DELETE_PRODUCT";

export default function Reducer(state, action) {
  const { payload, type } = action;

  switch (type) {
    case GET_PRODUCTS:
      return { ...state, products: payload };

    case ADD_PRODUCT:
      return {
        ...state,
        cart: [
          ...state.cart,
          state.products.filter((ite) => ite.id == parseInt(payload)),
        ],
      };

    case DELETE_PRODUCT:
      console.log(
        payload,
        "<- payload, state ->",
        state.cart,
        "lo que llega"
      );
      return {
        ...state,
        cart: state.cart.filter((items) => items[0].id !== payload),
      };
  }
}
