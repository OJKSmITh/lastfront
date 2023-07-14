"use client"
import PoolIntro from "@/app/components/pool/intro/poolIntro"
import styles from "./page.module.css"
import { SinglePairList } from '@/app/contents/pool/singlepair'


const singlePool = () => {
  return (
    <div className={styles.container}>
      <PoolIntro />
      <SinglePairList text='ARB' top={5.5} radius1={2} radius2={2}  />
      <SinglePairList text='USDT'/>
      <SinglePairList text='ETH' radius3={2} radius4={2} />
    </div>
  )
}

export default singlePool

