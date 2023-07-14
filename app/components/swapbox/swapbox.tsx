import { Balance } from "../balance/balance"
import { ContentsWrapST } from "../contentswrap"
import { InputWrap } from "./inputwrap"
import { TokenName } from "../tokenname/token"
import { ISwap } from "../component.inteface"
import { SwapSelect } from "../swapselect/swapselect"

export const SwapBox = ({ token, balance, top, from, defaultValue, onInputChange, onFocusChange, readonly, modals }: ISwap) => {
  let swaptoken
  if (modals === "true") {
    swaptoken = <SwapSelect from={from} token={token} balance={balance}></SwapSelect>
  }
  return (
    <>
      <ContentsWrapST width={18} height={2} flex={"true"} top={top}>
        {swaptoken ? swaptoken : <TokenName token={token}></TokenName>}
        <Balance balance={balance}></Balance>
      </ContentsWrapST>
      <InputWrap onInputChange={onInputChange} onFocusChange={onFocusChange} from={false} defaultValue={defaultValue} readonly={readonly} />
    </>
  )
}
