import { TokenBalance } from "../component.inteface"
import { ContentsWrapST } from "../contentswrap"
import { Span } from "../span/span"

export const Balance = ({ balance }: { balance: TokenBalance }) => {
  return (
    <>
      <ContentsWrapST width={6} height={2} flex={"true"}>
        <Span text="Balance"></Span>:<Span balance={balance}></Span>
      </ContentsWrapST>
    </>
  )
}
