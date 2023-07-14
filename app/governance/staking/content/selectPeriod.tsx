"use client"
import { useState } from "react"
import { ChooseBox, Item } from "../styled/page.styled"

const SelectPeriodBox = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null)

  const handleItemClick = (index: number) => {
    setSelectedItem(index)
  }

  return (
    <ChooseBox>
      <Item selected={selectedItem === 0} onClick={() => handleItemClick(0)}>
        4 MONTH
      </Item>
      <Item selected={selectedItem === 1} onClick={() => handleItemClick(1)}>
        8 MONTH
      </Item>
      <Item selected={selectedItem === 2} onClick={() => handleItemClick(2)}>
        12 MONTH
      </Item>
    </ChooseBox>
  )
}

export default SelectPeriodBox
