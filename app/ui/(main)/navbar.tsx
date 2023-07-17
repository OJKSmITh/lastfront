"use client"

import Link from "next/link"
import { Rubik_Gemstones } from "next/font/google"
import { useEffect, useState } from "react"
import NavModal from "@/app/components/modal/navModal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCookie } from "@fortawesome/free-solid-svg-icons"
import { getTrustWalletInjectedProvider } from "@/app/utiles/trust"
import ConnectWalletModal from "@/app/components/modal/connectWalletModal"
import { Button } from "@/app/components/button/button"
import { Custom2 } from "@/app/components/modal2/styled/custom2"
import { ConnectWallet } from "../../contents/connectwalllet/connetwallet"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { ethers } from "ethers"
import { setProvider } from "@/redux/reducer/provider"
import { Container, Logo } from "./styled/navbar.styled"
import NavbarMenu from "./content/navbarMenu"
import SuccessButton from "./content/successButton"

interface WalletState {
  wallet: string
  signer: string
}

const rubikGemstones = Rubik_Gemstones({
  weight: "400",
  subsets: ["latin"],
})

const Navbar = () => {
  const dispatch = useDispatch()
  const wallet = useSelector<RootState, WalletState>((state) => state.wallet)
  const account = wallet.signer
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [hasProvider, setHasProvider] = useState<boolean | null>(null)
  console.log("modalIsOpen", modalIsOpen)

  const setProviderState = async (wallet: WalletState) => {
    let provider
    switch (wallet.wallet) {
      case "MetaMask":
        provider = new ethers.providers.Web3Provider(window.ethereum)
        dispatch(setProvider(provider))
        break
      case "Trust":
        const injectedProvider = await getTrustWalletInjectedProvider()
        provider = new ethers.providers.Web3Provider(injectedProvider)
        dispatch(setProvider(provider))
        break
      case "WalletConnect":
        break
      case "none":
        dispatch(setProvider("none"))
        break
    }
  }

  useEffect(() => {
    setProviderState(wallet)
  }, [])

  return (
    <Container>
      <Link href={"/"}>
        <Logo>
          <FontAwesomeIcon icon={faCookie} color="#8B5927" />
          <h3 className={rubikGemstones.className}>Solar DeFI</h3>
        </Logo>
      </Link>
      <NavbarMenu />
      {account === "none" ? (
        <Button
          width={12}
          height={2}
          onclick={() => setModalIsOpen(true)}
          text={"Connect Wallet"}
        ></Button>
      ) : (
        <SuccessButton />
      )}
      {/* <Button
        width={12}
        height={2}
        onclick={() => setModalIsOpen(true)}
        text={"Connect Wallet"}
      ></Button>
      <SuccessButton /> */}
      <Custom2
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        width={793}
        height={491}
        content={<ConnectWallet isModal={setModalIsOpen} />}
      />
      {/* {connectModal && <ConnectWalletModal setConnectModal={setConnectModal} />} */}
    </Container>
  )
}

export default Navbar
