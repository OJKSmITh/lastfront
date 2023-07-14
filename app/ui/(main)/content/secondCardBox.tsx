import {
  CardIconWrapper,
  CardLayoutWrapper,
  CardSecondWrapper,
  CardTitle,
  CardTxTWrapper,
  CardWrapper,
} from "../styled/secondContent.styled"

interface CardContents {
  name: string
  value: string
  during: string
  nameColor: string
  valueColor: string
  icon: () => JSX.Element
}

interface CardContentProps {
  contents: CardContents
}

const CardBox = ({ contents }: CardContentProps) => {
  const Icon = contents.icon
  return (
    <CardLayoutWrapper>
      <CardWrapper>
        <CardSecondWrapper>
          <CardIconWrapper>
            <Icon />
          </CardIconWrapper>
          <CardTxTWrapper>
            <CardTitle color={contents.valueColor}>{contents.value}</CardTitle>
            <CardTitle color={contents.nameColor}>{contents.name}</CardTitle>
            <div>{contents.during}</div>
          </CardTxTWrapper>
        </CardSecondWrapper>
      </CardWrapper>
    </CardLayoutWrapper>
  )
}

export default CardBox
