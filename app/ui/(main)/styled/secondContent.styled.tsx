import styled from "styled-components"

interface Tcolor {
  color: string
}

export const Wrapper = styled.div`
  padding: 48px 0px;
  background: linear-gradient(180deg, #fff 22%, #d7caec 100%);
  width: 100%;
`

export const LayoutWrapper = styled.div`
  width: 100%;
  padding: 48px 0px;
  min-height: auto;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & h2 {
    color: #280d5f;
  }
  & div {
    color: #7a6eaa;
  }
  > :nth-child(3) {
    margin-bottom: 32px;
  }
  > :nth-child(5) {
    margin-bottom: 32px;
  }
  > :nth-last-child(1) {
    margin-bottom: 32px;
    font-weight: bold;
  }
`
export const BoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`

export const CardLayoutWrapper = styled.div`
  padding: 1px 1px 4px;
  background: #e7e3eb;
  border-radius: 24px;
  overflow: hidden;
  position: relative;
  width: 280px;
  height: 280px;
`

export const CardWrapper = styled.div`
  width: 300px;
  height: 100%;
  background: #fff;
  border-radius: 24px;
`

export const CardSecondWrapper = styled.div`
  padding: 24px;
`
export const CardIconWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`

export const CardTxTWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: 64px;
  > :nth-last-child(1) {
    margin-top: 24px;
    color: #7a6eaa;
  }
`

export const CardTitle = styled.h2<Tcolor>`
  color: ${({ color }) => color};
  font-size: 40px;
  font-weight: 600;
  line-height: 1.1;
`
