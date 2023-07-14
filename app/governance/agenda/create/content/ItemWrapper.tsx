"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconWrapper, Item, LevelWrapper } from "../styled/page.styled"
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons"
import { useCallback, useEffect, useRef } from "react"

const ItemWrapper = ({
  text,
  onClose,
  setText,
  level,
  open,
}: {
  text: string
  onClose: () => void
  setText: (value: string) => void
  level: string[]
  open: boolean
}) => {
  const itemRef = useRef<HTMLDivElement>(null)

  const clickHander = () => {
    if (level[0] === "") {
      setText(text)
    } else if (level[0] === "c") {
      setText("Token level change C -> B")
    } else {
      setText("Token level change B -> C")
    }
  }

  if (!open) return null

  return (
    <div onClick={onClose}>
      <Item ref={itemRef} onClick={clickHander}>
        {text}
        {text === "Token level change" && (
          <>
            <IconWrapper>
              <LevelWrapper>
                <strong>{level[0]}</strong>
              </LevelWrapper>
              <FontAwesomeIcon icon={faArrowAltCircleRight} />
              <LevelWrapper>
                <strong>{level[1]}</strong>
              </LevelWrapper>
            </IconWrapper>
          </>
        )}
      </Item>
    </div>
  )
}

export default ItemWrapper
