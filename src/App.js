import "./App.css";
import IpoContext from "./Utilities/IpoContext";
import ipoData from "./Assets/data";
import IpoListing from "./Components/IpoListing";

import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IpoDetails from "./Components/IpoDetails";

function App() {
  return (
    <IpoContext.Provider value={ipoData}>
      <div style={{height:"5vh"}}></div>
      <div style={{ width: "60%", margin: "auto"}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={IpoListing} />
            <Route path="/details/:id" Component={IpoDetails} />
          </Routes>
        </BrowserRouter>
      </div>
    </IpoContext.Provider>
  );
}

export default App;
