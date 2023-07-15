"use client"

import RouterButton from "@/app/components/button/routerButton"
import { SubmitButtonWrapper } from "../styled/page.styled"
import request from "@/request"
import { useRouter } from "next/navigation"
import { Token } from "@/app/components/component.inteface"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"

interface Ivalue {
  subjectValue: string
  contentValue: string
  tokenAddress: string | undefined
  selectToken: Token | null
}

const SubmitButton: React.FC<Ivalue> = ({ subjectValue, contentValue, tokenAddress, selectToken }) => {
  const router = useRouter()
  const {
    wallet: { signer },
    contract: { governance },
  } = useSelector<RootState, RootState>((state) => state)

  const handleSubmit = async () => {
    if (!governance) return alert("의제를 제출 할 수 없습니다 새로 진입해주세요")
    // if (!subjectValue || !contentValue || !tokenAddress || !selectToken) return alert("누락된 정보가 있습니다.")
    // const res = await request.post("/api/governance", {
    //   subject: subjectValue,
    //   content: contentValue,
    // })
    let callFunction
    if (subjectValue.indexOf("Token level change") !== -1) {
      callFunction = `changeLevel_${selectToken}`
    } else {
      callFunction = "createPool_"
    }

    const tx = await governance.propose(signer, callFunction, {
      gasLimit: 800000000,
    })
    const success = await tx.wait()
    if (success) console.log(success)
    // router.push("/governance/agenda")
  }

  return (
    <SubmitButtonWrapper>
      <RouterButton
        width={"400px"}
        height={"50px"}
        color={"#1FC7D4"}
        padding={""}
        background={"#fff"}
        border={"none"}
        borderRadius={"16px"}
        fontSize={"24px"}
        fontFamily={""}
        fontWeight={"600"}
        cursor={"pointer"}
        letterSpacing={"1.1"}
        onClick={handleSubmit}
      >
        Submit Proposal
      </RouterButton>
    </SubmitButtonWrapper>
  )
}

export default SubmitButton
