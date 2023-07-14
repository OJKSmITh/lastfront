import { SwapBtn } from "@/app/components/buttons/swapbtn"
import { ISwapData } from "@/app/components/component.inteface"
import { ContentsWrapCenterST } from "@/app/components/contentswrap"
import { SwapBox } from "@/app/components/swapbox"
import { useEffect } from "react"

export const SwapToken = ({ swapData, onClick, onchange, returnValue }: ISwapData) => {
  useEffect(() => {}, [])

  return (
    <>
      <SwapBox token={swapData.from} balance={swapData.frombalance} from={true} onInputChange={onchange} modals={"true"}></SwapBox>
      <ContentsWrapCenterST width={18} height={2} flex="true">
        <SwapBtn onClick={onClick} />
      </ContentsWrapCenterST>
      <SwapBox token={swapData.to} balance={swapData.tobalance} from={false} defaultValue={returnValue} readonly={true} modals={"true"}></SwapBox>
    </>
  )
}
