"use client"

import styled, { keyframes } from "styled-components"

interface Itxt {
  fontSize: string
  color: string
}

export const Container = styled.div`
  max-width: 100%;
  padding: 0px 10rem;
  background: #e6fdff;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 20px;
`

export const Item = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 30px;
`

export const ItemTxT = styled.h2<Itxt>`
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};
  line-height: 1.1;
`

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`

const move = keyframes`
  from{
    transform: translateY(-10px);
  }
  to{
    transform: translateY(10px);
  }
`

export const MovingImg = styled.img`
  width: 512px;
  object-fit: contain;
  animation: ${move} 2s infinite ease alternate;
`
