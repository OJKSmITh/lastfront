import { Button } from "@/app/components/button/button"
import { ButtonCon, Token } from "@/app/components/component.inteface"
import { RootState } from "@/redux/store"
import { ethers } from "ethers"
import { useSelector } from "react-redux"
import styled from "styled-components"

const ButtonWrap = styled.div`
    width: 100%
    height: 50px;
    display: flex;
    justify-content : space-around;
    align-items: center;
    margin-top: 40px;
`

const tokenCA = {
  ARB: process.env.NEXT_PUBLIC_ARBTTOKEN_ADDRESS,
  USDT: process.env.NEXT_PUBLIC_USDTTOKEN_ADDRESS,
  ASD: process.env.NEXT_PUBLIC_ASDTOKEN_ADDRESS,
  ETH: process.env.NEXT_PUBLIC_ETHTOKEN_ADDRESS,
  RETH: process.env.NEXT_PUBLIC_RETHTOKEN_ADDRESS,
  ARBLP: process.env.NEXT_PUBLIC_ARBLP_ADDRESS,
  USDTLP: process.env.NEXT_PUBLIC_USDTLP_ADDRESS,
  ETHLP: process.env.NEXT_PUBLIC_ETHLP_ADDRESS,
}

export const ButtonDiv: React.FC<ButtonCon> = ({ index, text }) => {
  const {
    wallet: { signer },
    provider: { provider },
    contract: { governance, factory },
  } = useSelector<RootState, RootState>((state) => state)

  const timelockClick = async () => {
    if (governance) {
      const tx = await governance.timelockExecute(index, {
        gasLimit: 800000,
      })
      const result = await tx.wait()
      if (result.events[0].args[0]) {
        alert("success")
      } else {
        alert(result.events[0].args[1])
      }
    }
  }
  const levelchange = (data: string) => {
    const [functionname, tokenName] = ethers.utils.toUtf8String(data).split("_")
    const LPaddress = tokenCA[`${tokenName}LP` as Token]
    const level = text!.split("-> ")[1]
    let intlevel
    switch (level) {
      case "B":
        intlevel = 2
        break
      case "C":
        intlevel = 3
        break
      default:
        intlevel = 1
        break
    }

    return { functionname, LPaddress, intlevel }
  }

  const proposalExecuteClick = async () => {
    if (governance && typeof provider !== "string") {
      const blocknumber = await provider.getBlockNumber()
      const tx = await governance.proposalExecute(index, {
        gasLimit: 800000,
      })
      const result = await tx.wait()
      const data = await governance.getCallFunction(index)
      const { functionname, LPaddress, intlevel } = levelchange(data)
      const arbpoolLv = await factory!.ArbpoolLv()
      const UsdtpoolLv = await factory!.UsdtpoolLv()
      const EthpoolLv = await factory!.EthpoolLv()
      console.log(arbpoolLv, UsdtpoolLv, EthpoolLv)

      if (result.events[0].args[0]) {
        const results = await governance[functionname](LPaddress, intlevel, index, { gasLimit: 800000 })
        console.log(results)
        alert("success")
      } else {
        alert(result.events[0].args[1])
      }
    }
  }

  return (
    <>
      <ButtonWrap>
        <Button text="TimelockExecute" width={12} height={2.5} onclick={timelockClick}></Button>
        <Button text="proposalExecute" width={12} height={2.5} onclick={proposalExecuteClick}></Button>
      </ButtonWrap>
    </>
  )
}
