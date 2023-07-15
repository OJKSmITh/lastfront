import { StakingBox } from "../styled/page.styled"
import BasicButton from "@/app/components/button/BasicBtn"
import StakingInputBox from "./stakingInput"
import SelectLPBox from "./selectLP"
import SelectPeriodBox from "./selectPeriod"

interface IStakingArea {
  handleSubmissionPeriod:any
  handleSubmissionAmount:any
  handleSubmissionLp:any
}

const StakingArea = ({handleSubmissionPeriod, handleSubmissionAmount,handleSubmissionLp}:IStakingArea) => {
  return (
    <StakingBox>
    
      <h3>DEPOSIT AMOUNT</h3>
      <StakingInputBox  handleSubmission ={handleSubmissionAmount}/>
      <h3>CHOOSE A PAIR TO LIQUID STAKE</h3>
      <SelectLPBox handleSubmission={handleSubmissionLp} />
    </StakingBox>
  )
}

export default StakingArea
