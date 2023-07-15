"use client"

import { useState } from "react"
import { ContentBox, ContentWrapper, SubjectBox, SubjectWrapper, WriteWrapper } from "../styled/page.styled"

interface IValue {
  subjectValue: string
  contentValue: string
  setContentValue: (value: string) => void
}

const Write: React.FC<IValue> = ({ subjectValue, contentValue, setContentValue }) => {
  return (
    <WriteWrapper>
      <SubjectWrapper>
        <SubjectBox placeholder="Subject" type="text" value={subjectValue} readOnly />
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
