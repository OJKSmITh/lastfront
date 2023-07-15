"use client"

import styled from "styled-components"

interface IItem {
  selected: boolean
}

interface IVisible {
  visibility: boolean
}

export const Container = styled.div``

export const Header = styled.div`
  padding-top: 32px;
  padding-bottom: 32px;
  background: linear-gradient(139.73deg, #e5fdff, #f3efff);
`

export const HeaderWrapper = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  max-width: 1200px;
  margin: 0 auto;
`

export const Title = styled.h1`
  color: #7645d9;
  font-size: 64px;
`

export const Info = styled.h2`
  color: #280d5f;
  font-size: 20px;
`

export const Content = styled.div`
  background: #faf9fa;
`

export const ContentWrapper = styled.div`
  padding: 30px 24px;
  max-width: 1200px;
  margin: 0 auto;
`

export const StakingReward = styled.div`
  border: 1px solid #e7e3eb;
  border-radius: 16px;
  display: flex;
`

export const StakingBox = styled.div`
  padding: 24px;
  border-right: 1px solid #e7e3eb;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  > h2 {
    color: #280d5f;
  }
  > h3 {
    color: #7645d9;
  }
`

export const ChooseBox = styled.div`
  display: flex;
`

export const Item = styled.div<IItem>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  border: 1px solid #e7e3eb;
  cursor: pointer;
  background: ${({ selected }) => (selected ? "#b4c3ff" : "transparent")};
`

export const StakingInputWrap = styled.div`
  border-radius: 16px;
  border: 1px solid #e7e3eb;
  padding: 12px;
  display: flex;
  background: #fff;
  gap: 50px;
`

export const StakingInput = styled.input`
  border: none;
  width: 70%;
  font-size: 20px;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type="number"] {
    -moz-appearance: textfield;
  }
  &:focus {
    outline: none;
  }
`

export const StakingIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
`

export const SelectLPWrapper = styled.div<IVisible>`
  width: 100%;
  border: 1px solid #e7e3eb;
  border-radius: ${({ visibility }) => (!visibility ? "16px" : "16px 16px 0px 0px")};
  cursor: pointer;
  position: relative;
  background: #fff;
`

export const SelectLPBoxWrap = styled.div`
  padding: 12px;
`

export const DefaultLP = styled.div`
  color: #280d5f;
  display: flex;
  justify-content: space-between;
`

export const DownArrowWrap = styled.div``

export const LPListWrap = styled.div``

export const LPList = styled.ul`
  width: 100%;
  position: absolute;
  /* top: 100%; */
  border: 1px solid #e7e3eb;
  background: #fff;
  border-radius: 0px 0px 16px 16px;
`

export const LPItem = styled.li`
  width: 100%;
  padding: 10px;
  color: #280d5f;
  &:hover {
    background: #b4c3ff;
  }
`

export const RewardBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  flex-direction: column;
  gap: 20px;
  > h2 {
    color: #280d5f;
  }
  padding: 24px;
`
