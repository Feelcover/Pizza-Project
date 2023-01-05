import React from "react";
import imgSearch from "../../img/search.svg";
import imgClose from "../../img/close.png";
import styles from "./Search.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { setSearchValue } from "../../services/slices/filterSlice";
import debounce from "lodash.debounce"

const Search = () => {
  const searchValue = useSelector((state) =>state.filterReducer.searchValue);
  const dispatch = useDispatch();
  const inputRef = React.useRef();
  const onClear = () => {
    dispatch(setSearchValue(''));
    inputRef.current.focus();
  }
  const onChange = (evt) =>{
    dispatch(setSearchValue(evt.target.value))
  }

  return (
    <div className={styles.searchContainer}>
      <img className={styles.searchImg} src={imgSearch} alt="search"></img>
      <input
        ref={inputRef}
        className={styles.search}
        placeholder="Поиск..."
        onChange={(evt) => onChange(evt)}
        value={searchValue}
      />
      {searchValue && (
        <img
          className={styles.searchClear}
          src={imgClose}
          alt="close"
          onClick={onClear}
        ></img>
      )}
    </div>
  );
};

export default Search;
