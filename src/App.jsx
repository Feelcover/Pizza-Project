import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home";
import Basket from "./pages/Basket";


import "./scss/app.scss";

const App = () => {
  return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/Basket" element={<Basket />}/>
              <Route path="*" element={<ErrorPage />}/>

            </Routes>
          </div>
        </div>
      </div>
  );
};

export default App;
