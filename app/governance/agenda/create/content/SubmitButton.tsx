"use client"

import RouterButton from "@/app/components/button/routerButton"
import { SubmitButtonWrapper } from "../styled/page.styled"
import request from "@/request"
import { useRouter } from "next/navigation"

interface Ivalue {
  subjectValue: string
  contentValue: string
}

const SubmitButton: React.FC<Ivalue> = ({ subjectValue, contentValue }) => {
  const router = useRouter()

  const handleSubmit = async () => {
    const res = await request.post("/api/governance", {
      subject: subjectValue,
      content: contentValue,
    })
    console.log(res)
    router.push("/governance/agenda")
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
