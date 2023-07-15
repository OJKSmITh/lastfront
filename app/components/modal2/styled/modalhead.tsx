import { styled } from "styled-components"
import { modalHead } from "../../component.inteface"

export const ModalcontentST = styled.div<modalHead>`
  width: ${(props) => (props.width ? props.width : "")}px;
  height: ${(props) => (props.height ? props.height : "100%")}px;
  margin-left: ${(props) => (props.left ? props.left : "")}rem;
  margin-top: ${(props) => (props.top ? props.top : "")}rem;
  ${(props) => (props.flex == "true" ? "display: flex; ;flex-direction:column;" : "")};
`
