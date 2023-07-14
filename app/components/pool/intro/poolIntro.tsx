import styles from "./poolIntro.module.css"

const PoolIntro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <div className={styles.headerWrapper}>
          <div className={styles.header}>
            <h1>Farms</h1>
            <h2>Stake LP tokens to earn</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PoolIntro
