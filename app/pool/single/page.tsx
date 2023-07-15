"use client"
import PoolIntro from "@/app/components/pool/intro/poolIntro"
import styles from "./page.module.css"
import { SinglePairList } from "@/app/contents/pool/singlepair"

const singlePool = () => {
  return (
    <div className={styles.container}>
      <PoolIntro />
      <div style={{ background: "#faf9fa", padding: "24px 32px", height: "100%" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
          <SinglePairList text="ARB" top={0} radius1={2} radius2={2} />
          <SinglePairList text="USDT" />
          <SinglePairList text="ETH" radius3={2} radius4={2} />
        </div>
      </div>
    </div>
  )
}

export default singlePool
