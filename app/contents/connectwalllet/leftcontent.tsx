import { styled } from "styled-components"
import { WalletIcon, IWalletIcon } from "@/app/components/walleticon/walleticon"
import React, { ReactEventHandler } from "react"
import { Span } from "@/app/components/span/span"

interface ILeftContent {
  data: IWalletIcon[]
}

const WrapST = styled.div`
  padding: 32px;
  width: 408px;
  height: 500px;
  background: #fff;
`

export const IconWrapST = styled.div`
  padding: 0px 16px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 24px;
  column-gap: 16px;
`

const TextST = styled.div`
  padding-top: 24px;
  padding-bottom: 32px;
  line-height: 1.5;
  font-weight: 400;
  color: #7a6eaa;
  font-size: 14px;
`

export const LeftContent: React.FC<ILeftContent> = ({ data }) => {
  const icons = data.map((v, i) => {
    return (
      <WalletIcon
        key={i}
        image={v.image}
        name={v.name}
        onclick={v.onclick}
        isModal={v.isModal}
      ></WalletIcon>
    )
  })
  return (
    <>
      <WrapST>
        <Span size={1.5} text={"Connect Wallet"}></Span>
        <TextST>
          Start by connecting with one of the wallets below. Be sure to store
          your private keys or seed phrase securely. Never share them with
          anyone.
        </TextST>
        <IconWrapST>{icons}</IconWrapST>
      </WrapST>
    </>
  )
}
