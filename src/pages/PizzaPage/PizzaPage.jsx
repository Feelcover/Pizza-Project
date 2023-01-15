import axios from "axios";
import React, { useTransition } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./PizzaPage.module.scss";
import { pizzaTypes } from "../../components/Pizza/Pizza";

const PizzaPage = () => {
  const [item, setItem] = React.useState({});

  const { id } = useParams();
  const sizes = item.sizes;
  const types = item.types;
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchItem() {
      try {
        const res = await axios.get(
          "https://63a57314318b23efa793c24a.mockapi.io/Items/" + id
        );
        setItem(res.data);
      } catch (error) {
        console.log(error);
        navigate('/')
      }
    }
    fetchItem();
  }, []);

  if (!item.id) {
    return <div className={styles.loader} />;
  } else {
    return (
      <div className={styles.container}>
        <img src={item.imageUrl} alt="pizza" />
        <h2>{item.name}</h2>
        <h3>
          Доступные размеры:{" "}
          {sizes?.map((item, index) => (
            <p key={index}>{item} см.</p>
          ))}
        </h3>
        <h3>
          Доступное тесто:{" "}
          {types?.map((item, index) => (
            <p key={index}>{pizzaTypes[item]}</p>
          ))}
        </h3>
        <h3>Цена от: {item.price} ₽</h3>
        <Link to="/" className="button button--black">
          <span>Вернуться назад</span>
        </Link>
      </div>
    );
  }
};

export default PizzaPage;
