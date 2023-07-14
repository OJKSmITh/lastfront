"use client"

import { IconWrapper, LevelWrapper, ModalWrapper } from "../styled/page.styled"
import { ReactNode, useCallback, useEffect, useRef } from "react"
import ItemWrapper from "./ItemWrapper"

const ChoiceModal = ({
  open,
  setOpen,
  setText,
  onClose,
}: {
  open: boolean
  onClose: () => void
  setText: (value: any) => void
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null)

  const handler = useCallback(
    (e: any) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        console.log("ddd")
        onClose()
      }
    },
    [wrapperRef.current]
  )

  useEffect(() => {
    document.addEventListener("mousedown", handler)
    return () => {
      document.removeEventListener("mousedown", handler)
    }
  })

  if (!open) return null

  return (
    <>
      <ModalWrapper ref={wrapperRef}>
        <ItemWrapper
          text={"Token level change"}
          open={open}
          onClose={onClose}
          setText={setText}
          level={["c", "b"]}
        />
        <ItemWrapper
          text={"Token level change"}
          open={open}
          onClose={onClose}
          setText={setText}
          level={["b", "c"]}
        />
        <ItemWrapper
          text={"Proposal Create"}
          open={open}
          onClose={onClose}
          setText={setText}
          level={[""]}
        />
      </ModalWrapper>
      <button onClick={onClose}>dddd</button>
    </>
  )
}

export default ChoiceModal
