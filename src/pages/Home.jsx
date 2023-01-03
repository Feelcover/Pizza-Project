import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Loader } from "../components/Pizza/Loader";
import Pizza from "../components/Pizza/Pizza";
import Sort from "../components/Sort";
import Categories from "../components/Categories";
import Pagination from "../components/Pagination/Pagination";
import { setCategoryId, setSortType, setCurrentPage } from "../services/slices/filterSlice";

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const categoryId = useSelector((state) => state.filterReducer.categoryId);
  const sortType = useSelector((state) => state.filterReducer.sortType);
  const currentPage = useSelector((state)=> state.filterReducer.currentPage)
  const searchValue = useSelector((state)=> state.filterReducer.searchValue);

  const dispatch = useDispatch();


  const order = sortType.sort.includes("-") ? "asc" : "desc";
  const sortBy = sortType.sort.replace("-", "");
  const category = categoryId > 0 ? `category=${categoryId}` : "";
  const search = searchValue ? `&search=${searchValue}` : "";

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://63a57314318b23efa793c24a.mockapi.io/Items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`
    )
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);

  const searchFilter = (arr) => {
    return arr.filter((e) => e.name.toLowerCase().includes(searchValue));
  };

  return (
    <>
      <div className="content__top">
        <Categories
          value={categoryId}
          onClickCategory={(id) => dispatch(setCategoryId(id))}
        />
        <Sort value={sortType} onClickSort={(id) => dispatch(setSortType(id))} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((arr, i) => <Loader key={i} />)
          : searchFilter(items).map((item) => (
              <Pizza key={item.id} {...item} />
            ))}
      </div>
      <Pagination changePage={(id) => dispatch(setCurrentPage(id))} />
    </>
  );
};

export default Home;
