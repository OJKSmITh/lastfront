import {
  TokenAddressInput,
  TokenAddressWrapper,
  TokenNameAddress,
  TokenNameBox,
  TokenNameWrapper,
} from "../styled/page.styled"

const TokenAddressBox = () => {
  return (
    <TokenNameAddress>
      <TokenAddressWrapper>
        <TokenAddressInput placeholder={"token address"} />
      </TokenAddressWrapper>
      <TokenNameWrapper>
        <TokenNameBox>
          <p style={{ color: "grey" }}>Token name</p>
        </TokenNameBox>
      </TokenNameWrapper>
    </TokenNameAddress>
  )
}

export default TokenAddressBox
