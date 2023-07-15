import { RootState } from "@/redux/store"
import { ethers } from "ethers"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Amount, Cost, CostWrapper, HaveAmount, HaveTitle, IsHave, Line, Ticket } from "../styled/page.styled"

const HaveBox = () => {
  const [ASD, setASD] = useState<number>(0)
  const [vASD, setvASD] = useState<number>(0)

  const {
    contract: { governance, factory },
  } = useSelector<RootState, RootState>((state) => state)

  const setBalance = async () => {
    const ASD = process.env.NEXT_PUBLIC_ASDTOKEN_ADDRESS
    const vASD = process.env.NEXT_PUBLIC_VASDTOKEN_ADDRESS
    const ASDBalance = await factory!.checkToken(ASD)
    const vASDBalance = await factory!.checkToken(vASD)
    setASD(ASDBalance.div(ethers.constants.WeiPerEther).toNumber())
    setvASD(vASDBalance.div(ethers.constants.WeiPerEther).toNumber())
  }
  useEffect(() => {
    if (factory) {
      setBalance()
    }
  }, [])

  return (
    <>
      <IsHave>
        <Amount>
          <HaveTitle>Current ASD</HaveTitle>
          <CostWrapper>
            <HaveAmount>{ASD} ASD</HaveAmount>
          </CostWrapper>
        </Amount>
        <Line></Line>
        <Ticket>
          <HaveTitle>Current Ticket</HaveTitle>
          <CostWrapper>
            <HaveAmount>{vASD} vASD</HaveAmount>
            <Cost>min Vote: vKSP</Cost>
          </CostWrapper>
        </Ticket>
      </IsHave>
    </>
  )
}

export default HaveBox
