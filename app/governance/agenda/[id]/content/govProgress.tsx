import {
  GovProgressWrapper,
  GovWrapper,
  PitemBlock,
  PitemBox,
  PitemDate,
  PitemTitle,
  PitemValue,
} from "../styled/page.styled"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faCheckCircle } from "@fortawesome/free-regular-svg-icons"

const data = [
  {
    title: "Date of registration",
    date: "2023/07/01",
    block: "0x1446139af299b7975ad87166f09d9acc06b5affa94ce384c4fd5de258771beba",
    icon: "#b39c7d",
  },
  { title: "Start Date", date: "2023/07/01", block: "-", icon: "#b39c7d" },
  { title: "The first vote", date: "2023/07/01", block: "-", icon: "#b39c7d" },
  {
    title: "Timelock",
    date: "2023/07/02",
    block: "0x629284bea0b330a93b19aa2860398c7fb5c21fcac1da50e415aa69cb66ea4d3a",
    icon: "#dee3eb",
  },
  {
    title: "The final result",
    date: "2023/07/03",
    block: "0xc75c38e5b727afcd0ba78d360c8d16db7c04ddcda8a97d4e492c904a6e2046d1",
    icon: "#dee3eb",
  },
]

const GovProgress = () => {
  return (
    <GovProgressWrapper>
      {data.map((item) => (
        <PitemBox key={item.title}>
          <PitemTitle>
            <FontAwesomeIcon icon={faCheckCircle} color={item.icon} />
            {item.title}
          </PitemTitle>
          <PitemValue>
            <PitemDate>{item.date}</PitemDate>
            <PitemBlock>{item.block}</PitemBlock>
          </PitemValue>
        </PitemBox>
      ))}
    </GovProgressWrapper>
  )
}

export default GovProgress
