import React from "react";

const Categories = () => {
  const categoriesArr = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const [active, setActive] = React.useState(0);

  const setActiveFunc = (index) => {
    setActive(index);
  };

  return (
    <div className="categories">
      <ul>
        {categoriesArr.map((item, index) => (
          <li
            key={index}
            className={active === index ? "active" : ""}
            onClick={() => setActiveFunc(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
