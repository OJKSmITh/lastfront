"use client"

import { Content, ContentWrapper, StakingReward } from "../styled/page.styled"
import RewardArea from "./rewardArea"
import StakingArea from "./stakingArea"

const StakingContent = () => {
  return (
    <Content>
      <ContentWrapper>
        <StakingReward>
          <StakingArea />
          <RewardArea />
        </StakingReward>
      </ContentWrapper>
    </Content>
  )
}

export default StakingContent
