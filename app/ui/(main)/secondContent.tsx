"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  BoxWrapper,
  Content,
  LayoutWrapper,
  Wrapper,
} from "./styled/secondContent.styled"
import { faCookie } from "@fortawesome/free-solid-svg-icons"
import CardBox from "./content/secondCardBox"
import UsersIcon from "./content/(icon)/usersIcon"
import TradesIcon from "./content/(icon)/tradesIcon"
import StakedIcon from "./content/(icon)/stakedIcon"

const CardList = [
  {
    name: "users",
    value: "1.5 million",
    during: "in the last 30days",
    nameColor: "#7645d9",
    valueColor: "#280d5f",
    icon: UsersIcon,
  },
  {
    name: "trades",
    value: "55 million",
    during: "made in the last 30 days",
    nameColor: "#1fc7d4",
    valueColor: "#280d5f",
    icon: TradesIcon,
  },
  {
    name: "staked",
    value: "1.6 million",
    during: "Total Value Locked",
    nameColor: "#ed4b92",
    valueColor: "#280d5f",
    icon: StakedIcon,
  },
]

const SecondContent = () => {
  return (
    <Wrapper>
      <LayoutWrapper>
        <Content>
          <FontAwesomeIcon icon={faCookie} color="#8B5927" size="3x" />
          <h2>Used by millions</h2>
          <h2>Trusted with billions</h2>
          <div>
            CookieSwap has the most users of any decentralized platform ever.
          </div>
          <div>
            And those users are now entrusting the platform with over $1.6
            billion in funds.
          </div>
          <div>Will you join them?</div>
        </Content>
        <BoxWrapper>
          {CardList.map((item, i) => (
            <CardBox key={i} contents={item} />
          ))}
        </BoxWrapper>
      </LayoutWrapper>
    </Wrapper>
  )
}

export default SecondContent
