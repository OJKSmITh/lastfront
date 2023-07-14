import { useCallback, useEffect, useRef } from "react"
import ConnectButton from "../button/connectButton"
import LiquidityInput from "../inputBox/liquidityInput"
import styles from "./depositModal.module.css"

const DepositModal = ({ setModal }: { setModal: any }) => {
  const wrapperRef = useRef<HTMLDivElement>(null)

  const handler = useCallback(
    (e: any) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        console.log("ddd")
        setModal(false)
      }
    },
    [wrapperRef.current]
  )

  useEffect(() => {
    document.addEventListener("mousedown", handler)
    return () => {
      document.removeEventListener("mousedown", handler)
    }
  })

  return (
    <div className={styles.outer}>
      <div className={styles.container} ref={wrapperRef}>
        <div className={styles.header}>
          <h1>Add Liquidity</h1>
        </div>
        <div className={styles.content}>
          <div className={styles.txt}>deposit amount</div>
          <LiquidityInput />
          <LiquidityInput />
          <ConnectButton
            width={""}
            height={""}
            color={"#fff"}
            padding={"20px"}
            background={"#1FC7D4"}
            border={"none"}
            borderRadius={"16px"}
            fontSize={"16px"}
            fontFamily={""}
            fontWeight={"600"}
            cursor={"pointer"}
            letterSpacing={"0.03rem"}
            onClick={function (): void {
              throw new Error("Function not implemented.")
            }}
            web3Provider={""}
          >
            Enter an amount
          </ConnectButton>
        </div>
      </div>
    </div>
  )
}

export default DepositModal
