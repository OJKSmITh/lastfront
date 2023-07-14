import { styled } from "styled-components"
import { IWrap } from "../../component.inteface"

const line_gradient:Record<string, string> ={
  linetrue : "linear-gradient(139.73deg, #e5fdff, #f3efff);"
}

export const ContentsWrapST = styled.div<IWrap>`
  width: ${(props) => (props.width ? props.width : "100%")}rem;
  height: ${(props) => (props.height ? props.height : "100%")}rem;
  background-color :${(props => (props.back=="white"? "white":"" ))};
  border-radius: ${props => `${props.radius1 || 0}rem ${props.radius2 || 0}rem ${props.radius3 || 0}rem ${props.radius4 || 0}rem`};
  margin-left :${props => (props.left? props.left:"")}rem;
  margin-top: ${props => (props.top? props.top:"")}rem;
  border:${(props) => (props.border ? `${props.border || 1}`:"")}px solid #bd9ac7;

  ${(props) =>
    props.flex
      ? "display: flex; justify-content: space-between; align-items:center;"
      : ""};
`

export const ContentsWrapCenterST = styled.div<IWrap>`
  width: ${(props) => (props.width ? props.width : "100%")}rem;
  height: ${(props) => (props.height ? props.height : "100%")}rem;

  ${(props) =>
    props.flex
      ? "display: flex; justify-content: center; align-items:center;"
      : ""};
`

export const ContentWrapBasicST = styled.div<IWrap>`
  width: ${(props) => (props.width ? props.width : "100%")}px;
  height: ${(props) => (props.height ? props.height : "100%")}px;
  background: ${(props => (props.back=="true"? line_gradient.linetrue: "" ))};
  display :${(props) => (props.flex =="true" ? "flex" : "")};
  margin-left :${props => (props.left? props.left:"")}rem;
  margin-right :${props => (props.right? props.right:"")}rem;
  margin-top: ${props => (props.top? props.top:"")}rem;
  border-radius: ${props => `${props.radius1 || 0}rem ${props.radius2 || 0}rem ${props.radius3 || 0}rem ${props.radius4 || 0}rem`};
  flex-direction: ${props => (props.direction? "column":"")};
  align-items: ${(props) => (props.align ? "center" : "")};
`