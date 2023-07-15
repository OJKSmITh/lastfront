import { stringToBytes } from "viem"
import { ButtonCon } from "../component.inteface"
import { ButtonST } from "./styled"

export const Button = (props: ButtonCon) => {
  return (
    <>
      <ButtonST
        width={props.width}
        height={props.height}
        size={props.size}
        onClick={props.onclick}
        left={props.left}
        top={props.top}
        background={props.background}
        disabled={props.disabled}
      >
        {props.text}
      </ButtonST>
    </>
  )
}
