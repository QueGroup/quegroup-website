import React from "react";
import Handlebars from "handlebars";
import {useState} from "react";
import styles from "./Politics.module.scss";
import typeTextMap from "./typeTextMap";
import search from "./search.png";

interface context {
    newText: string;
}

const Politics = () => {
	const [activeButton, setActiveButton] = useState(0);
	const [textType, setTextType] = useState(0);
	const [isSearch, setIsSearch] = useState(false);

	const handleSearch = () => {
		setIsSearch(true);
	};

	const handleTextType = (index: number): void => {
		setTextType(index);
	};

	const handleButtonClick = (index: number): void => {
		setActiveButton(index);
		handleTextType(index);
	};

	const titleText = (): string => {
		switch (textType) {
		case 1:
			return "Пользователям:";
		case 2:
			return "Лицензия:";
		default:
			return "Политика конфиденциальности:";
		}
	};

	const handleChangeText = () => {
		const newText : string = typeTextMap.get(textType) || "Default Text";
		const source : string = "<div>" + newText + "</div>";
		const template = Handlebars.compile(source);
		const context : context = {
			newText: newText,
		};
		const html : string = template(context);
		return html;
	};


	return (
		<section className={styles.politics}>
			<div className={styles.politicsButtons}>
				<div className={styles.politicsType}>
					{/* eslint-disable-next-line @typescript-eslint/no-unused-expressions */}
					<button
						className={`${activeButton === 0 ? styles.politicsTypeButtonActive : styles.politicsTypeButton}`}
						onClick={(): void => {
							handleButtonClick(0);
						}}>Конфиденциальность
					</button>
					{/* eslint-disable-next-line @typescript-eslint/no-unused-expressions */}
					<button
						className={`${activeButton === 1 ? styles.politicsTypeButtonActive : styles.politicsTypeButton}`}
						onClick={(): void => {
							handleButtonClick(1);
						}}>Пользователям
					</button>
					{/* eslint-disable-next-line @typescript-eslint/no-unused-expressions */}
					<button
						className={`${activeButton === 2 ? styles.politicsTypeButtonActive : styles.politicsTypeButton}`}
						onClick={(): void => {
							handleButtonClick(2);
						}}>Лицензия
					</button>
				</div>
				<div className={styles.politicsSearch} onClick={() => handleSearch()}>
					{!isSearch ? 
						<img src={search} className={styles.politicsSearchLogo} alt='поиск'></img> :
						<input type="text" placeholder='Поиск' className={styles.politicsInput}></input>
					}
				</div>
			</div>
			<div className={styles.politicsBlock}>
				<div className={styles.politicsTitle} dangerouslySetInnerHTML={{__html: titleText()}}></div>
				<div className={styles.politicsScroll}>
					<div className={styles.politicsText} dangerouslySetInnerHTML={{__html: handleChangeText()}}></div>
				</div>
			</div>
		</section>
	);
};

export default Politics;