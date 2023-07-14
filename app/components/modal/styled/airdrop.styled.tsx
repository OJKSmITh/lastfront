import styled, { keyframes } from "styled-components"

export const ModalOuter = styled.div`
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: rgb(0, 0, 0, 0.3);
`

const modalShow = keyframes`
  from {
    opacity: 0;
    margin-top: -50px;
  }
  to{
    opacity: 1;
    margin-top: 0;
  }
`

export const ModalContainer = styled.div`
  position: absolute;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  height: 490px;
  border: 1px solid #e7e3eb;
  border-radius: 24px;
  display: flex;
  animation: ${modalShow} 1s;
  background: #fff;
  padding: 20px;
`

export const ModalContent = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 400px;
  padding: 10px;
`

export const MyAirdropTxT = styled.h1`
  font-size: 32px;
  color: #7645d9;
`

export const MyAirdropAmount = styled.h3`
  color: #280d5f;
  & strong {
    font-size: 32px;
    color: #ed4b9e;
  }
`

export const RewardDate = styled.div`
  color: #ed4b9e;
`

export const AirdropInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const AirdropPeriod = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  align-items: center;
`

export const AirdropPeriodTxT = styled.div`
  width: 100%;
  color: #280d5f;
`

export const AirdropPeriodDate = styled.div`
  width: 100%;
  text-align: right;
  color: #280d5f;
`

export const TotalAirdropAmount = styled.div`
  display: flex;
  gap: 20px;
`

export const TotalAirdropAmountTxT = styled.div`
  color: #280d5f;
`

export const TotalAirdropAmountValue = styled.div`
  color: #280d5f;
`
