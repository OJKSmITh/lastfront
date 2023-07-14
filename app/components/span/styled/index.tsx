import { styled } from "styled-components"
import { ISpan } from "../../component.inteface"

const color : Record<string, string> ={
  lightPurple:"#7a6eaa",
  purple:"#7645d9",
  skyblue:"#1fc7d4",
  red:"#FF0000",
  orange:"#ff9632"


}

export const SpanST = styled.span<ISpan>`
  font-size: ${(props) => (props.size ? props.size : 1)}rem;
  font-weight: ${(props) => (props.weight ? "bold" : "none")};
  color : ${(props) => (props.color === "lightPurple" ? color.lightPurple : props.color =="purple"? color.purple :props.color =="skyblue"? color.skyblue :props.color =="red"? color.red :props.color =="orange"? color.orange :"")};
  margin-left : ${(props) => (props.left ? props.left : "")}rem;
  margin-right: ${(props) => (props.right ? props.right : "")}rem;
`
