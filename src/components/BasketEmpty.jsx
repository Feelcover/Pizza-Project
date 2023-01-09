import { Link } from "react-router-dom";

import basketEmptyImg from "../img/empty-basket.png";

const BasketEmpty = () => {
  return (
    <div className="basket basket--empty">
      <h2>
        Корзина пуста <span>😕</span>
      </h2>
      <p>
        Кажется вы ещё ничего не заказали.
        <br />
        Для того, чтобы заказать пиццу, перейдите на главную страницу.
      </p>
      <img src={basketEmptyImg} alt="Empty basket" />
      <Link to="/" className="button button--black">
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
};

export default BasketEmpty;
