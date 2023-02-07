import { Link } from "react-router-dom";
import basketImg from "../img/empty-basket.png";

const SuccessBuy = () => {
  return (
    <div className="basket basket--empty">
      <h2>
        Покупка завершена
      </h2>
      <p>
        Мы оформляем ваш заказ
      </p>
      <img src={basketImg} alt="Empty basket" />
      <Link to="/" className="button button--black">
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
};

export default SuccessBuy;
