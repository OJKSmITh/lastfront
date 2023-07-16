import { StakingBox } from "../styled/page.styled"
import BasicButton from "@/app/components/button/BasicBtn"
import StakingInputBox from "./stakingInput"
import SelectLPBox from "./selectLP"
import SelectPeriodBox from "./selectPeriod"
import { ReactNode } from "react"

interface IStakingArea {
  handleSubmissionPeriod: any
  handleSubmissionAmount: any
  handleSubmissionLp: any
  children: ReactNode
}

const StakingArea = ({ handleSubmissionPeriod, handleSubmissionAmount, handleSubmissionLp, children }: IStakingArea) => {
  return (
    <StakingBox>
      <h3>CHOOSE DEPOSIT PERIOD</h3>
      <SelectPeriodBox handleSubmission={handleSubmissionPeriod} />
      <h3>DEPOSIT AMOUNT</h3>
      <StakingInputBox handleSubmission={handleSubmissionAmount} />
      <h3>CHOOSE A PAIR TO LIQUID STAKE</h3>
      <SelectLPBox handleSubmission={handleSubmissionLp} />
      {children}
    </StakingBox>
  )
}

export default StakingArea
