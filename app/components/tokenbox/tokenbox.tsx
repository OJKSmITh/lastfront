import { setFromToken, setToToken } from "@/redux/reducer/selecttoken"
import { RootState } from "@/redux/store"
import { useDispatch, useSelector } from "react-redux"
import { styled } from "styled-components"
import { Token } from "../component.inteface"
import { Span } from "../span/span"
import { TokenName } from "../tokenname/token"

const TokenBoxST = styled.div`
  width: 300px;
  height: 50px;
  border: 1px solid #e7e3eb;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  margin: 10px 0;
  background: #fff;

  &:hover {
    background: #e7e3eb;
  }
`

export interface TokenBox {
  token: Token
  from: boolean
  onclose: any
  onclick?: () => void
}

export const TokenBox: React.FC<TokenBox> = ({ from, token, onclose, onclick }) => {
  const dispatch = useDispatch()
  const clickHandler = () => {
    if (from) {
      dispatch(setFromToken(token))
      onclose(false)
    } else {
      dispatch(setToToken(token))
      onclose(false)
    }
  }
  return (
    <>
      <TokenBoxST onClick={clickHandler}>
        <TokenName token={token}></TokenName>
        <div>
          <Span text="Balance : "></Span>
          <Span balance={0}></Span>
        </div>
      </TokenBoxST>
    </>
  )
}
