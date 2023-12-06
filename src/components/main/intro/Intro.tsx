import styles from './Intro.module.scss';
import React from "react";
import {NavLink} from "react-router-dom";

const Intro : React.FC = () => {
  return (
    <article>
        <div className={styles.intro}>
            <div className={styles.introBlock}></div>
            <div>
                <div className={styles.titleBlock}>
                    <h2 className={styles.title}>
                        <p className={styles.title}>Que</p>
                    </h2>
                    <span className={styles.users}>120,000+ пользователей</span>
                </div>
                <p className={styles.slogan}>Обьединяем людей одним действием.</p>
                <div className={styles.introButtons}>
                    <button className={styles.introButton}>Подробнее</button>
                    <button className={styles.introButton}>Продукты</button>
                    <button className={`${styles.introButton} ${styles.tgButton}`}>
                        <img src='/img/tg.svg' className={styles.tg}></img>
                    </button>
                </div>
            </div>
        </div>
    </article>
  )
}

export default Intro