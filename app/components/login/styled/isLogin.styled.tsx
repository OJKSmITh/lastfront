import styled from "styled-components"

export const MainWrapper = styled.div`
  max-width: 100%;
`

export const SubWrapper = styled.div`
  border-bottom: 1px solid #7645d9;
  border-right: 1px solid #7645d9;
  border-left: 1px solid #7645d9;
  border-radius: 0 0 24px 24px;
  background: linear-gradient(
    rgba(202, 194, 236, 0.9) 0%,
    rgba(204, 220, 239, 0.9) 51.04%,
    rgba(206, 236, 243, 0.9) 100%
  );
  padding: 24px;
  display: flex;
  justify-content: space-between;
`

export const Accounts = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  & > span {
    color: #280d5f;
  }
`

export const Balance = styled.div`
  width: 533px;
  padding: 24px;
  border: 1px solid #ddd;
  border-radius: 24px;
  display: flex;
  justify-content: space-between;
  background: #fff;
`

export const TxtBox = styled.div`
  & > span {
    color: #7a6eaa;
  }
`
