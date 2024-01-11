import styles from './isLoading.module.scss';

const IsLoading: React.FC = () => {
  return (
      <div>
          <div className={styles.main}>
              <img src='/img/main-logo.svg' className={styles.logo} alt='Логотип Que' width={50} height={50}/>
              <h1 className={styles.title}>Que</h1>
          </div>
      </div>
  )
}

export default IsLoading