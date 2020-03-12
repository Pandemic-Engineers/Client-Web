import React, { useState } from "react";
import { useSelector, useDispatch, useCallback, useStore } from "react-redux";
import { createSelector } from "reselect"; // https://github.com/reduxjs/reselect

function Test() {
  const [count, setCount] = useState(0); //=>this.setState({...})
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

  const counter = useSelector(state => state.counter); //=> get store.state.counter

  const dispatch = useDispatch(); // => dispatch an action
  // https://react-redux.js.org/api/hooks

  const incrementCounter = useCallback(
    // dispatch a callback action
    () => dispatch({ type: "increment-counter" }),
    [dispatch]
  );

  const store = useStore(); // get redux store
  return (
    <>
      <span>{counter}</span>
      <button onClick={() => dispatch({ type: "increment-counter" })}>
        Increment counter
      </button>
    </>
  );
}

export default Test;
