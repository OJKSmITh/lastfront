import {
  SubjectWrapper,
  MyAmount,
  MyAmountBox,
  SubjectVoting,
  Title,
  Voting,
  MyAmountInfo,
} from "../styled/page.styled"

const Subject = ({ subject }: { subject: string }) => {
  return (
    <>
      <SubjectWrapper>
        <SubjectVoting>
          <Title>{subject}</Title>
          <Voting>Voting deadline | 2023-07-01 ~ 2023-07-02</Voting>
        </SubjectVoting>
        <MyAmountBox>
          <MyAmountInfo>My vKSP</MyAmountInfo>
          <MyAmount>0 vKSP</MyAmount>
        </MyAmountBox>
      </SubjectWrapper>
    </>
  )
}

export default Subject
