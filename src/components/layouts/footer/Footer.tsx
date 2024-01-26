import styles from './Footer.module.scss';
import {NavLink} from "react-router-dom";
import React from "react";

const Footer : React.FC = () => {

    const toTop = () => {
        window.scrollTo(0, 0);
    }

  return (
    <footer className={styles.footer}>
        <div className={styles.footerMainInfo}>
            <NavLink to="/" className={styles.queInfo} onClick={() => toTop()}>
                <img src='/img/main-logo.svg' alt="логотип"/>
                <p className={styles.Que}>Que</p>
            </NavLink>
            <p className={styles.queData}>”Que” • 2022 - 2023</p>
            <p className={styles.queData}>Все права закреплены за правообладателем.</p>
            <p className={styles.queData}>Проект является час- тью “Open Source” сообщества.</p>
        </div>
        <div className={styles.navigation}>
            <h3 className={styles.navigationTitle}>Карта сайта</h3>
            <ul className={styles.navigationList}>
                <li className={styles.navigationItem}>Главная</li>
                <li className={styles.navigationItem}>О проекте</li>
                <li className={styles.navigationItem}>Продукты</li>
                <li className={styles.navigationItem}>Вакансии</li>
                <li className={styles.navigationItem}>Контакты</li>
            </ul>
        </div>
        <div className={styles.navigation}>
            <h3 className={styles.navigationTitle}>О Компании</h3>
            <p className={styles.navigationItem}>Россия, Санкт-Петербург</p>
            <p className={styles.navigationItem}>Ул. Юнкеров 131, лит. А</p>
            <p className={styles.navigationItem}>Тел.:+7 (958) 756-35-64</p>
            <p className={styles.navigationItem}>ИНН: 6547 8521 4963</p>
            <p className={styles.navigationItem}>Документы и справки</p>
            <NavLink to="politics" className={styles.navigationItem}>Политика компании</NavLink>
            <p className={styles.navigationItem}>Нац. проекты России</p>
        </div>
        <div className={styles.navigation}>
            <h3 className={styles.navigationTitle}>Социальные сети</h3>
            <p className={styles.navigationItem}>Наш блог ВКонтакте</p>
            <p className={styles.navigationItem}>Наш блог Telegram</p>
            <p className={styles.navigationItem}>Наш блог Instagram</p>
            <p className={styles.navigationItem}>Наш канал YouTube</p>
            <p className={styles.navigationItem}>Наш канал RuTube</p>
            <p className={styles.navigationItem}>Наш канал Twitch</p>
        </div>
        <div className={styles.socialMedia}>
            <div className={styles.socialFooter}>
                <img src='/img/tgft.svg' alt="tg"></img>
            </div>
            <div className={styles.socialFooter}>
                <img src='/img/vkft.svg' alt="tg"></img>
            </div>
            <div className={styles.socialFooter}>
                <img src='/img/ytft.svg' alt="tg"></img>
            </div>
            <div className={styles.socialFooter}>
                <img src='/img/instft.svg' alt="tg"></img>
            </div>
        </div>
    </footer>
  )
}

export default Footer