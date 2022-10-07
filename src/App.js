import React from "react";
// components
import Navbar from "./components/Navbar";
import cartItems from "./cart-items";
// items

// redux stuff
import { createStore } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import reducer from "./reducer";
import CartContainer from "./components/CartContainer";
// react-redux - Provider - wraps app , connect - used in components

// initial store
const initialStore = {
  cart: cartItems,
  total:105,
  amount:5,
}

// store
const store = createStore(reducer,initialStore);



function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
