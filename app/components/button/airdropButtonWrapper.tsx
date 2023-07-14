import BasicButton from "./BasicBtn"
import { ButtonWrap } from "./styled/airdropButtonWrapper.styled"

interface Buttons {
  onclick?: () => void
}

const ButtonWrapper: React.FC<Buttons> = ({ onclick }) => {
  return (
    <ButtonWrap>
      <BasicButton
        width={"150px"}
        color={"#fff"}
        padding={"10px 0px"}
        background={"#1fc7d4"}
        borderRadius={"16px"}
        fontSize={"16px"}
        fontWeight={"600"}
        onClick={onclick}
        text={"Join Drop"}
      />
      <BasicButton
        width={"150px"}
        color={"#fff"}
        padding={"10px 0px"}
        background={"#1fc7d4"}
        borderRadius={"16px"}
        fontSize={"16px"}
        fontWeight={"600"}
        onClick={onclick}
        text={"Receive Drop"}
      />
    </ButtonWrap>
  )
}

export default ButtonWrapper
