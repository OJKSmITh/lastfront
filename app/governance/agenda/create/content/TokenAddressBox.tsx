import { Token } from "@/app/components/component.inteface"
import Dropdown from "@/app/components/dropdown/dropdown"
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Dispatch, ReactEventHandler, SetStateAction, useState } from "react"
import {
  Choice,
  ChoiceItem,
  ChoiceList,
  ChoiceText,
  ChoiceWrap,
  TokenAddressInput,
  TokenAddressWrapper,
  TokenNameAddress,
  TokenNameBox,
  TokenNameWrapper,
} from "../styled/page.styled"

interface TokenAddress {
  token: Token | null
  setToken: Dispatch<SetStateAction<Token | null>>
  tokenAddress: string | undefined
  setAddress: Dispatch<SetStateAction<string | undefined>>
}

const TokenAddressBox: React.FC<TokenAddress> = ({ token, setToken, tokenAddress }) => {
  const [text, setText] = useState("Select Token")
  const [visibility, setVisibility] = useState(false)

  const clickHandler = (e: any) => {
    setText(e.target.innerHTML)
    setToken(e.target.innerHTML)
  }

  return (
    <TokenNameAddress>
      <TokenAddressWrapper>
        <TokenAddressInput>{tokenAddress}</TokenAddressInput>
      </TokenAddressWrapper>
      <TokenNameWrapper>
        <TokenNameBox>
          <ChoiceWrap onClick={() => setVisibility(!visibility)}>
            <Choice>
              <ChoiceText>
                <strong>{text}</strong>
                <FontAwesomeIcon icon={faArrowAltCircleDown} color="#bbb" />
              </ChoiceText>
            </Choice>
            <Dropdown visibility={visibility}>
              <ChoiceList>
                <ChoiceItem onClick={clickHandler}>ARB</ChoiceItem>
                <ChoiceItem onClick={clickHandler}>ETH</ChoiceItem>
                <ChoiceItem onClick={clickHandler}>USDT</ChoiceItem>
                <ChoiceItem onClick={clickHandler}>ASD</ChoiceItem>
              </ChoiceList>
            </Dropdown>
          </ChoiceWrap>
        </TokenNameBox>
      </TokenNameWrapper>
    </TokenNameAddress>
  )
}

export default TokenAddressBox
