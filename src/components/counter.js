import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div className="jumbotron">
      <h2>{counter}</h2>
      <button onClick={inc} className="btn btn-primary btn-lg">
        INC
      </button>
      <button onClick={dec} className="btn btn-primary btn-lg">
        DEC
      </button>
      <button onClick={rnd} className="btn btn-primary btn-lg">
        RND
      </button>
    </div>
  );
};

const MapStaetToProps = (state) => {
  return {
    counter: state,
  };
};

//-----1.Можно сделать так:
// const MapDispatchToProps = (dispatch) => {
//   const { inc, dec, rnd } = bindActionCreators(actions, dispatch);
  // return {
  //   inc,
  //   dec,
  //   rnd
  // };
// };
// export default connect(MapStaetToProps, MapDispatchToProps)(Counter);

//-----2.Можно сделать еще проще:
// const MapDispatchToProps = (dispatch) => {
// return bindActionCreators(actions, dispatch);
// };
// export default connect(MapStaetToProps, MapDispatchToProps)(Counter);

//-----3.Можно сделать совсем просто:
export default connect(MapStaetToProps, actions)(Counter);
