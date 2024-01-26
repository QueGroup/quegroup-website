import styles from './Product.module.scss';
import React, { useEffect, useState } from "react";

const Product : React.FC = () => {

    const [isDisabled, setIsDisabled] = useState<number>(0);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const current = window.scrollY
            console.log(current)

            if (current < 3200) {
                setIsDisabled(0)
            } else if (current > 3200 && current <= 3500 && isDisabled !== 1) {
                setIsDisabled(1)
            } else if (current > 3800 && isDisabled !== 2) {
                setIsDisabled(2)
            }
        })
    }, [isDisabled])

  return (
    <article className={styles.block} id="products">
        <div className={styles.intro}>
            <div className={styles.introBlock}></div>
            <div>
                <div className={styles.titleBlock}>
                    <h2 className={styles.title}>
                        <p className={`${styles.title} ${isDisabled === 0 ? '' : 'disabled'}`}>Quecount</p>
                        <p className={`${styles.title} ${isDisabled === 1 ? '' : 'disabled'}`}>Querendo</p>
                        <p className={`${styles.title} ${isDisabled === 2 ? '' : 'disabled'}`}>Quevent</p>
                    </h2>
                    <span className={styles.users}>О продукте</span>
                </div>
                <div className={styles.textBlock}>
                    <p className={`${styles.text} ${isDisabled === 0 ? '' : 'disabled'}`}>Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать.</p>
                    <p className={`${styles.text} ${isDisabled === 1 ? '' : 'disabled'}`}>му не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать.</p>
                    <p className={`${styles.text} ${isDisabled === 2 ? '' : 'disabled'}`}>всем привет с вами я</p>
                </div>
                <div className={styles.introButtons}>
                    <button className={styles.introButton}>Подробнее</button>
                    <button className={`${styles.introButton} ${styles.tgButton}`}>
                        <img src='/img/tg.svg' className={styles.tg} alt="логотип тг"></img>
                    </button>
                    <button className={`${styles.introButton} ${styles.tgButton}`}>
                        <img src='/img/tg.svg' className={styles.tg} alt="логотип тг"></img>
                    </button>
                    <button className={`${styles.introButton} ${styles.tgButton}`}>
                        <img src='/img/tg.svg' className={styles.tg} alt="логотип тг"></img>
                    </button>
                </div>
            </div>
            <div className={styles.points}>
                <div className={`${styles.point} ${isDisabled === 0 ? styles.pointActive : ''}`}></div>
                <div className={`${styles.point} ${isDisabled === 1 ? styles.pointActive : ''}`}></div>
                <div className={`${styles.point} ${isDisabled === 2 ? styles.pointActive : ''}`}></div>
            </div>
        </div>
    </article>
  )
}

export default Product