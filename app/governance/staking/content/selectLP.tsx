"use client"
import Dropdown from "@/app/components/dropdown/dropdown"
import { DefaultLP, LPItem, LPList, SelectLPWrapper, SelectLPBoxWrap } from "../styled/page.styled"
import { useState } from "react"
import DownArrow from "../icon/downArrow"

const SelectLPBox = () => {
  const [dropdownVisibility, setDropdownVisibility] = useState(false)

  const [pairValue, setPairValue] = useState("ETH / ASD")

  return (
    <SelectLPWrapper
      onClick={() => {
        setDropdownVisibility(!dropdownVisibility)
      }}
    >
      <SelectLPBoxWrap>
        <DefaultLP>
          {pairValue} <DownArrow />
        </DefaultLP>
      </SelectLPBoxWrap>
      <Dropdown visibility={dropdownVisibility}>
        <LPList>
          <LPItem
            onClick={() => {
              setPairValue("ARB / ASD")
            }}
          >
            ARB / ASD
          </LPItem>
          <LPItem
            onClick={() => {
              setPairValue("USDT / ASD")
            }}
          >
            USDT / ASD
          </LPItem>
          <LPItem
            onClick={() => {
              setPairValue("ETH / ASD")
            }}
          >
            ETH / ASD
          </LPItem>
        </LPList>
      </Dropdown>
    </SelectLPWrapper>
  )
}

export default SelectLPBox
