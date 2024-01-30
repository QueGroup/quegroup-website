import styles from "./Loveblock.module.scss";
import React, { useEffect, useState } from "react";

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
				<div>
					<div className={styles.titleBlock}>
						<h2 className={styles.title}>
							<p className={`${styles.title} ${isDisabled === 0 ? "" : "disabled"}`}>
								<img src="/img/History1.svg" alt="История"></img>
							</p>
							<p className={`${styles.title} ${isDisabled === 1 ? "" : "disabled"}`}>
								<img src="/img/History2.svg" alt="Задачи"></img>
							</p>
							<p className={`${styles.title} ${isDisabled === 2 ? "" : "disabled"}`}>
								<img src="/img/History3.svg" alt="Команда"></img>
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
							<img src='/img/Notion.svg' className={styles.tg} alt="логотип тг"></img>
						</button>
						<button className={`${styles.introButton} ${styles.tgButton}`}>
							<img src='/img/License.svg' className={styles.tg} alt="логотип тг"></img>
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