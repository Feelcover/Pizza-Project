import { FC } from "react";
import {Link} from "react-router-dom"
import img404 from "../../img/404.jpg";
import styles from "./ErrorPage.module.scss"

const ErrorPage:FC = () => {
    return (
        <div className={styles.ErrorContainer}>
        <img className={styles.img} src={img404} alt="Не существующий адрес" />
        <h1>Страница не найдена</h1>
        <Link to="/" className={`${styles.backButton} button button--black`}>
          <span>Перейти в магазин</span>
        </Link>
        </div>
    );
};

export default ErrorPage;
