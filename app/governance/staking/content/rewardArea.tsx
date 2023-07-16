import BasicButton from "@/app/components/button/BasicBtn"
import { RewardBox } from "../styled/page.styled"

interface IRewardArea {
  reward:number
}

const RewardArea = ({reward}:IRewardArea) => {
  return (
    <RewardBox>
      <h2>
        Reward Amount: {reward} <span style={{ fontSize: "16px" }}>Vasd</span>
      </h2>
    </RewardBox>
  )
}

export default RewardArea
