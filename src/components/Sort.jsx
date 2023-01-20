import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpened } from "../services/slices/filterSlice";

export const sortArr = [
  { name: "популярности", sort: "rating" },
  { name: "цене (дорогие)", sort: "price" },
  { name: "цене (дешевые)", sort: "-price" },
  { name: "алфавиту", sort: "title" },
];

const Sort = ({ value, onClickSort }) => {
  const isOpened = useSelector((action) => action.filterReducer.isOpened);
  const dispatch = useDispatch();
  const sortRef = React.useRef();

  const selectedClose = (item) => {
    onClickSort(item);
    dispatch(setIsOpened(false));
  };

  React.useEffect(() => {
    function handleEscKeydown(evt) {
      if (evt.key === "Escape") {
        dispatch(setIsOpened(false));
      }
    }
    const handleCloseOutsideClick = (evt) => {
      if (!sortRef.current.contains(evt.target)) {
        dispatch(setIsOpened(false));
      }
    };
    document.addEventListener("keydown", handleEscKeydown);
    document.body.addEventListener("click", handleCloseOutsideClick);

    return () => {
      document.removeEventListener("keydown", handleEscKeydown);
      document.body.removeEventListener("click", handleCloseOutsideClick);
    };
  }, []);

  return (
    <div className="sort" ref={sortRef}>
      <div className="sort__label">
        <b>Сортировка по</b>

        <svg
          className="label-icon"
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <span onClick={() => dispatch(setIsOpened(!isOpened))}>
          {value.name}
        </span>
      </div>
      {isOpened && (
        <div className="sort__popup">
          <ul>
            {sortArr.map((item, index) => (
              <li
                key={index}
                className={value.sort === item.sort ? "active" : ""}
                onClick={() => selectedClose(item)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
