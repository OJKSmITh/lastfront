"use client"

import { useState, useEffect } from "react"
import detectEthereumProvider from "@metamask/detect-provider"
import { useDispatch } from "react-redux"
import { setAccount } from "@/redux/slice/accountSlice"

export const connectMetamask = () => {
  // const initialState = { accounts: [] }
  const [wallet, setWallet] = useState(initialState)
  // const [hasProvider, setHasProvider] = useState(null)

  // const isMetaMask = injectedProvider ? window.ethereum.isMetaMask : false

  // if(typeof window.ethereum !== 'undefined'){
  //   injectedProvider = true
  //   console.log(window.ethereum)
  // }

  const updateWallet = async (accounts) => {
    setWallet({ accounts })
  }

  const dispatch = useDispatch()

  const handleConnect = async () => {
    try {
      window.ethereum.isMetaMask = false
      const account = await window.ethereum.request({
        method: "eth_requestAccounts",
      })
      if (account.length > 0) {
        return
      }
      console.log(account)
      dispatch(setAccount(account))
      return account
    } catch (e) {
      console.error(e)
    }
  }

  handleConnect()

  // useEffect(() => {
  //   const getProvider = async () => {
  //     const provider = await detectEthereumProvider({ silent: true })
  //     console.log(provider)
  //     setHasProvider(Boolean(provider)) // transform provider to true or false
  //   }
  //   getProvider()
  // }, [])
  return wallet
}
