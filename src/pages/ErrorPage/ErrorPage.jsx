import React from "react";
import {Link} from "react-router-dom"
import img404 from "../../img/404.jpg";
import styles from "./ErrorPage.module.scss"

const ErrorPage = () => {
    return (
        <div className={styles.ErrorContainer}>
        <img className={styles.img} src={img404} alt="Не существующий адрес" />
        <h1>Страница не найдена</h1>
        <Link to='/'>
            <p>Перейти в магазин</p>
        </Link>
        </div>
    );
};

export default ErrorPage;
