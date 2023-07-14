import { styled } from "styled-components"
import { Iimg } from "../../component.inteface"

export const ImgST = styled.div<Iimg>`
  width: 1rem;
  height: 1rem;
  background-image: ${(props) => (props.img ? props.img : "none")};
`
