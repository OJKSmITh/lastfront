"use client"

import { useDispatch } from "react-redux"
import { setAccount } from "@/redux/slice/accountSlice"

const handleConnect = async () => {
  const dispatch = useDispatch()

  const account = await window.ethereum.request({
    method: "eth_requestAccounts",
  })
  dispatch(setAccount(account))
  return account
}

export default handleConnect
