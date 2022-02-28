import React from "react";
import { Provider } from "react-redux";
import { generateStore } from "./redux/store";
import { Router } from "./router/Router";


export const App = () => {
  const store = generateStore()
  return(
    <>
        <Provider store={store}>
            <Router/>
        </Provider>
    </>
  )
}