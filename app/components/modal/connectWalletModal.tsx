"use client"

import Link from "next/link"
import styles from "./connectWalletModal.module.css"
import { useCallback, useEffect, useRef } from "react"
import { connectMetamask } from "@/app/hooks/metamaskre"
import { connect } from "@/app/hooks/trustre"
import { useDispatch } from "react-redux"
import { setAccount } from "@/redux/slice/accountSlice"

const walletList = [
  {
    click: () => {
      console.log("1")
      connectMetamask()
    },
    image: "https://assets.pancakeswap.finance/web/wallets/metamask.png",
    name: "Metamask",
    line: "none",
  },
  {
    click: () => {
      connect()
    },
    image: "https://assets.pancakeswap.finance/web/wallets/trust.png",
    name: "Trust Wallet",
    line: "none",
  },
  {
    click: () => {},
    image: "https://assets.pancakeswap.finance/web/wallets/walletconnect.png",
    name: "WalletConnect",
    line: "none",
  },
  {
    click: () => {},
    image: "https://assets.pancakeswap.finance/web/wallets/coinbase.png",
    name: "Coinbase Wallet",
    line: "line-through",
  },
  {
    click: () => {},
    image: "https://assets.pancakeswap.finance/web/wallets/opera.png",
    name: "Opera Wallet",
    line: "line-through",
  },
  {
    click: () => {},
    image: "https://assets.pancakeswap.finance/web/wallets/brave.png",
    name: "Brave Wallet",
    line: "line-through",
  },
  {
    click: () => {},
    image: "https://assets.pancakeswap.finance/web/wallets/binance.png",
    name: "Binance Wallet",
    line: "line-through",
  },
]

const ConnectWalletModal = ({ setConnectModal }: { setConnectModal: any }) => {
  const dispatch = useDispatch()

  const wrapperRef = useRef<HTMLDivElement>(null)

  const handler = useCallback(
    (e: any) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        console.log("ddd")
        setConnectModal(false)
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

  const selectWallet = (index: number) => {
    switch (index) {
      case (index = 0):
        if (window.ethereum) {
          console.log("11")
          console.log(window.ethereum)
          const metaConnect = async () => {
            const account = await window.ethereum.request({
              method: "eth_requestAccounts",
            })
            console.log("account:", account)
            setAccount(account)
          }
          metaConnect()
          console.log("22")
        }
        break
      case (index = 1):
        connect()
        break
    }
  }

  return (
    <div className={styles.outer}>
      <div className={styles.container} ref={wrapperRef}>
        <div className={styles.selectWallet}>
          <div className={styles.textWrapper}>
            <h4 className={styles.subject}>Connect Wallet</h4>
            <div className={styles.textInfo}>
              Start by connecting with one of the wallets below. Be sure to
              store your private keys or seed phrase securely. Never share them
              with anyone.
            </div>
            <div className={styles.wallets}>
              {walletList.map((wallet, i) => (
                <div
                  className={styles.buttonWrapper}
                  onClick={() => {
                    selectWallet(i)
                  }}
                  key={i}
                  style={{ textDecoration: wallet.line }}
                >
                  <img src={wallet.image} className={styles.walletImg} />
                  <div className={styles.walletname}>{wallet.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.noWallet}>
          <div className={styles.noWalletWrapper}>
            <h1>Haven't got a wallet yet?</h1>
            <div>
              <img
                src="https://cdn.pancakeswap.com/wallets/wallet_intro.png"
                className={styles.learnImg}
              />
            </div>
            <Link href="" className={styles.link}>
              Learn How to Connect
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConnectWalletModal
