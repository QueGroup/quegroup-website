import styles from "./Loveblock.module.scss";
import React, { useEffect, useState } from "react";
import products1 from "./images/Products1.svg";
import products2 from "./images/Products2.svg";
import products3 from "./images/Products3.svg";
import apple from "./images/Apple.svg";
import playmarket from "./images/Play_Market.svg";

const Product : React.FC = () => {

	const [isDisabled, setIsDisabled] = useState<number>(0);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			const current = window.scrollY;
			console.log(current);

			if (current < 3200) {
				setIsDisabled(0);
			} else if (current > 3200 && current <= 3500 && isDisabled !== 1) {
				setIsDisabled(1);
			} else if (current > 3800 && isDisabled !== 2) {
				setIsDisabled(2);
			}
		});
	}, [isDisabled]);

	return (
		<article className={styles.block} id="products">
			<div className={`${styles.intro} ${styles.introReverse}`}>
				<div className={styles.introBlock}></div>
				<div className={styles.description}>
					<div className={styles.titleBlock}>
						<h2 className={styles.title}>
							<p className={`${styles.title} ${isDisabled === 0 ? "" : "disabled"}`}>
								<img src={products1} alt="Queacc"></img>
							</p>
							<p className={`${styles.title} ${isDisabled === 1 ? "" : "disabled"}`}>
								<img src={products2} alt="Querendo"></img>
							</p>
							<p className={`${styles.title} ${isDisabled === 2 ? "" : "disabled"}`}>
								<img src={products3} alt="Quevent"></img>
							</p>
						</h2>
						<span className={`${styles.users} ${styles.usersMiddle}`}>О продукте</span>
					</div>
					<div className={styles.textBlock}>
						<p className={`${styles.text} ${isDisabled === 0 ? "" : "disabled"}`}>Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать.</p>
						<p className={`${styles.text} ${isDisabled === 1 ? "" : "disabled"}`}>му не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать.</p>
						<p className={`${styles.text} ${isDisabled === 2 ? "" : "disabled"}`}>всем привет с вами я</p>
					</div>
					<div className={styles.introButtons}>
						<button className={styles.introButton}>Подробнее</button>
						<button className={`${styles.introButton} ${styles.tgButton}`}>
							<img src={apple} className={styles.tg} alt="логотип apple"></img>
						</button>
						<button className={`${styles.introButton} ${styles.tgButton}`}>
							<img src={playmarket} className={styles.tg} alt="логотип playmarket"></img>
						</button>
					</div>
				</div>
				<div className={styles.points}>
					<div className={`${styles.point} ${isDisabled === 0 ? styles.pointActive : ""}`}></div>
					<div className={`${styles.point} ${isDisabled === 1 ? styles.pointActive : ""}`}></div>
					<div className={`${styles.point} ${isDisabled === 2 ? styles.pointActive : ""}`}></div>
				</div>
			</div>
		</article>
	);
};

export default Product;