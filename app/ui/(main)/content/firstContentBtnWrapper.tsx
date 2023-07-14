"use client"

import { ButtonWrapper } from "../styled/firstContent.styled"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Custom2 } from "@/app/components/modal2/styled/custom2"
import { ConnectWallet } from "@/app/contents/connectwalllet/connetwallet"
import BasicButton from "@/app/components/button/BasicBtn"

const FirstButtonWrapper = () => {
  const router = useRouter()
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <ButtonWrapper>
      <BasicButton
        height={"3rem"}
        color={"#fff"}
        padding={"0px 24px"}
        background={"#1fc7d4"}
        borderRadius={"16px"}
        fontSize={"16px"}
        fontWeight={"600"}
        letterSpacing={"0.03rem"}
        onClick={() => {
          setModalIsOpen(true)
        }}
        text={"Connect Wallet"}
      ></BasicButton>
      <Custom2
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        width={793}
        height={491}
        content={<ConnectWallet isModal={setModalIsOpen} />}
      />
      <BasicButton
        height={"3rem"}
        color={"#1fc7d4"}
        padding={"0px 24px"}
        background={"#fff"}
        borderRadius={"16px"}
        fontSize={"16px"}
        fontWeight={"600"}
        letterSpacing={"0.03rem"}
        onClick={() => {
          router.push("/swap")
        }}
        text={"Trade Now"}
      ></BasicButton>
    </ButtonWrapper>
  )
}

export default FirstButtonWrapper
