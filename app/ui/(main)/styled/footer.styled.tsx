import styled from "styled-components"

export const Container = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0px 16px;
  background: #27262c;
  height: 100px;
  align-items: center;
`

export const TeamName = styled.div`
  color: #f4eeff;
  > :nth-child(1) {
    color: #9a6aff;
  }
  & span {
    color: #f4eeff;
  }
`

export const Developer = styled.div`
  display: flex;
  gap: 30px;
  > :nth-child(1) {
    color: #9a6aff;
  }
  & span {
    color: #f4eeff;
  }
`

export const Logos = styled.div`
  display: flex;
  color: #b8add2;
  gap: 15px;
`
