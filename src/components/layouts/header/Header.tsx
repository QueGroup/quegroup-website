import React from "react";
import styles from "./Header.module.scss";
import {NavLink} from "react-router-dom";
import mainLogo from "./main-logo.svg";
import { IoMdClose, IoMdOpen } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const Header : React.FC = () => {

	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(!open);
	};

	return (
		<header>
			<div className={styles.header}>
				<NavLink to="/" className={styles.mainLogo}>
					<img src={mainLogo} alt="главный логотип"/>
				</NavLink>
				<button type="button" className={styles.burgerButton} onClick={() => handleOpen()}>{!open ? <RxHamburgerMenu style={{width: "40px", height: "40px"}}/> : <IoMdClose style={{width: "40px", height: "40px"}}/>}</button>
				<ul className={styles.headerList} style={{ transform: `${open ? "translateY(0)" : "translateY(-100%)"}` }}>
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
	);
};

export default Header;
