import { StakingBox } from "../styled/page.styled"
import BasicButton from "@/app/components/button/BasicBtn"
import StakingInputBox from "./stakingInput"
import SelectLPBox from "./selectLP"
import SelectPeriodBox from "./selectPeriod"

const StakingArea = () => {
  return (
    <StakingBox>
      <h2>
        Staking Amount: 0<span style={{ fontSize: "16px" }}> ksp</span>
      </h2>
      <h3>CHOOSE DEPOSIT PERIOD</h3>
      <SelectPeriodBox />
      <h3>DEPOSIT AMOUNT</h3>
      <StakingInputBox />
      <h3>CHOOSE A PAIR TO LIQUID STAKE</h3>
      <SelectLPBox />
      <BasicButton text="Staking !" padding="24px" borderRadius="16px" fontSize="16px" fontWeight="600" background="#1fc7d4" color="#fff" />
    </StakingBox>
  )
}

export default StakingArea
