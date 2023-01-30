import { Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home";
import Basket from "../pages/Basket";
import "../scss/app.scss";
import PizzaPage from "../pages/PizzaPage/PizzaPage";
import Main from "./Main";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="" element={<Home />} />
        <Route path="Basket" element={<Basket />} />
        <Route path="pizza/:id" element={<PizzaPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default App;
