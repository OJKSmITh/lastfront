import { styled } from "styled-components"

interface Item {
  color: string
}

interface IJoin {
  color: string
}

export const FirstLayout = styled.div`
  padding: 32px 0px;
  background: linear-gradient(139.73deg, #e5fdff, #f3efff);
`

export const SecondLayout = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Header = styled.div``

export const HSubject = styled.h1`
  color: #7645d9;
  font-size: 64px;
  line-height: 1.1;
  margin-bottom: 16px;
`

export const HInfo = styled.h3`
  color: #280d5f;
  font-size: 24px;
  line-height: 1.1;
  margin-bottom: 16px;
`

export const FSubject = styled.h2`
  color: #280d5f;
  font-size: 24px;
  line-height: 1.1;
  margin-bottom: 16px;
`

export const FInfo = styled.p`
  color: #280d5f;
  font-size: 16px;
  line-height: 1.5;
`

export const BoardWrapper = styled.div`
  padding: 30px 24px;
  max-width: 1200px;
  margin: 0 auto;
`

export const BoardSubject = styled.h1`
  color: #280d5f;
  margin-bottom: 32px;
`

export const Board = styled.div`
  border-radius: 16px;
  border: 1px solid #e7e3eb;
  overflow: hidden;
`

export const Item = styled.div`
  display: flex;
  padding: 16px 24px;
  border-bottom: 1px solid #e7e3eb;
  cursor: pointer;
  justify-content: space-between;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`

export const Index = styled.div``

export const ItemSubject = styled.div`
  color: #280d5f;
  width: 300px;
`

export const IsVoting = styled.div<Item>`
  width: 100px;
  color: ${({ color }) => (color === "progress" ? "#1fc7d4" : "red")};
`

export const Period = styled.div`
  width: 200px;
  color: #7a6eaa;
`

export const IsChecked = styled.div<IJoin>`
  width: 60px;
  color: ${({ color }) => (color === "false" ? "#ff9632" : "#1fc7d4")};
`
