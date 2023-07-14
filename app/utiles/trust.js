import { ethers } from "ethers"

function getTrustWalletFromWindow() {
  const isTrustWallet = (ethereum) => {
    const trustWallet = !!ethereum.isTrust
    return trustWallet
  }
  const injectedProviderExist =
    typeof window !== "undefined" && typeof window.ethereum !== "undefined"

  if (!injectedProviderExist) {
    return null
  }

  if (isTrustWallet(window.ethereum)) {
    return window.ethereum
  }

  if (window.ethereum?.providers) {
    return window.ethereum.providers.find(isTrustWallet) ?? null
  }

  return window["trustwallet"] ?? null
}

export async function getTrustWalletInjectedProvider(
  { timeout } = { timeout: 3000 }
) {
  const provider = getTrustWalletFromWindow()

  if (provider) {
    return provider
  }

  return listenForTrustWalletInitialized({ timeout })
}

async function listenForTrustWalletInitialized(
  { timeout } = { timeout: 3000 }
) {
  return new Promise((resolve) => {
    const handleInitialization = () => {
      resolve(getTrustWalletFromWindow())
    }

    window.addEventListener("trustwallet#initialized", handleInitialization, {
      once: true,
    })

    setTimeout(() => {
      window.removeEventListener(
        "trustwallet#initialized",
        handleInitialization
      )
      resolve(null)
    }, timeout)
  })
}
export const connectToTrust = async () => {
  if (window.ethereum) {
    try {
      const injectedProvider = await getTrustWalletInjectedProvider()

      const account = await injectedProvider.request({
        method: "eth_requestAccounts",
      })

      const provider = new ethers.providers.Web3Provider(injectedProvider)

      const signer = provider.getSigner()

      const address = await signer.getAddress()

      return { wallet: "Trust", address, provider }
    } catch (error) {
      console.error("Error connecting to TrustWallet:", error)
    }
  } else {
    console.error("TrustWallet extension not detected")
  }
}
