import { Token } from "@/app/components/component.inteface"
import { TokenBox } from "@/app/components/tokenbox/tokenbox"
import { styled } from "styled-components"

const WrapST = styled.div`
  width: 350px;
  height: 300px;
  border: 1px solid #e7e3eb;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #e5fdff;
`

const tokens: Token[] = ["ARB", "ASD", "ETH", "USDT", "RETH"]

interface TokenSelect {
  from: boolean
  onclose: any
}

export const TokenSelect: React.FC<TokenSelect> = ({ from, onclose }) => {
  const data = tokens.map((v, i) => (
    <TokenBox key={i} token={v} from={from} onclose={onclose}></TokenBox>
  ))
  return (
    <>
      <WrapST>{data}</WrapST>
    </>
  )
}
