import styles from './isLoading.module.scss';

const IsLoading: React.FC = () => {
  return (
      <div className={styles.main}>
          <img src='/img/main-logo.svg' alt='Логотип Que' width={50} height={50}/>
          <h1 className={styles.title}>Que</h1>
      </div>
  )
}

export default IsLoading