import { ethers } from "ethers"

export const connectToMetaMask = async () => {
  if (window.ethereum) {
    try {
      const account = await window.ethereum.request({
        method: "eth_requestAccounts",
      })

      const provider = new ethers.providers.Web3Provider(window.ethereum)

      const signer = provider.getSigner()

      const address = await signer.getAddress()
      return { wallet: "MetaMask", address, provider, signer }
    } catch (error) {
      console.error("Error connecting to MetaMask:", error)
    }
  } else {
    console.error("MetaMask extension not detected")
  }
}
