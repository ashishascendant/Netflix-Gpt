import React from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import Login from "./components/Login";
import { Provider } from "react-redux";
import appstore from "./utils/appstore";

function App() {
  return (
    <div>
    
     <Provider store={appstore}><Body/></Provider>
    </div>
  );
}

export default App;