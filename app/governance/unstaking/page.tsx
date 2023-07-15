import { useState } from "react"
import { Container } from "./styled/page.styled"
import StakingHeader from "./content/header"
import StakingContent from "./content/content"

const UnStaking = () => {
  return (
    <Container>
      <StakingHeader />
      <StakingContent />
    </Container>
  )
}
export default UnStaking
