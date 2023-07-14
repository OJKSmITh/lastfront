"use client"

import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import IsLogin from "@/app/components/login/isLogin"
import { useState } from "react"
import {
  Container,
  Item,
  ItemTxT,
  MovingImg,
  Wrapper,
} from "./styled/firstContent.styled"
import FirstButtonWrapper from "./content/firstContentBtnWrapper"

const FirstContent = () => {
  const [accounts, setAccounts] = useState<string[]>([])
  const account = useSelector((state: RootState) => state.wallet)
  console.log("account:::", account.signer)

  return (
    <Container>
      {account.signer !== "none" && <IsLogin />}
      <Wrapper>
        <Item>
          <ItemTxT fontSize="64px" color="#7645d9">
            The moon is made of cookies.
          </ItemTxT>
          <ItemTxT fontSize="20px" color="#280d5f">
            Trade, earn, and win crypto on the most popular decentralized
            platform in the galaxy.
          </ItemTxT>
          <FirstButtonWrapper />
        </Item>
        <Item>
          <MovingImg src="https://assets.pancakeswap.finance/web/images/astronaut-bunny.png" />
        </Item>
      </Wrapper>
    </Container>
  )
}

export default FirstContent
