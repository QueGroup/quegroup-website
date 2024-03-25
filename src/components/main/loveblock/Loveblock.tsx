import styles from "./Loveblock.module.scss";
import React, { useEffect, useState } from "react";
import history1 from "./images/History1.svg";
import history2 from "./images/History2.svg";
import history3 from "./images/History3.svg";
import notion from "./images/Notion.svg";
import licence from "./images/License.svg";

const Loveblock : React.FC = () => {

	const [isDisabled, setIsDisabled] = useState<number>(0);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			const current = window.scrollY;

			if (current < 1000) {
				setIsDisabled(0);
			} else if (current > 1000 && current <= 1300 && isDisabled !== 1) {
				setIsDisabled(1);
			} else if (current > 1500 && isDisabled !== 2) {
				setIsDisabled(2);
			}
		});
	}, [isDisabled]);

	return (
		<article className={styles.block} id="project">
			<div className={styles.intro}>
				<div className={styles.introBlock}></div>
				<div className={styles.description}>
					<div className={styles.titleBlock}>
						<h2 className={styles.title}>
							<p className={`${styles.title} ${isDisabled === 0 ? "" : "disabled"}`}>
								<img src={history1} alt="История"></img>
							</p>
							<p className={`${styles.title} ${isDisabled === 1 ? "" : "disabled"}`}>
								<img src={history2} alt="Задачи"></img>
							</p>
							<p className={`${styles.title} ${isDisabled === 2 ? "" : "disabled"}`}>
								<img src={history3} alt="Команда"></img>
							</p>
						</h2>
						<span className={styles.users}>О компании</span>
					</div>
					<div className={styles.textBlock}>
						<p className={`${styles.text} ${isDisabled === 0 ? "" : "disabled"}`}>Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать.</p>
						<p className={`${styles.text} ${isDisabled === 1 ? "" : "disabled"}`}>му не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать.</p>
						<p className={`${styles.text} ${isDisabled === 2 ? "" : "disabled"}`}>всем привет с вами я</p>
					</div>
					<div className={styles.introButtons}>
						<button className={styles.introButton}>Подробнее</button>
						<button className={`${styles.introButton} ${styles.tgButton}`}>
							<img src={notion} className={styles.tg} alt="логотип тг"></img>
						</button>
						<button className={`${styles.introButton} ${styles.tgButton}`}>
							<img src={licence} className={styles.tg} alt="логотип тг"></img>
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

export default Loveblock;