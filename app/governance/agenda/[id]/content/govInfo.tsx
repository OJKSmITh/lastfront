"use client"

import { DetailInfo, GovWrapper, ItemBox, ItemTitle, ItemValue } from "../styled/page.styled"

const GovInfo = ({ index }: { index: number }) => {
  const data = [
    { title: "Start Vote Block", value: "124743463" },
    { title: "Start End Block", value: "124743463" },
    { title: "Wrtting No", value: `${index}` },
    { title: "Status", value: "executed" },
    { title: "Writter", value: "0x05343B228d61402E84d973ce114f34bC3F9e5987" },
    { title: "Total possible Vote", value: "124743463" },
    { title: "Minimun Standard", value: "124743463" },
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
