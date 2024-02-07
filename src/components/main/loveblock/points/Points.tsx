import React from "react";
import styles from "../Loveblock.module.scss";


interface Props{
    sendMail: React.FormEventHandler<HTMLFormElement>;
}

const Points:React.FC<Props> = ({sendMail}) => {
    return(
        <div className={styles.points}>
					<div className={`${styles.point} ${isDisabled === 0 ? styles.pointActive : ""}`}></div>
					<div className={`${styles.point} ${isDisabled === 1 ? styles.pointActive : ""}`}></div>
					<div className={`${styles.point} ${isDisabled === 2 ? styles.pointActive : ""}`}></div>
		</div>
    );
};

export default Points;