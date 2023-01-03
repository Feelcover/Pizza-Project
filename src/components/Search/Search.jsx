import imgSearch from "../../img/search.svg";
import imgClose from "../../img/close.png";
import styles from "./Search.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { setSearchValue } from "../../services/slices/filterSlice";

const Search = () => {
  const searchValue = useSelector((state) =>state.filterReducer.searchValue);
  const dispatch = useDispatch();

  return (
    <div className={styles.searchContainer}>
      <img className={styles.searchImg} src={imgSearch} alt="search"></img>
      <input
        className={styles.search}
        placeholder="Поиск..."
        onChange={(evt) => dispatch(setSearchValue(evt.target.value))}
        value={searchValue}
      />
      {searchValue && (
        <img
          className={styles.searchClear}
          src={imgClose}
          alt="close"
          onClick={()=>dispatch(setSearchValue(''))}
        ></img>
      )}
    </div>
  );
};

export default Search;
