import { AmountBox, NumberWrapper, PercentBar, PercentBarWrapper, YesNoAmount, YesNoBox, YesNoPercent, YesOrNo } from "../styled/page.styled"

interface DataInfo {
  title: string
  percent: string
  color: string
}

const SelectBox = ({ data, onClick }: { data: DataInfo; onClick: () => void }) => {
  return (
    <YesNoBox onClick={onClick}>
      <YesOrNo>{data.title}</YesOrNo>
      <AmountBox>
        <NumberWrapper>
          <YesNoPercent color={data.color}>{data.percent}</YesNoPercent>
        </NumberWrapper>
        <PercentBarWrapper>
          <PercentBar width={data.percent} color={data.color}></PercentBar>
        </PercentBarWrapper>
      </AmountBox>
    </YesNoBox>
  )
}

export default SelectBox
