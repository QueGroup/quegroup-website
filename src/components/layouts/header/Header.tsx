import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import React from "react";

const Header : React.FC = () => {
  return (
    <header>
        <div className={styles.header}>
            <NavLink to="/" className={styles.mainLogo}>
                <img src='/img/main-logo.svg'/>
            </NavLink>
            <ul className={styles.headerList}>
                <li className={styles.headerItem}>Главная</li>
                <li className={styles.headerItem}>О проекте</li>
                <li className={styles.headerItem}>Продукты</li>
                <li className={styles.headerItem}>Вакансии</li>
                <li className={styles.headerItem}>Контакты</li>
            </ul>
            <button className={styles.signIn}>
                Войти
            </button>
        </div>
    </header>
  )
}

export default Header