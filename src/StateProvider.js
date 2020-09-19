import React,{createContext,useContext,useReducer} from 'react';

//prepares the dataLayer
export const StateContext=createContext();

//Wrap our app and provides th dataLayer
export const StateProvider=({reducer,initialState,children})=>(
  <StateContext.Provider value={useReducer(reducer,initialState)}>
    {children}
  </StateContext.Provider>
);

//pull the info from dataLayer
export const useStateValue=()=>useContext(StateContext);