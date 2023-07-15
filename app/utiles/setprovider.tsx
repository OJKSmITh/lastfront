import { ethers } from "ethers"
import { getTrustWalletInjectedProvider } from "./trust"

interface WalletState {
  wallet: string
  signer: string
}

export const setProviders = async (wallet: WalletState) => {
  let provider
  switch (wallet.wallet) {
    case "MetaMask":
      provider = new ethers.providers.Web3Provider(window.ethereum)
      return provider
    case "Trust":
      const injectedProvider = await getTrustWalletInjectedProvider()
      provider = new ethers.providers.Web3Provider(injectedProvider)
      return provider
    case "WalletConnect":
      return provider
    case "none":
      return provider
  }
}
