import { ChangeEvent, useCallback, useRef } from "react";
import imgSearch from "../../img/search.svg";
import imgClose from "../../img/close.png";
import styles from "./Search.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  filterSelector,
  setSearchValue,
  setValue,
} from "../../services/slices/filterSlice";
import debounce from "lodash.debounce";

const Search = () => {
  const { value } = useSelector(filterSelector);
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const onClear = () => {
    dispatch(setSearchValue(""));
    dispatch(setValue(""));
    inputRef.current?.focus();
  };

  const updateValueDelay = useCallback(
    debounce((e:string) => {
      dispatch(setSearchValue(e));
    }, 450),
    []
  );

  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    dispatch(setValue(evt.target.value));
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
