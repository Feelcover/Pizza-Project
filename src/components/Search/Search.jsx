import React from "react";
import imgSearch from "../../img/search.svg";
import imgClose from "../../img/close.png";
import styles from "./Search.module.scss";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../services/slices/filterSlice";
import debounce from "lodash.debounce";

const Search = () => {
  const [value, setValue] = React.useState("");
  const dispatch = useDispatch();
  const inputRef = React.useRef();

  const onClear = () => {
    dispatch(setSearchValue(""));
    setValue('');
    inputRef.current.focus();
  };

  const updateValueDelay = React.useCallback(
    debounce((e) => {
      console.log(e);
      dispatch(setSearchValue(e));
    }, 450)
    ,[]
  );

  const onChange = (evt) => {
    setValue(evt.target.value);
    updateValueDelay(evt.target.value);
  };

  return (
    <div className={styles.searchContainer}>
      <img className={styles.searchImg} src={imgSearch} alt="search"></img>
      <input
        ref={inputRef}
        className={styles.search}
        placeholder="Поиск..."
        onChange={(evt) => onChange(evt)}
        value={value}
      />
      {value && (
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
