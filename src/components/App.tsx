import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import "../scss/app.scss";
import Main from "./Main";
import { lazy, Suspense } from "react";
const Basket = lazy(
  () => import(/* webpackChunkName: "Basket" */ "../pages/Basket")
);
const PizzaPage = lazy(
  () =>
    import(/* webpackChunkName: "PizzaPage" */ "../pages/PizzaPage/PizzaPage")
);
const ErrorPage = lazy(
  () =>
    import(/* webpackChunkName: "ErrorPage" */ "../pages/ErrorPage/ErrorPage")
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="" element={<Home />} />
        <Route
          path="Basket"
          element={
            <Suspense fallback={<div className="loader" />}>
              <Basket />
            </Suspense>
          }
        />
        <Route
          path="pizza/:id"
          element={
            <Suspense>
              <PizzaPage />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div className="loader" />}>
              <ErrorPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
