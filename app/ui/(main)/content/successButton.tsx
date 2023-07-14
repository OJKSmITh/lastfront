"use client"

import { useSelector } from "react-redux"
import {
  Account,
  ImgWrapper,
  MainWrapper,
  SubWrapper,
} from "../styled/successButton.styled"
import { RootState } from "@/redux/store"
import SuccessBtnIcon from "./(icon)/successBtnIcon"
import SuccessBtnArrow from "./(icon)/successBtnArrow"
import SuccessSubMenu from "./successSubMenu"

interface WalletState {
  wallet: string
  signer: string
}

const SuccessButton = () => {
  const wallet = useSelector<RootState, WalletState>((state) => state.wallet)

  const shortAccount = `${wallet.signer.slice(0, 2)}...${wallet.signer.slice(
    -4
  )}`

  return (
    <MainWrapper>
      <SubWrapper>
        <ImgWrapper>
          <SuccessBtnIcon />
        </ImgWrapper>
        <Account>{shortAccount}</Account>
        <SuccessBtnArrow />
      </SubWrapper>
      <SuccessSubMenu />
    </MainWrapper>
  )
}

export default SuccessButton
