import { useDispatch } from "react-redux";
import ReactPaginate from "react-paginate";
import { setCurrentPage } from "../../services/slices/filterSlice";
import { FC } from "react";
import styles from "./Pagination.module.scss";
import { TPagination } from "../../utils/types";

const Pagination: FC<TPagination> = ({ currentPage }) => {
  const dispatch = useDispatch();
  const changePage = (num: number) => {
    dispatch(setCurrentPage(num));
  };
  return (
    <ReactPaginate
      className={styles.pagination}
      breakLabel="..."
      nextLabel="->"
      onPageChange={(evt) => changePage(evt.selected + 1)}
      pageRangeDisplayed={8}
      pageCount={3}
      previousLabel="<-"
      forcePage={currentPage - 1}
    />
  );
};

export default Pagination;
