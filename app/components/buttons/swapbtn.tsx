import { IButton } from "../component.inteface"
import { SettingBtnST } from "./styled"

export const SwapBtn = (props: IButton) => {
  return (
    <SettingBtnST onClick={props.onClick}>
      <img
        style={{ margin: "0 auto", width: "2rem" }}
        src="/up-and-down-arrow.png"
      />
    </SettingBtnST>
  )
}
