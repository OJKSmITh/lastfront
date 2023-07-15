import { Contract } from "ethers"
import React, { MouseEventHandler, ReactNode, Dispatch, SetStateAction, ReactEventHandler } from "react"

export interface ISpan {
  size?: number
  weight?: string
  text?: string
  color?: string
  balance?: number
  left?: number
  right?: number
}

export interface Iimg {
  img: string
}

export interface IWrap {
  width: number
  height: number
  flex: string
  back?: string
  left?: number
  top?: number
  right?: number
  border?: number
  direction?: string
  align?: string
  justify?: string
  radius1?: number
  radius2?: number
  radius3?: number
  radius4?: number
}

export type Token = "ETH" | "ARB" | "USDT" | "ASD" | "ARBLP" | "USDTLP" | "ETHLP" | "RETH"

export type TokenBalance = number

export interface PoolWrap {
  width: number
  height: number
  flex: string
  left?: number
  right?: number
}

export interface ButtonCon {
  width?: number
  height?: number
  text?: string
  color?: string
  background?: boolean
  size?: number
  onclick?: any
  left?: number
  top?: number
  index?: string
  disabled?:boolean
}

export interface pairCon {
  text?: string
  text2?: string
  radius1?: number
  radius2?: number
  radius3?: number
  radius4?: number
  top?: number
  amount1?: string
}

export interface modalWrap {
  width?: number
  height?: number
  flex?: string
}
export interface modalHead {
  text?: string
  width?: number
  height?: number
  size?: number
  left?: number
  top?: number
  flex?: string
}

export interface ISwap {
  token: Token
  balance: TokenBalance
  top?: number
  from: boolean
  defaultValue?: number | string | undefined
  onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onFocusChange?: (event: React.FocusEvent<HTMLInputElement>) => void
  readonly?: boolean
  modals?: "true" | "false"
}
export interface IInput {
  onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onFocusChange?: (event: React.FocusEvent<HTMLInputElement>) => void
  readonly?: boolean
  defaultValue?: number | string | undefined
  from: boolean
}

export interface IsetToken {
  from: Token
  frombalance: TokenBalance
  to: Token
  tobalance: TokenBalance
}

export interface ISwapData {
  returnValue?: string
  swapData: IsetToken
  onClick?: MouseEventHandler<HTMLButtonElement>
  onchange?: ReactEventHandler<HTMLInputElement>
}

export interface IButton {
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export interface ICustomModal {
  isOpen?: boolean
  content?: ReactNode
  onClose?: Dispatch<SetStateAction<boolean>>
  width?: number
  height?: number
  left?: number
}

export interface IPairSwap {
  token1?: Token
  balance1?: TokenBalance
  token2?: Token
  balance2?: TokenBalance
  onClick?: (signerInstance: Contract, differToken: string, amount1: number, asdToken: string, amount2: number) => Promise<void>
}

export interface IBasicBtn {
  width?: string
  height?: string
  color?: string
  padding?: string
  background?: string
  borderRadius?: string
  fontSize?: string
  fontFamily?: string
  fontWeight?: string
  letterSpacing?: string
  onClick?: any
  text?: string
  left?: number
}
