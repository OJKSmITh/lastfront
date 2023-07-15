import {
  StakingIcon,
  StakingInput,
  StakingInputWrap,
} from "../styled/page.styled"

import { useState, useEffect } from 'react'

interface IStakingInputBox {
  handleSubmission:any
}

const StakingInputBox = ({handleSubmission}:IStakingInputBox) => {
  
  const [inputValue, setInputValue] = useState(0)
  
  const handleInputChange =(event:any)=>{
    setInputValue(event.target.value)
  }

  useEffect(()=>{
    handleSubmission(inputValue)
  },[inputValue])

  return (
    <StakingInputWrap>
      <StakingInput
        type="number"
        placeholder="You can enter it in integer units only."
        onChange={handleInputChange}
      />
      <StakingIcon>
        <div>LP</div>
      </StakingIcon>
    </StakingInputWrap>
  )
}

export default StakingInputBox
