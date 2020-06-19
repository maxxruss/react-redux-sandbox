import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./components/app";
// import Counter from "./components/counter";
import reducer from "./reducer";
// import { inc, dec, rnd } from "./actions";
// import * as actions from "./actions";

const store = createStore(reducer);
//dispatch написана так, чтобы работать со своим store
// const { dispatch } = store;

// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args));
// };
// const incDispatch = bindActionCreators(inc, dispatch);
// const decDispatch = bindActionCreators(dec, dispatch);
// const rndDispatch = bindActionCreators(rnd, dispatch);

// document.getElementById("inc").addEventListener("click", inc);
// document.getElementById("dec").addEventListener("click", dec);
// document.getElementById("rnd").addEventListener("click", () => {
//   const payload = Math.floor(Math.random() * 10);
//   rnd(payload);
// });

// counter={store.getState()}
// inc={inc}
// dec={dec}
// rnd={() => {
//   const value = Math.floor(Math.random() * 10);
//   rnd(value);
// }}

// const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );

// update();

// store.subscribe(update);
