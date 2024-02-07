import React from "react";
import styles from "../Feedback.module.scss";


interface Props {
    sendMail: React.FormEventHandler<HTMLFormElement>;
}

const Contactus:React.FC<Props> = ({sendMail}) => {
	return(
		<div className={styles.contactus}>
			<div className={styles.title}>Связаться с нами</div>
			<form className={styles.form} onSubmit={sendMail}>
				<input type="text" className={styles.inputField} placeholder="Имя/псевдоним" required></input>
				<input type="email" className={styles.inputField} placeholder="Электронная почта" required></input>
				<input type="text" className={`${styles.inputField} ${styles.inputFieldComment}`} placeholder="Сообщение" required></input>
				<div className={styles.formButtons}>
					<button type="reset" className={styles.formButton}>Очистить</button>
					<button type="submit" className={styles.formButton}>Отправить</button>
				</div>
			</form>
		</div>
	);
};

export default Contactus;

//FormEventHandler<HTMLFormElement>