import styles from "./liquidityInput.module.css"

const LiquidityInput = () => {
  return (
    <div className={styles.container}>
      <div className={styles.fromTo}>
        <div className={styles.select}>
          <div className={styles.token}>
            <img
              src="	https://assets.pancakeswap.finance/web/native/5.png"
              style={{ width: "24px" }}
            />
            <div>GOR</div>
            <img />
          </div>
          <div className={styles.balance}>Balance: 0</div>
        </div>
        <div className={styles.inputWrapper}>
          <div className={styles.inputLayout}>
            <input placeholder={"0.0"} className={styles.inputBox} />
          </div>
          <div className={styles.exchange}>
            <div className={styles.rateText}>~539,698,250.39 USD</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LiquidityInput
