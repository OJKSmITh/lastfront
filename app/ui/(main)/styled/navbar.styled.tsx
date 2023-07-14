import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  max-width: 100%;
  height: 56px;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 0px 20px;
  border-bottom: 1px solid #e7e3eb;
`

export const Logo = styled.div`
  display: flex;
  gap: 3px;
  align-items: center;
`

export const Menu = styled.div`
  display: flex;
  gap: 1.5rem;
  height: 100%;
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
`

export const Item = styled.div`
  padding: 15px;
  border-radius: 10px;
  font-weight: 500;
  color: #7a6eaa;
  &:hover {
    background: #b4c3ff;
  }
`

export const ItemList = styled.div`
  visibility: hidden;
  position: absolute;
  z-index: 2;
  width: 280px;
  background: #fff;
  top: 55.5px;
  border-radius: 16px;
  transform: translateX(-14px);
  border: 1px solid #e7e4eb;
  padding-top: 4px;
  padding-bottom: 4px;
  margin-bottom: 8px;
  cursor: pointer;
  ${Wrapper}:hover & {
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
