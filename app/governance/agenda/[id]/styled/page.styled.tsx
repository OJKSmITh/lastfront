"use client"
import styled from "styled-components"

interface PercentBg {
  width?: string
  color?: string
}

interface PercentTxt {
  color?: string
}

interface Icon {
  background: "string"
}

export const Container = styled.div`
  background: #faf9fa;
  padding: 50px 300px;
  border: 1px solid #e7e3eb;
`

export const BodyWrapper = styled.div`
  background: #fff;
  padding: 20px;
  border: 1px solid #e7e3eb;
  border-radius: 16px;
`

export const SubjectWrapper = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`

export const SubjectVoting = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const MyAmountBox = styled.div`
  padding: 10px;
  border: 1px solid #e7e3eb;
  border-radius: 16px;
`

export const Title = styled.h2`
  font-weight: Bold;
`

export const Voting = styled.div``

export const MyAmountInfo = styled.p`
  font-size: 12px;
  margin-bottom: 10px;
`

export const MyAmount = styled.p`
  font-size: 16px;
`

export const YesNoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
  margin-bottom: 20px;
`

export const YesNoBox = styled.div`
  width: 250px;
  border: 1px solid #e7e3eb;
  border-radius: 16px;
  padding: 30px;
  cursor: pointer;
`

export const YesOrNo = styled.h2`
  margin-bottom: 20px;
`

export const AmountBox = styled.div``

export const NumberWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const YesNoAmount = styled.p`
  color: #999999;
`

export const YesNoPercent = styled.p<PercentTxt>`
  color: ${({ color }) => color};
`

export const PercentBarWrapper = styled.div`
  width: 100%;
  height: 10px;
  background-color: #dee3eb;
`

export const PercentBar = styled.div<PercentBg>`
  width: ${({ width }) => width};
  background-color: ${({ color }) => color};
  height: 10px;
`

export const TextContentWrapper = styled.div`
  padding: 0px 20px;
  width: 100%;
`

export const TextContentSubject = styled.div``

export const TextContentBody = styled.p`
  margin-top: 20px;
  font-size: 14px;
  padding-bottom: 20px;
  border-bottom: 1px solid #000;
`

export const GovWrapper = styled.div`
  padding: 20px;
`

export const DetailInfo = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`

export const ItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
  &:last-child {
    border-bottom: 1px solid #000;
    padding-bottom: 20px;
  }
`

export const ItemTitle = styled.div`
  color: #280d5f;
`

export const ItemValue = styled.div`
  color: #7a6eaa;
  line-height: 1.5;
`

export const GovProgressWrapper = styled.div`
  padding: 0 20px;
`

export const PitemBox = styled.div`
  display: flex;
  justify-content: space-between;
`

export const PitemTitle = styled.div`
  color: #280d5f;
  display: flex;
  gap: 10px;
  align-items: center;
`

export const PitemValue = styled.div``

export const PitemDate = styled.div`
  text-align: right;
  font-size: 14px;
  color: #7a6eaa;
`

export const PitemBlock = styled.div`
  font-size: 12px;
  text-align: right;
`
