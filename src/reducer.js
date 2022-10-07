import {
  DECREASE,
  INCREASE,
  CLEAR_CART,
  REMOVE,
  GET_TOTALS,
  TOGGLE_AMOUNT
} from "./actions";
import cartItems from "./cart-items";

// const initialStore = {
//   cart: cartItems,
//   total: 0,
//   amount: 0
// };


function reducer(state , action) {
  if(action.type === CLEAR_CART) {
    return {...state, cart: []}
  }
  return state;
}

export default reducer;

// switch (action.type) {
//   case CLEAR_CART:
//     return { ...state, cart: [] };
//   default:
//     return state;
// }
