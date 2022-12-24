import React from "react";
import Categories from "./components/Categories";
import Header from "./components/Header";
import { Loader } from "./components/Pizza/Loader";
import Pizza from "./components/Pizza/Pizza";
import Sort from "./components/Sort";
import "./scss/app.scss";

const App = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://63a57314318b23efa793c24a.mockapi.io/Items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {isLoading
              ? [...new Array(8)].map((item, i) => <Loader key={i} />)
              : items.map((item) => <Pizza key={item.id} {...item} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
