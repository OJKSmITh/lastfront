"use client"

import { styled } from "styled-components"

export const Container = styled.div`
  padding: 30px 50px;
  background: #e7e3eb;
`

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 150px;
`

export const Title = styled.h1`
  margin-bottom: 20px;
  color: #280d5f;
`

export const IsHave = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #e7e3eb;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  margin-bottom: 20px;
  background: #fff;
`

export const Amount = styled.div`
  display: flex;
  align-items: center;
  gap: 150px;
`

export const Line = styled.div`
  width: 1px;
  height: 20px;
  border: none;
  margin: 0 20px;
  background: #000;
`

export const Ticket = styled.div`
  display: flex;
  gap: 150px;
  align-items: center;
`

export const HaveTitle = styled.div`
  color: #280d5f;
`

export const HaveAmount = styled.div`
  color: #7645d9;
`

export const CostWrapper = styled.div``

export const Cost = styled.div`
  font-size: 12px;
  color: #7a6eaa;
`

export const ChoiceWrap = styled.div`
  width: 100%;
  padding: 20px 20px;
  border: 1px solid #e7e3eb;
  border-radius: 16px;
  margin-bottom: 20px;
  background: #fff;
`

export const Choice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  position: relative;
  color: #280d5f;
`

export const ChoiceText = styled.h4`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ChoiceList = styled.ul``

export const ChoiceItem = styled.li`
  color: #280d5f;
  padding: 20px 0px;
  &:hover {
    background: #b4c3ff;
  }
`

export const ModalWrapper = styled.div`
  width: 105%;
  position: absolute;
  overflow: hidden;
  background: #fff;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  z-index: 10;
  border: 1px solid #e7e3eb;
  border-radius: 16px;
  top: 44px;
  left: -21px;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 20px;
  gap: 10px;
  cursor: pointer;

  &:hover {
    background-color: #b4c3ff;
  }
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const LevelWrapper = styled.div`
  border-radius: 50%;
  border: 1px solid #e7e3eb;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TokenNameAddress = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
`

export const TokenAddressWrapper = styled.div`
  padding: 20px;
  border: 1px solid #e7e3eb;
  border-radius: 16px;
  width: 500px;
  background: #fff;
`

export const TokenAddressInput = styled.input`
  border: none;
  width: 100%;
  &:focus {
    outline: none;
  }
`

export const TokenNameWrapper = styled.div`
  width: 400px;
  padding: 20px;
  border: 1px solid #e7e3eb;
  border-radius: 16px;
  background: #fff;
`

export const TokenNameBox = styled.div``

export const ChangeCodeBox = styled.div`
  width: 100%;
  padding: 20px;
  border: 1px solid #e7e3eb;
  border-radius: 16px;
  margin-bottom: 20px;
  color: #280d5f;
  background: #fff;
`

export const WriteWrapper = styled.div`
  width: 100%;
  height: 300px;
  border: 1px solid #e7e3eb;
  border-radius: 16px;
  padding: 30px 20px;
  background: #fff;
`

export const SubjectWrapper = styled.div`
  width: 100%;
  padding-bottom: 15px;
  border-bottom: 1px solid #e7e3eb;
`

export const SubjectBox = styled.input`
  width: 100%;
  border: none;
  &:focus {
    outline: none;
  }
`

export const ContentWrapper = styled.div`
  padding: 20px 0px;
  height: 200px;
`

export const ContentBox = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  resize: none;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  &::placeholder {
    color: #999;
  }
  &:focus {
    outline: none;
  }
`

export const SubmitButtonWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
`
