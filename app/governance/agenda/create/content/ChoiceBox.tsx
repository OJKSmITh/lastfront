"use client"

import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Choice, ChoiceItem, ChoiceList, ChoiceText, ChoiceWrap, Item } from "../styled/page.styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons"
import Dropdown from "@/app/components/dropdown/dropdown"

interface Chioces {
  setSubject: Dispatch<SetStateAction<string>>
}

const ChoiceBox: React.FC<Chioces> = ({ setSubject }) => {
  const [visibility, setVisibility] = useState(false)
  const [text, setText] = useState("Proposal Type")

  return (
    <>
      <ChoiceWrap onClick={() => setVisibility(!visibility)}>
        <Choice>
          <ChoiceText>
            <strong>{text}</strong>
            <FontAwesomeIcon icon={faArrowAltCircleDown} color="#bbb" />
          </ChoiceText>
        </Choice>
        <Dropdown visibility={visibility}>
          <ChoiceList>
            <ChoiceItem
              onClick={() => {
                setText("Token level change C -> B")
                setSubject("Token level change C -> B")
              }}
            >
              Token level change C ~ B
            </ChoiceItem>
            <ChoiceItem
              onClick={() => {
                setText("Token level change B -> C")
                setSubject("Token level change B -> C")
              }}
            >
              Token level change B ~ C
            </ChoiceItem>
            <ChoiceItem
              onClick={() => {
                setText("Proposal Create")
                setSubject("Proposal Create")
              }}
            >
              Proposal Create
            </ChoiceItem>
          </ChoiceList>
        </Dropdown>
      </ChoiceWrap>
    </>
  )
}

export default ChoiceBox
