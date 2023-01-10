import React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
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
import { setPizzas } from "../services/slices/pizzasSlice";

const Home = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const { categoryId, sortType, currentPage, searchValue } = useSelector(
    (state) => state.filterReducer
  );
  const items = useSelector((state)=> state.pizzasReducer.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isFirstRender = React.useRef(false);
  const isSearch = React.useRef(false);

  const getItems = async () => {
    const order = sortType.sort.includes("-") ? "asc" : "desc";
    const sortBy = sortType.sort.replace("-", "");
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";
    setIsLoading(true);
    try {
      const res = await axios.get(
        `https://63a57314318b23efa793c24a.mockapi.io/Items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`
      );

      dispatch(setPizzas(res.data));
      // setItems(res.data)
      setIsLoading(false);
      window.scrollTo(0, 0);
    } catch (error) {
      console.log("Ошибка при запросе", error);
      alert('Ошибка при получении пицц, попробуйте позже')
    }finally{
      setIsLoading(false);
    }
  };

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
      getItems();
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
        {isLoading
          ? [...new Array(8)].map((arr, i) => <Loader key={i} />)
          : searchFilter(items).map((item) => (
              <Pizza key={item.id} {...item} />
            ))}
      </div>
      <Pagination currentPage={currentPage} changePage={changePage} />
    </>
  );
};

export default Home;
