import React from "react";
import styles from "./isLoading.module.scss";
import mainLogo from "./main-logo.svg";

const IsLoading: React.FC = () => {
	return (
		<div>
			<div className={styles.main}>
				<img src={mainLogo} className={styles.logo} alt='Логотип Que' width={50} height={50}/>
				<h1 className={styles.title}>Que</h1>
			</div>
		</div>
	);
};

export default IsLoading;