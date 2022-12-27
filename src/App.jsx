import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import { createContext } from "react";
import "./scss/app.scss";

export const AppContext = createContext({});

const App = () => {
  return (
    <AppContext.Provider
    value={{}}
    >
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Basket" element={<Basket />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default App;
