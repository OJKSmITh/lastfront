import { connectToMetaMask } from "@/app/utiles/metamask"
import { connectToTrust } from "@/app/utiles/trust"
import { styled } from "styled-components"
import { connectToWalletConnect } from "@/app/utiles/walletconnect"
import { LeftContent } from "./leftcontent"
import { RightContent } from "./rightcontent"
import { IWalletIcon } from "@/app/components/walleticon/walleticon"

const WrapST = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 792px;
  height: 490px;
  border: 1px solid #000;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  animation: modal-show 1s;

  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
`

export const ConnectWallet: React.FC<{ isModal: (value: boolean) => void }> = ({
  isModal,
}) => {
  const walletList: IWalletIcon[] = [
    {
      image: "https://assets.pancakeswap.finance/web/wallets/metamask.png",
      name: "Metamask",
      onclick: connectToMetaMask,
      isModal: isModal,
    },
    {
      image: "https://assets.pancakeswap.finance/web/wallets/trust.png",
      name: "Trust Wallet",
      onclick: connectToTrust,
      isModal: isModal,
    },
    {
      image: "https://assets.pancakeswap.finance/web/wallets/walletconnect.png",
      name: "WalletConnect",
      onclick: connectToWalletConnect(),
      isModal: isModal,
    },
  ]
  return (
    <>
      <WrapST>
        <LeftContent data={walletList}></LeftContent>
        <RightContent></RightContent>
      </WrapST>
    </>
  )
}
