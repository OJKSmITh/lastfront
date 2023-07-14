import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "../../button/button"
import Modal from "react-modal"
import { SwapBox } from "../../swapbox"
import { ICustomModal } from "../../component.inteface"

export const Custom2 = (props: ICustomModal) => {
  const { isOpen = false, content, onClose, width, height, left } = props
  useEffect(() => {
    if (typeof window !== "undefined") {
      Modal.setAppElement("body")
    }
  }, [])
  const handleClose = () => {
    if (onClose) {
      onClose(false)
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      style={{
        content: {
          width: `${width}px`,
          height: `${height}px`,
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          transform: "translate(-50%, -50%)",
          borderRadius: "20px",
          backgroundColor: "rgba(0, 0, 0, 0)",
          border: "none",
        },
        overlay: {
          backgroundColor: "rgba(38, 37, 37, 0.75)",
          // backgroundColor: 'rgba(0, 0, 0, 0)',
        },
      }}
    >
      <Button width={2} height={2} onclick={onClose} text={"X"} left={left}></Button>
      {content}
    </Modal>
  )
}
