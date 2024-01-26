import styles from './Header.module.scss';
import {NavLink} from "react-router-dom";

const Header : React.FC = () => {

  return (
    <header>
        <div className={styles.header}>
            <NavLink to="/" className={styles.mainLogo}>
                <img src='/img/main-logo.svg' alt="главный логотип"/>
            </NavLink>
            <ul className={styles.headerList}>
                <li className={styles.headerItem}>
                    <a href="#main">Главная</a>
                </li>
                <li className={styles.headerItem}>
                    <a href="#project">О проекте</a>
                </li>
                <li className={styles.headerItem}>
                    <a href="#products">Продукты</a>
                </li>
                <li className={styles.headerItem}>
                    <a href="#dev">Вакансии</a>
                </li>
                <li className={styles.headerItem}>
                    <a href="#feedback">Контакты</a>
                </li>
            </ul>
            <button className={styles.signIn}>
                Войти
            </button>
        </div>
    </header>
  )
}

export default Header