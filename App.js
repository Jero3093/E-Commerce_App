import React from "react";
import { Provider } from "react-redux"; //Redux Provider
import { Navigation } from "./src/Navigation/Navigation"; //Navigation Component
import { store } from "./src/Store/Store"; //Store of all States

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
