import {
  Amount,
  Cost,
  CostWrapper,
  HaveAmount,
  HaveTitle,
  IsHave,
  Line,
  Ticket,
} from "../styled/page.styled"

const HaveBox = () => {
  return (
    <>
      <IsHave>
        <Amount>
          <HaveTitle>Current ASD</HaveTitle>
          <CostWrapper>
            <HaveAmount>0 ASD</HaveAmount>
            <Cost>cost: 500ASD</Cost>
          </CostWrapper>
        </Amount>
        <Line></Line>
        <Ticket>
          <HaveTitle>Current Ticket</HaveTitle>
          <CostWrapper>
            <HaveAmount>0 vKSP</HaveAmount>
            <Cost>min Vote: vKSP</Cost>
          </CostWrapper>
        </Ticket>
      </IsHave>
    </>
  )
}

export default HaveBox
