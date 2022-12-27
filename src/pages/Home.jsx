import React from "react";
import { Loader } from "../components/Pizza/Loader";
import Pizza from "../components/Pizza/Pizza";
import Sort from "../components/Sort";
import Categories from "../components/Categories";

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: "популярности",
    sort: "rating",
  });

  const order = sortType.sort.includes("-") ? "asc" : "desc";
  const sortBy = sortType.sort.replace("-", "");
  const category = categoryId > 0 ? `category=${categoryId}` : "";

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://63a57314318b23efa793c24a.mockapi.io/Items?${category}&sortBy=${sortBy}&order=${order}`
    )
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);

  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={setCategoryId} />
        <Sort value={sortType} onClickSort={setSortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((arr, i) => <Loader key={i} />)
          : items.map((item) => <Pizza key={item.id} {...item} />)}
      </div>
    </>
  );
};

export default Home;
