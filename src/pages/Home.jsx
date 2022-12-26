import React from "react";
import { Loader } from "../components/Pizza/Loader";
import Pizza from "../components/Pizza/Pizza";
import Sort from "../components/Sort";
import Categories from "../components/Categories";

const Home = () => {
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
      window.scrollTo(0, 0);
  }, []);

  return (
    <>
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
    </>
  );
};

export default Home;
