import styled from "styled-components"

export const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
`

export const SubWrapper = styled.div`
  align-items: center;
  background-color: #eff4f5;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px -2px 0px inset;
  cursor: pointer;
  display: inline-flex;
  height: 32px;
  padding-left: 32px;
  padding-right: 8px;
  position: relative;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`

export const ImgWrapper = styled.div`
  align-items: center;
  background-color: #faf9fa;
  border-color: #1fc7d4;
  border-radius: 50%;
  border-style: solid;
  border-width: 2px;
  display: flex;
  height: 32px;
  justify-content: center;
  left: 0px;
  position: absolute;
  top: 0px;
  width: 32px;
  z-index: 102;
`

export const Account = styled.div`
  display: block;
  margin-left: 8px;
  margin-right: 4px;
  color: #280d5f;
`

export const ItemList = styled.div`
  visibility: hidden;
  position: absolute;
  z-index: 2;
  width: 280px;
  background: #fff;
  top: 55.5px;
  right: -15px;
  border-radius: 16px;
  transform: translateX(-14px);
  border: 1px solid #e7e4eb;
  padding-top: 4px;
  padding-bottom: 4px;
  margin-bottom: 8px;
  cursor: pointer;
  ${MainWrapper}:hover & {
    visibility: visible;
  }
`

export const SubTitle = styled.div`
  cursor: pointer;
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  color: #7a6eaa;

  &:hover {
    background: #b4c3ff;
    width: 100%;
    border-radius: 16px;
  }
`
