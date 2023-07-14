"use client"

import { useState } from "react"
import {
  ContentBox,
  ContentWrapper,
  SubjectBox,
  SubjectWrapper,
  WriteWrapper,
} from "../styled/page.styled"

interface IValue {
  subjectValue: string
  setSubjectValue: (value: string) => void
  contentValue: string
  setContentValue: (value: string) => void
}

const Write: React.FC<IValue> = ({
  subjectValue,
  setSubjectValue,
  contentValue,
  setContentValue,
}) => {
  return (
    <WriteWrapper>
      <SubjectWrapper>
        <SubjectBox
          placeholder="Subject"
          type="text"
          value={subjectValue}
          onChange={(e: any) => {
            console.log(e.target.value)
            setSubjectValue(e.target.value)
          }}
        />
      </SubjectWrapper>
      <ContentWrapper>
        <ContentBox
          placeholder="Put a Proposal
          "
          value={contentValue}
          onChange={(e: any) => {
            setContentValue(e.target.value)
          }}
        />
      </ContentWrapper>
    </WriteWrapper>
  )
}

export default Write
