"use client"

import { DetailInfo, GovWrapper, ItemBox, ItemTitle, ItemValue } from "../styled/page.styled"

const GovInfo = ({ index, proposal }: { index: number; proposal: any }) => {
  const data = [
    { title: "Start Vote Block", value: proposal.startBlock },
    { title: "Start End Block", value: proposal.endBlock },
    { title: "Wrtting No.", value: proposal.writterNo },
    { title: "Status", value: proposal.executed },
    { title: "Writter", value: proposal.proposal },
    { title: "Total possible Vote", value: proposal.amountVote },
    { title: "Minimun Standard", value: proposal.callFunction },
  ]

  return (
    <GovWrapper>
      <DetailInfo>Detail Information</DetailInfo>
      {data.map((item, idx) => (
        <ItemBox key={idx}>
          <ItemTitle>{item.title}</ItemTitle>
          <ItemValue>{item.value}</ItemValue>
        </ItemBox>
      ))}
    </GovWrapper>
  )
}

export default GovInfo
