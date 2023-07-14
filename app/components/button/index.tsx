import { styled } from "styled-components"
import { ButtonCon } from "../component.inteface"

export const ButtonST = styled.button<ButtonCon>`
  width: ${(props) => (props.width ? props.width : 1.5)}rem;
  height: ${(props) => (props.height ? props.height : 1.5)}rem;
  font-size: ${(props) => (props.size ? props.size : 1)}rem;
  color: #ffffff;
  background: #1fc7d4;
  border-radius: 1.6rem;
`
