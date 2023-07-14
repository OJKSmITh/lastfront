// "use client"
// import { ethers } from "ethers"
// import Web3Modal from "web3modal"
// import { useState } from "react"

// const ConnectWallet = () => {
//   const [web3provider, setWeb3provider] = useState("")

//   console.log(web3provider)

//   const connect = async () => {
//     try {
//       if (!window.ethereum) {
//         alert("지갑설치하세요")
//       }

//       let web3modal = new Web3Modal({
//         cacheProvider: true,
//         providerOptions: {},
//       })
//       const web3ModalInstance = await web3modal.connect()
//       const web3ModalProvider = new ethers.BrowserProvider(web3ModalInstance)
//       const signer = await web3ModalProvider.getSigner()
//       if (web3ModalProvider) {
//         setWeb3provider(signer.address)
//       }
//     } catch (e) {
//       console.error(e)
//     }
//   }

//   return (
//     <>
//       {web3provider === "" ? (
//         <>
//           <button onClick={connect} style={{ color: "blue" }}>
//             connect wallet
//           </button>
//         </>
//       ) : (
//         <div>
//           <p style={{ color: "green" }}>connected</p>
//           <p style={{ color: "blue" }}>address: {web3provider}</p>
//         </div>
//       )}
//     </>
//   )
// }

// export default ConnectWallet
