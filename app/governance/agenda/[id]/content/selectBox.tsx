import {
  AmountBox,
  NumberWrapper,
  PercentBar,
  PercentBarWrapper,
  YesNoAmount,
  YesNoBox,
  YesNoPercent,
  YesOrNo,
} from "../styled/page.styled"

interface DataInfo {
  title: string
  vkSP: string
  percent: string
  color: string
}

const SelectBox = ({
  data,
  onClick,
}: {
  data: DataInfo
  onClick: () => void
}) => {
  return (
    <YesNoBox>
      <YesOrNo>{data.title}</YesOrNo>
      <AmountBox>
        <NumberWrapper>
          <YesNoAmount>{data.vkSP} vkSP</YesNoAmount>
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
