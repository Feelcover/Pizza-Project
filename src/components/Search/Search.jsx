import React from "react";
import imgSearch from "../../img/search.svg";
import imgClose from "../../img/close.png";
import { AppContext } from "../App";
import styles from "./Search.module.scss";

const Search = () => {
  const { searchValue, setSearchValue } = React.useContext(AppContext);

  return (
    <div className={styles.searchContainer}>
      <img className={styles.searchImg} src={imgSearch} alt="search"></img>
      <input
        className={styles.search}
        placeholder="Поиск..."
        onChange={(evt) => setSearchValue(evt.target.value)}
        value={searchValue}
      />
      {searchValue && (
        <img
          className={styles.searchClear}
          src={imgClose}
          alt="close"
          onClick={()=>setSearchValue('')}
        ></img>
      )}
    </div>
  );
};

export default Search;
