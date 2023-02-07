import { FC, memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { setCategoryId, setCurrentPage } from "../services/slices/filterSlice";
import { TCategories } from "../utils/types";

const categoriesArr = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const Categories:FC<TCategories> = memo(({value}) => {
  const dispatch = useDispatch();

  const setCategoryIdResetCurrentPage = useCallback((index:number) => {
    dispatch(setCategoryId(index));
    dispatch(setCurrentPage(1));
  }, [])


  return (
    <div className="categories">
      <ul>
        {categoriesArr.map((category, index) => (
          <li
            key={index}
            className={value === index ? "active" : ""}
            onClick={() => setCategoryIdResetCurrentPage(index)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Categories;
