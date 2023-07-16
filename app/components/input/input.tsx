import { InputST } from "./styled"

interface IInputBox {
  id: string
  placeholder: string
  values?: number | string | undefined
  onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onFocusChange?: (event: React.FocusEvent<HTMLInputElement>) => void
  readonly?: boolean
  display?:string
}

export const InputBox = ({
  id,
  placeholder,
  onInputChange,
  onFocusChange,
  values,
  readonly,
  display
}: IInputBox) => {
  const test = values?.toString()

  return (
    <>
      {display !== "none" && (
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
      )}
    </>
  )
}
