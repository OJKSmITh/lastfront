import { SubjectWrapper, MyAmount, MyAmountBox, SubjectVoting, Title, Voting, MyAmountInfo } from "../styled/page.styled"

const Subject = ({ subject, balance, date }: { subject: string; balance: number; date: string }) => {
  return (
    <>
      <SubjectWrapper>
        <SubjectVoting>
          <Title>{subject}</Title>
          <Voting>Voting deadline | {date}</Voting>
        </SubjectVoting>
        <MyAmountBox>
          <MyAmountInfo>My vASD</MyAmountInfo>
          <MyAmount>{balance} vASD</MyAmount>
        </MyAmountBox>
      </SubjectWrapper>
    </>
  )
}

export default Subject
