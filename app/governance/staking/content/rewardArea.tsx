import BasicButton from "@/app/components/button/BasicBtn"
import { RewardBox } from "../styled/page.styled"

const RewardArea = () => {
  return (
    <RewardBox>
      <h2>
        Reward Amount: 0 <span style={{ fontSize: "16px" }}>asd</span>
      </h2>
      <BasicButton
        text="Receipt Reward"
        padding="24px"
        borderRadius="16px"
        fontSize="16px"
        fontWeight="600"
        background="#1fc7d4"
        color="#fff"
      />
    </RewardBox>
  )
}

export default RewardArea
