import { useEffect, useRef } from "react"
import styled from "styled-components"

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 8;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`

export const ModalContent = styled.div`
  position: relative;
  background-color: red;
  border-radius: 10px;
  padding: 2rem;
  z-index: 9;
  width: 500px;
  height: 500px;

  & .iconify {
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 3%;
    right: 4%;
    cursor: pointer;
  }
`

interface ModalProps {
  open: boolean
  setOpen: any
  children: React.ReactNode
}

export const Modal = ({ open, setOpen, children }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    console.log(`isOpen? :`, open)

    const handleClose = (e: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(e.target as HTMLElement)
      ) {
        console.log(123)
        setOpen(false)
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.keyCode === 27) {
        console.log(456)
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClose)
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("mousedown", handleClose)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [setOpen])

  return open ? (
    <ModalWrapper>
      <ModalContent ref={modalRef}>
        <button
          onClick={() => {
            setOpen(false)
          }}
        >
          X
        </button>
        {children}
      </ModalContent>
    </ModalWrapper>
  ) : null
}
