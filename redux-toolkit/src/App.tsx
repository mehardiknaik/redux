import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import LeftContainer from "./component/LeftContainer";
import RightContainer from "./component/RightContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="flex">
        <LeftContainer />
        <RightContainer />
      </div>
    </Provider>
  );
}

export default App;
