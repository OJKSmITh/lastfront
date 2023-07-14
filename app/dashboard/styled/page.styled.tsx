"use client"

import styled from "styled-components"

interface Isize {
  width?: string
  height?: string
}

export const Header = styled.div`
  margin: 0px 24px;
`

export const Subject = styled.div`
  margin-bottom: 16px;

  & h2 {
    color: #280d5f;
  }
`

export const Total = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
`

export const Amount = styled.div`
  border: 1px solid #e7e3eb;
  border-radius: 24px;
  background: #fff;
  padding: 24px;

  & h3 {
    color: #7645d9;
  }

  & h1 {
    color: #280d5f;
  }
`

export const TokensWrap = styled.div`
  margin: 10px 24px;
`

export const ItemWrap = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding-top: 16px;
  gap: 16px;
  border: 1px solid #e7e3eb;
  border-radius: 24px;
`

export const ItemsWrap = styled.div`
  display: grid;
  grid-auto-rows: auto;
  row-gap: 16px;
`

export const Items = styled.div`
  display: grid;
  gap: 1em;
  align-items: center;
  grid-template-columns: 20px 3fr repeat(4, 1fr);
  padding: 0px 24px;
`

export const Item = styled.div<Isize>`
  width: ${({ width }) => width};
  color: ${({ color }) => color};
  display: flex;
  gap: 10px;
  font-weight: 400;
`

export const Line = styled.div`
  height: 1px;
  background-color: #e7e3eb;
  width: 100%;
`

export const ImgWrap = styled.div``
