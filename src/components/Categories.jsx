import React from "react";

const Categories = ({value, onClickCategory}) => {
  const categoriesArr = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  


  return (
    <div className="categories">
      <ul>
        {categoriesArr.map((category, index) => (
          <li
            key={index}
            className={value === index ? "active" : ""}
            onClick={() => onClickCategory(index)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
