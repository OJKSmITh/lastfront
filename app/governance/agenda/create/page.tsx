"use client"

import { RootState } from "@/redux/store"
import { useState } from "react"
import { useSelector } from "react-redux"
import ChoiceBox from "./content/ChoiceBox"
import HaveBox from "./content/HaveBox"
import SubmitButton from "./content/SubmitButton"
import TokenAddressBox from "./content/TokenAddressBox"
import Write from "./content/Write"
import { ChangeCodeBox, Container, Title, Wrapper } from "./styled/page.styled"

const CreateProposal = () => {
  const [subjectValue, setSubjectValue] = useState("")
  const [contentValue, setContentValue] = useState("")

  return (
    <Container>
      <Wrapper>
        <Title>Suggesting Vote</Title>
        <HaveBox></HaveBox>
        <ChoiceBox></ChoiceBox>
        <TokenAddressBox></TokenAddressBox>
        <Write subjectValue={subjectValue} setSubjectValue={setSubjectValue} contentValue={contentValue} setContentValue={setContentValue} />
        <SubmitButton subjectValue={subjectValue} contentValue={contentValue} />
      </Wrapper>
    </Container>
  )
}

export default CreateProposal
