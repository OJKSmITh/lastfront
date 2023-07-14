"use client"

import { useEffect, useState } from "react"
import { Choice, ChoiceItem, ChoiceList, ChoiceText, ChoiceWrap, Item } from "../styled/page.styled"
import ChoiceModal from "./ChoiceModal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons"
import Dropdown from "@/app/components/dropdown/dropdown"
import ItemWrapper from "./ItemWrapper"

const ChoiceBox = () => {
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
              }}
            >
              Token level change C ~ B
            </ChoiceItem>
            <ChoiceItem
              onClick={() => {
                setText("Token level change B -> C")
              }}
            >
              Token level change B ~ C
            </ChoiceItem>
            <ChoiceItem
              onClick={() => {
                setText("Proposal Create")
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
