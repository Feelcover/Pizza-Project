import React from "react";
import { useSelector, useDispatch } from "react-redux";
import QueryString from "qs";
import { Loader } from "../components/Pizza/Loader";
import Pizza from "../components/Pizza/Pizza";
import Sort, { sortArr } from "../components/Sort";
import Categories from "../components/Categories";
import Pagination from "../components/Pagination/Pagination";
import {
  setCategoryId,
  setSortType,
  setCurrentPage,
  setUrlFilters,
} from "../services/slices/filterSlice";
import { useNavigate } from "react-router-dom";
import { fetchPizzas } from "../services/slices/pizzasSlice";
import FetchPizzasError from "../components/FetchPizzasError";

const Home = () => {
  const { categoryId, sortType, currentPage, searchValue } = useSelector(
    (state) => state.filterReducer
  );
  const {items, isLoading} = useSelector((state)=> state.pizzasReducer);
  const dispatch = useDispatch();
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
      dispatch(fetchPizzas({sortType, categoryId, currentPage, searchValue}));
      window.scrollTo(0, 0);
    }
    isSearch.current = false;
  }, [categoryId, sortType, searchValue, currentPage]);


  const searchFilter = (arr) => {
    return arr.filter((e) => e.name.toLowerCase().includes(searchValue));
  };

  const changePage = (num) => {
    dispatch(setCurrentPage(num));
  };

  return (
    <>
      <div className="content__top">
        <Categories
          value={categoryId}
          onClickCategory={(id) => dispatch(setCategoryId(id))}
        />
        <Sort
          value={sortType}
          onClickSort={(id) => dispatch(setSortType(id))}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading === "pending" && [...new Array(8)].map((arr, i) => <Loader key={i} />)}
        {isLoading === "success" && searchFilter(items).map((item) => (
              <Pizza key={item.id} {...item} />
            ))}
      </div>
      {isLoading === "error" && <FetchPizzasError/>}
      {isLoading === "success" && <Pagination currentPage={currentPage} changePage={changePage} />}
      
    </>
  );
};

export default Home;
