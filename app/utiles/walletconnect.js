import { useState } from "react"
import { ethers } from "ethers"
import { EthereumProvider } from "@walletconnect/ethereum-provider"

const APIKEY = "d08138067ca45302f289ec7251a35916"

export const connectToWalletConnect = () => {
  const [qrCodeUri, setQrCodeUri] = useState(null)

  const handleLogin = async () => {
    try {
      const walletConnectProvider = await EthereumProvider.init({
        projectId: APIKEY,
        chains: [421613],
        showQrModal: true,
        methods: ["eth_accounts", "eth_sendTransaction"],
        events: [
          "session_request",
          "session_update",
          "session_reject",
          "call_request",
          "disconnect",
          "connect",
          "reset",
        ],
      })

      walletConnectProvider.on("connect", () => {
        setQrCodeUri(null)
      })

      const uri = await walletConnectProvider.connect()
      setQrCodeUri(uri)

      const walletConnectprovider = new ethers.providers.JsonRpcProvider(
        walletConnectProvider
      )

      const signer = walletConnectprovider.getSigner()
    } catch (error) {
      if (error.message === "User closed modal") {
        console.log("WalletConnect Closed")
        setQrCodeUri(null)
      } else {
        console.error(error)
        setQrCodeUri(null)
      }
    }
  }
  return handleLogin
}
