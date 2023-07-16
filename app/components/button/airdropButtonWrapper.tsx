import BasicButton from "./BasicBtn"
import { ButtonWrap } from "./styled/airdropButtonWrapper.styled"

interface Buttons {
  onclick?: () => void
  disabled?: boolean
}

const ButtonWrapper: React.FC<Buttons> = ({ onclick, disabled }) => {
  return (
    <ButtonWrap>
      <BasicButton
        width={"250px"}
        color={"#fff"}
        padding={"10px 0px"}
        background={"#1fc7d4"}
        borderRadius={"16px"}
        fontSize={"16px"}
        fontWeight={"600"}
        onClick={onclick}
        text={"Receive Drop"}
        disabled={disabled}
      />
    </ButtonWrap>
  )
}

export default ButtonWrapper
