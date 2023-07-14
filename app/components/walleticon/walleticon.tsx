import { styled } from "styled-components"
import { Span } from "../span/span"
import { useDispatch } from "react-redux"
import { setWallet, setSigner } from "@/redux/reducer/wallet"
import { setProvider } from "@/redux/reducer/provider"

export interface IWalletIcon {
  image: string
  name: string
  onclick: any
  isModal: (value: boolean) => void
}

const WalletIconST = styled.img`
  width: 3rem;
  height: 3rem;
`

const WapperST = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  cursor: pointer;
`

export const WalletIcon: React.FC<IWalletIcon> = ({
  image,
  name,
  onclick,
  isModal,
}) => {
  const dispatch = useDispatch()

  const clickHandler = async () => {
    const { wallet, address, provider } = await onclick()
    dispatch(setWallet(wallet))
    dispatch(setSigner(address))
    dispatch(setProvider(provider))
    isModal(false)
    console.log(wallet, address, provider)
  }

  return (
    <>
      <WapperST onClick={clickHandler}>
        <WalletIconST src={image} alt="" />
        <Span size={0.7} text={name}></Span>
      </WapperST>
    </>
  )
}
