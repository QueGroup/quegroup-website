import styles from './Header.module.css';

const Header : React.FC = () => {
  return (
    <header>
        <div className={styles.header}>
            <div className={styles.mainLogo}>
                <img src='/img/main-logo.svg'/>
            </div>
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