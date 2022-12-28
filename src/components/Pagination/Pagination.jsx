import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

const Pagination = ({ changePage }) => {
  return (
    <ReactPaginate
      className={styles.pagination}
      breakLabel="..."
      nextLabel="->"
      onPageChange={(evt) => changePage(evt.selected + 1)}
      pageRangeDisplayed={8}
      pageCount={2}
      previousLabel="<-"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
