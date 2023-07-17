"use client"

import { Token } from "@/app/components/component.inteface"
import { ContractCA } from "@/contractCA"
import { useEffect, useState } from "react"
import ChoiceBox from "./content/ChoiceBox"
import HaveBox from "./content/HaveBox"
import SubmitButton from "./content/SubmitButton"
import TokenAddressBox from "./content/TokenAddressBox"
import Write from "./content/Write"
import { ChangeCodeBox, Container, Title, Wrapper } from "./styled/page.styled"

const tokenCA = {
  ARB: ContractCA.NEXT_PUBLIC_ARBTTOKEN_ADDRESS,
  USDT: ContractCA.NEXT_PUBLIC_USDTTOKEN_ADDRESS,
  ASD: ContractCA.NEXT_PUBLIC_ASDTOKEN_ADDRESS,
  ETH: ContractCA.NEXT_PUBLIC_ETHTOKEN_ADDRESS,
  RETH: "",
  ARBLP: ContractCA.NEXT_PUBLIC_ARBLP_ADDRESS,
  USDTLP: ContractCA.NEXT_PUBLIC_USDTLP_ADDRESS,
  ETHLP: ContractCA.NEXT_PUBLIC_ETHLP_ADDRESS,
}

const CreateProposal = () => {
  const [subjectValue, setSubjectValue] = useState("")
  const [contentValue, setContentValue] = useState("")
  const [selectToken, setSelectToken] = useState<Token | null>(null)
  const [tokenAddress, setTokenAddress] = useState<string | undefined>("")

  useEffect(() => {
    setTokenAddress(tokenCA[selectToken!])
  }, [selectToken])

  return (
    <Container>
      <Wrapper>
        <Title>Suggesting Vote</Title>
        <HaveBox></HaveBox>
        <ChoiceBox setSubject={setSubjectValue}></ChoiceBox>
        <TokenAddressBox token={selectToken} setToken={setSelectToken} tokenAddress={tokenAddress} setAddress={setTokenAddress}></TokenAddressBox>
        <Write subjectValue={subjectValue} contentValue={contentValue} setContentValue={setContentValue} />
        <SubmitButton subjectValue={subjectValue} contentValue={contentValue} selectToken={selectToken} tokenAddress={tokenAddress} />
      </Wrapper>
    </Container>
  )
}

export default CreateProposal
