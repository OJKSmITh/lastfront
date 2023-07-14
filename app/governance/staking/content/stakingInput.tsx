import {
  StakingIcon,
  StakingInput,
  StakingInputWrap,
} from "../styled/page.styled"

const StakingInputBox = () => {
  return (
    <StakingInputWrap>
      <StakingInput
        type="number"
        placeholder="You can enter it in integer units only."
      />
      <StakingIcon>
        <img
          src="https://s2.coinmarketcap.com/static/img/coins/64x64/3673.png"
          width="32px"
          height="32px"
        />
        <div>ASD</div>
      </StakingIcon>
    </StakingInputWrap>
  )
}

export default StakingInputBox
