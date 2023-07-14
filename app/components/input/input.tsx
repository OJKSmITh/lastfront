import { InputST } from "./styled"

interface IInputBox {
  id: string
  placeholder: string
  values?: number | string | undefined
  onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onFocusChange?: (event: React.FocusEvent<HTMLInputElement>) => void
  readonly?: boolean
}

export const InputBox = ({
  id,
  placeholder,
  onInputChange,
  onFocusChange,
  values,
  readonly,
}: IInputBox) => {
  const test = values?.toString()

  return (
    <>
      <InputST
        type="text"
        id={id}
        placeholder={placeholder}
        onInput={onInputChange}
        onFocus={onFocusChange}
        value={values}
        readOnly={readonly}
        autoComplete="off"
      />
    </>
  )
}
