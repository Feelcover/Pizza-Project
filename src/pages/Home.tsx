import React, { FC } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../services/store";
import QueryString from "qs";
import { Loader } from "../components/Pizza/Loader";
import Pizza from "../components/Pizza/Pizza";
import Sort, { sortArr } from "../components/Sort";
import Categories from "../components/Categories";
import Pagination from "../components/Pagination/Pagination";
import { setUrlFilters, filterSelector } from "../services/slices/filterSlice";
import { useNavigate } from "react-router-dom";
import { fetchPizzas, pizzasSelector } from "../services/slices/pizzasSlice";
import FetchPizzasError from "../components/FetchPizzasError";
import { TPizzaItem } from "../utils/types";

const Home: FC = () => {
  const { categoryId, sortType, currentPage, searchValue } =
    useSelector(filterSelector);
  console.log(categoryId);

  const { items, isLoading } = useSelector(pizzasSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isFirstRender = React.useRef(false);
  const isSearch = React.useRef(false);

  React.useEffect(() => {
    if (window.location.search) {
      const params = QueryString.parse(window.location.search.substring(1));
      const sortProp = sortArr.find((item) => item.sort === params.sort);
      dispatch(
        setUrlFilters({
          ...params,
          sortProp,
        })
      );
      isSearch.current = true;
    }
  }, []);

  React.useEffect(() => {
    if (isFirstRender.current) {
      const queryString = QueryString.stringify(
        {
          sort: sortType.sort,
          categoryId,
          currentPage,
        },
        { addQueryPrefix: true }
      );
      navigate(queryString);
    }
    isFirstRender.current = true;
  }, [categoryId, sortType, searchValue, currentPage]);

  React.useEffect(() => {
    if (!isSearch.current) {
      dispatch(fetchPizzas({ sortType, categoryId, currentPage, searchValue }));
      window.scrollTo(0, 0);
    }
    isSearch.current = false;
  }, [categoryId, sortType, searchValue, currentPage]);

  const searchFilter = (arr: TPizzaItem[]) => {
    return arr.filter((e) => e.name.toLowerCase().includes(searchValue));
  };

  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} />
        <Sort value={sortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading === "pending" &&
          [...new Array(8)].map((arr, i) => <Loader key={i} />)}
        {isLoading === "success" &&
          searchFilter(items).map((item) => <Pizza key={item.id} {...item} />)}
      </div>
      {isLoading === "error" && <FetchPizzasError />}
      {isLoading === "success" && <Pagination currentPage={currentPage} />}
    </>
  );
};

export default Home;
