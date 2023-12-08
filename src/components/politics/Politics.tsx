import Handlebars from 'handlebars';
import {useState} from "react";
import styles from './Politics.module.scss';

interface context {
    newText: string;
}

const Politics = () => {
    const [activeButton, setActiveButton] = useState(null);
    const [textType, setTextType] = useState(0);

    const typeTextMap: Map<number, string> = new Map([
        [0, 'Текст на русском'],
        [1, 'Текст на русском'],
        [2, 'test3']
    ]);

    const handleTextType = (index: number): void => {
        setTextType(index);
    }

    const handleButtonClick = (index: number): void => {
        //@ts-ignore
        setActiveButton(index);
        handleTextType(index);
    };

    const handleChangeText = () => {
        const newText : string = typeTextMap.get(textType) || 'Default Text';
        const source : string = '<div>' + newText + '</div>'; // Создаем строку с вашим шаблоном
        const template = Handlebars.compile(source); // Компилируем шаблон
        const context : context = {
            newText: newText,
        };
        const html : string = template(context); // Заполняем шаблон данными
        return html;
    };


    return (
        <section className={styles.politics}>
            <div className={styles.politicsButtons}>
                <div className={styles.politicsType}>
                    {/* eslint-disable-next-line @typescript-eslint/no-unused-expressions */}
                    <button
                        className={`${styles.politicsTypeButton} ${activeButton === 0 ? styles.politicsTypeButtonActive : ""}`}
                        onClick={(): void => {
                            handleButtonClick(0)
                        }}>Конфиденциальность
                    </button>
                    {/* eslint-disable-next-line @typescript-eslint/no-unused-expressions */}
                    <button
                        className={`${styles.politicsTypeButton} ${activeButton === 1 ? styles.politicsTypeButtonActive : ""}`}
                        onClick={(): void => {
                            handleButtonClick(1)
                        }}>Пользователям
                    </button>
                    {/* eslint-disable-next-line @typescript-eslint/no-unused-expressions */}
                    <button
                        className={`${styles.politicsTypeButton} ${activeButton === 2 ? styles.politicsTypeButtonActive : ""}`}
                        onClick={(): void => {
                            handleButtonClick(2)
                        }}>Лицензия
                    </button>
                </div>
                <button className={styles.politicsSearch}>
                    <img src='/img/search.png' className={styles.politicsSearchLogo}></img>
                </button>
            </div>
            <div className={styles.politicsBlock}>
                <div className={styles.politicsText} dangerouslySetInnerHTML={{__html: handleChangeText()}}></div>
            </div>
        </section>
    )
}

export default Politics;