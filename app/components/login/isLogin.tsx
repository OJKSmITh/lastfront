"use client"
import { useRouter } from "next/navigation"
import RouterButton from "../button/routerButton"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import {
  Accounts,
  Balance,
  MainWrapper,
  SubWrapper,
  TxtBox,
} from "./styled/isLogin.styled"

const IsLogin = () => {
  const router = useRouter()
  const account = useSelector((state: RootState) => state.wallet)
  console.log("account:", account)
  const shortAccount = `${account.signer.slice(0, 6)}...${account.signer.slice(
    -4
  )}`

  return (
    <MainWrapper>
      <SubWrapper>
        <Accounts>
          <h1>logo</h1>
          <span>Connected with {shortAccount}</span>
        </Accounts>
        <Balance>
          <TxtBox>
            <h2>$0</h2>
            <span>to collect</span>
          </TxtBox>
          <RouterButton
            width=""
            height="48px"
            color="#1FC7D4"
            padding="0px 24px"
            background="#fff"
            border="2px solid"
            borderRadius="16px"
            fontSize="16px"
            fontFamily=""
            fontWeight="600"
            cursor="pointer"
            letterSpacing="0.03rem"
            onClick={() => router.push("/swap")}
          >
            Buy Token
          </RouterButton>
        </Balance>
      </SubWrapper>
    </MainWrapper>
  )
}

export default IsLogin
