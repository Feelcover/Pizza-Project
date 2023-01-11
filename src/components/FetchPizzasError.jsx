import errorImg from "../img/errorfetch.jpg";

const FetchPizzasError = () => {
  return (
    <div className="basket basket--empty">
      <h2>
        Ошибка загрузки пицц <span>😕</span>
      </h2>
      <p>
        Произошла какая-то неизвестная ошибка
        <br />
        Не удалось загрузить пиццы
      </p>
      <img src={errorImg} alt="Error" />
    </div>
  );
};

export default FetchPizzasError;
