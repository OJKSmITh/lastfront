"use client"

import styled from "styled-components"
import { IBasicBtn } from "../component.inteface"

const BasicButtonSt = styled.button<IBasicBtn>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  color: ${({ color }) => color};
  padding: ${({ padding }) => padding};
  background: ${({ background }) => background};
  border-radius: ${({ borderRadius }) => borderRadius};
  font-size: ${({ fontSize }) => fontSize};
  font-family: ${({ fontFamily }) => fontFamily};
  font-weight: ${({ fontWeight }) => fontWeight};
  margin-left: ${({ left }) => left};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
  cursor: pointer;
  border: none;
`

const BasicButton = (props: IBasicBtn) => {
  const {
    width,
    height,
    color,
    padding,
    background,
    borderRadius,
    fontSize,
    fontWeight,
    letterSpacing,
    text,
    onClick,
    left,
  } = props
  return (
    <BasicButtonSt
      width={width}
      height={height}
      color={color}
      padding={padding}
      background={background}
      borderRadius={borderRadius}
      fontSize={fontSize}
      fontWeight={fontWeight}
      letterSpacing={letterSpacing}
      onClick={onClick}
      left ={left}
    >
      {text}
    </BasicButtonSt>
  )
}

export default BasicButton
