import { InputBox } from "../input/input"
import { InputBoxSpanST, InputWrapST } from "./styled"
import { IInput } from "../component.inteface"

export const InputWrap = ({
  onInputChange,
  onFocusChange,
  defaultValue,
  readonly,
  display
}: IInput) => {
  return (
    <InputWrapST>
      <InputBox
        id="amount"
        placeholder="0.0"
        onInputChange={onInputChange}
        onFocusChange={onFocusChange}
        readonly={readonly}
        values={defaultValue}
        display={display}
      />
    </InputWrapST>
  )
}
