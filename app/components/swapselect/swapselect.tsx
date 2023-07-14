import { useState } from "react"
import { TokenName } from "../tokenname/token"
import { Custom2 } from "../modal2/styled/custom2"
import { TokenSelect } from "@/app/contents/tokenselect/tokenselect"
import { ISwap } from "../component.inteface"

export const SwapSelect: React.FC<ISwap> = ({ from, token }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <>
      <TokenName token={token} onclick={() => setModalIsOpen(true)}></TokenName>
      <Custom2
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        width={400}
        height={500}
        content={<TokenSelect from={from} onclose={setModalIsOpen} />}
      />
    </>
  )
}
