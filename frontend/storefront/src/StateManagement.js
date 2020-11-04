import React, { createContext, useContext, useReducer } from "react";

// This is the data layer
export const StateContext = createContext();

//Build a Managment System to give the whole system access to my state
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {/* children will refer to the App. This will then wrap all of the promises in the index.js file */}
    {children}
  </StateContext.Provider>
);

//this is how we use it inside a component
export const useStateValue = () => useContext(StateContext);
