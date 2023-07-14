import { ISpan } from "../component.inteface"
import { SpanST } from "./styled"

export const Span = (props: ISpan) => {
  return (
    <>
      <SpanST size={props.size} weight={props.weight} color={props.color} left={props.left} right={props.right}>
        {props.text}
        {props.balance}
      </SpanST>
    </>
  )
}
