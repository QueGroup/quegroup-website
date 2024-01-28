import { useState } from 'react';
import styles from './Feedback.module.scss'

const Feedback = () => {

    const [isDisabled, setIsDisabled] = useState<boolean | number>(false);

    const handleDisabled = (n: number) => {
        if (!isDisabled) {
            setIsDisabled(n)
        } else {
            return setIsDisabled(false)
        }
    }

    const sendMail = (e: React.FormEvent) => {
        e.preventDefault();

        // const form = e.target as HTMLFormElement;
        // const name = (form.elements.namedItem("name") as HTMLInputElement).value;
        // const email = (form.elements.namedItem("email") as HTMLInputElement).value;
        // const message = (form.elements.namedItem("message") as HTMLInputElement).value;

        // const mailToLink = 'mailto:ptagankin@gmail.com?subject=Новое сообщение&body=Имя: ' + name + '%0D%0AEmail: ' + email + '%0D%0AСообщение: ' + message;

        // window.location.href = mailToLink;
    }


  return (
    <section className={styles.feedback} id="feedback">
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
        <div className={styles.FAQ}>
            <h2 className={styles.FAQtitle}>ЧаВо</h2>
            <ul className={styles.FAQlist}>
                <li className={`${styles.FAQitem} ${isDisabled === 1 || !isDisabled ? '' : 'disabled'}`} onClick={() => handleDisabled(1)}>
                    <div className={styles.FAQitemTitle}>
                        <p>Что такое Quecoin’ы?</p>
                        <p className={`${styles.FAQitemSymbol}`}>{!isDisabled ? '+' : '-'}</p>
                    </div>
                    <span className={`${styles.FAQdescription} ${isDisabled === 1 ? '' : 'disabled'}`}>Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать. Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать. Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь хозяев.</span>
                </li>
                <li className={`${styles.FAQitem} ${isDisabled === 2 || !isDisabled ? '' : 'disabled'}`} onClick={() => handleDisabled(2)}>
                    <div className={styles.FAQitemTitle}>
                        <p>Возможно ли удалить аккаунт?</p>
                        <p className={`${styles.FAQitemSymbol}`}>{!isDisabled ? '+' : '-'}</p>
                    </div>
                    <span className={`${styles.FAQdescription} ${isDisabled === 2 ? '' : 'disabled'}`}>Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать. Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать. Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь хозяев.</span>
                </li>
                <li className={`${styles.FAQitem} ${isDisabled === 3 || !isDisabled ? '' : 'disabled'}`} onClick={() => handleDisabled(3)}>
                    <div className={styles.FAQitemTitle}>
                        <p>Какие условия пользования?</p>
                        <p className={`${styles.FAQitemSymbol}`}>{!isDisabled ? '+' : '-'}</p>
                    </div>
                    <span className={`${styles.FAQdescription} ${isDisabled === 3 ? '' : 'disabled'}`}>Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать. Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать. Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь хозяев.</span>
                </li>
                <li className={`${styles.FAQitem} ${isDisabled === 4 || !isDisabled ? '' : 'disabled'}`} onClick={() => handleDisabled(4)}>
                    <div className={styles.FAQitemTitle}>
                        <p>Как восстановить аккаунт?</p>
                        <p className={`${styles.FAQitemSymbol}`}>{!isDisabled ? '+' : '-'}</p>
                    </div>
                    <span className={`${styles.FAQdescription} ${isDisabled === 4 ? '' : 'disabled'}`}>Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать. Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать. Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь хозяев.</span>
                </li>
                <li className={`${styles.FAQitem} ${isDisabled === 5 || !isDisabled ? '' : 'disabled'}`} onClick={() => handleDisabled(5)}>
                    <div className={styles.FAQitemTitle}>
                        <p>Что такое Quecoin’ы?</p>
                        <p className={`${styles.FAQitemSymbol}`}>{!isDisabled ? '+' : '-'}</p>
                    </div>
                    <span className={`${styles.FAQdescription} ${isDisabled === 5 ? '' : 'disabled'}`}>Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать. Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать. Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь хозяев.</span>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Feedback