import styles from './ErrorPage.module.scss'

const ErrorPage: React.FC = () => {
    return (
        <div className={styles.main}>
            <div className={styles.error}>
                <h2>Страница</h2>
                <p className={styles.errorInt}>404</p>
                <h2>Не найдена</h2>
            </div>
        </div>
    )
}

export default ErrorPage