"use client"
import { ethers } from "ethers"
import Web3Modal from "web3modal"
import { useState } from "react"

interface buttonProps {
  width: string
  height: string
  color: string
  padding: string
  background: string
  border: string
  borderRadius: string
  fontSize: string
  fontFamily: string
  fontWeight: string
  cursor: string
  letterSpacing: string
  children: string
  onClick: () => void
  web3Provider: string
}

const ConnectButton = ({
  width,
  height,
  color,
  padding,
  background,
  border,
  borderRadius,
  fontSize,
  fontFamily,
  fontWeight,
  cursor,
  letterSpacing,
  children,
  onClick,
  web3Provider,
}: buttonProps) => {
  // const [web3provider, setWeb3provider] = useState("")

  // console.log(web3provider)

  // const connect = async () => {
  //   try {
  //     if (window.ethereum == null) {
  //       alert("지갑설치하세요")
  //     }

  //     let web3modal = new Web3Modal({
  //       cacheProvider: true,
  //       providerOptions: {},
  //     })
  //     const web3ModalInstance = await web3modal.connect()
  //     const web3ModalProvider = new ethers.BrowserProvider(web3ModalInstance)
  //     const signer = await web3ModalProvider.getSigner()
  //     if (web3ModalProvider) {
  //       setWeb3provider(signer.address)
  //     }
  //   } catch (e) {
  //     console.error(e)
  //   }
  // }

  // console.log("bdd")

  return (
    <>
      {web3Provider === "" ? (
        <>
          <button
            onClick={onClick}
            style={{
              width,
              height,
              color,
              padding,
              background,
              border,
              borderRadius,
              fontSize,
              fontFamily,
              fontWeight,
              cursor,
              letterSpacing,
            }}
          >
            {children}
          </button>
        </>
      ) : (
        <div>
          <p style={{ color: "blue" }}>address: {web3Provider}</p>
        </div>
      )}
    </>
  )
}

export default ConnectButton
