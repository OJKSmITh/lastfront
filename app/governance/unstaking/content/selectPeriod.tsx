"use client"
import { useEffect, useState } from "react"
import { ChooseBox, Item } from "../styled/page.styled"

interface ISelectPeriodBox {
  handleSubmission:any
}

const SelectPeriodBox = ({handleSubmission}:ISelectPeriodBox) => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null)
  const [submission, setSubmission] = useState(0)

  const handleItemClick = (index: number) => {
    setSelectedItem(index)
  }

  useEffect(()=>{
    if(selectedItem===0){
      handleSubmission(4)
    } else if(selectedItem===1){
      handleSubmission(8)
    } else if(selectedItem===2){
      handleSubmission(12)
    }
  }, [selectedItem])


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
