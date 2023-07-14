"use client"

import { setSigner, setWallet } from "@/redux/reducer/wallet"
import { ItemList, SubTitle } from "../styled/successButton.styled"
import { useDispatch } from "react-redux"

const SuccessSubMenu = () => {
  const dispatch = useDispatch()

  const disconnect = () => {
    console.log(window.ethereum._handleDisconnect)
    if (window.ethereum && window.ethereum._handleDisconnect) {
      window.ethereum._handleDisconnect()
      dispatch(setWallet("none"))
      dispatch(setSigner("none"))
    } else {
      console.log("not support")
    }
  }

  return (
    <ItemList>
      <SubTitle onClick={disconnect}>Disconnect</SubTitle>
    </ItemList>
  )
}

export default SuccessSubMenu
