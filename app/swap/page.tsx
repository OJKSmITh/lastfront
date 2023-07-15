"use client"

import { useEffect, useRef, useState } from "react"
import styles from "./page.module.css"
import { SwapToken } from "../contents/swaptoken/swaptoken"
import { IsetToken, Token } from "../components/component.inteface"
import { SettingBtn } from "../components/buttons/settingbtn"
import { Button } from "../components/button/button"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { setFactory } from "@/redux/reducer/contract"
import { useFactory } from "../hooks/usefactory"
import { ethers } from "ethers"
import { setFromToken, setToToken } from "@/redux/reducer/selecttoken"
import { Loader } from "../components/loader/loader.styled"

type Tokens = "ETH" | "RETH" | "ASD" | "ARB" | "USDT"

const tokenCA = {
  ARB: process.env.NEXT_PUBLIC_ARBTTOKEN_ADDRESS,
  USDT: process.env.NEXT_PUBLIC_USDTTOKEN_ADDRESS,
  ASD: process.env.NEXT_PUBLIC_ASDTOKEN_ADDRESS,
  ETH: process.env.NEXT_PUBLIC_ETHTOKEN_ADDRESS,
  RETH: process.env.NEXT_PUBLIC_RETHTOKEN_ADDRESS,
  ARBLP: "",
  USDTLP: "",
  ETHLP: "",
}

// function convertToEther(inputValue) {
//   const valueInWei = ethers.utils.parseEther(inputValue)
//   return valueInWei
// }

const Swap = () => {
  const dispatch = useDispatch()
  const { provider, selectToken, contract, wallet, tokenPrice } = useSelector<RootState, RootState>((state) => state)
  const [inputValueFrom, setInputValueFrom] = useState(0)
  const [returnValue, setreturnValue] = useState("0")
  const [isLoading, setIsLodaing] = useState(false)

  let text = "Swap"
  const setPercent = (token1: Tokens, token2: Tokens) => {
    if (tokenPrice.ethPrice1) {
      const tokenPriceInfo = {
        ETH: tokenPrice.ethPrice1,
        RETH: tokenPrice.ethPrice1,
        USDT: tokenPrice.usdtPrice1,
        ARB: tokenPrice.arbPrice1,
        ASD: tokenPrice.usdtPrice1,
      }
      const percent = tokenPriceInfo[token1]! / tokenPriceInfo[token2]!

      return percent
    }
  }

  useEffect(() => {
    if (provider.provider !== "none" && typeof provider.provider !== "string" && contract.factory === undefined) {
      const factory = useFactory(provider.provider)
      const signer = provider.provider.getSigner()
      const signerfactory = factory!.connect(signer)
      dispatch(setFactory(signerfactory))
    }
  }, [provider])

  useEffect(() => {
    setBalance()
  }, [contract])

  useEffect(() => {
    const percent = setPercent(selectToken.fromToken as Tokens, selectToken.toToken as Tokens)
    if (percent) {
      const result = percent * inputValueFrom
      const returnPrice = result.toFixed(3)
      setreturnValue(returnPrice)
    }
  }, [inputValueFrom])

  const handleInputChangeFrom = (event: any) => {
    setInputValueFrom(event.target.value)
  }

  const tokenData = {
    from: selectToken.fromToken,
    frombalance: 0,
    to: selectToken.toToken,
    tobalance: 0,
  }
  const [tokenSwap, setTokenSwap] = useState<IsetToken>(tokenData)

  const setBalance = async () => {
    if (typeof provider.provider !== "string" && contract.factory !== undefined) {
      const tokenDatas = { ...tokenData }
      const from = await contract.factory.checkToken(tokenCA[tokenData.from])
      const bigNumber = ethers.BigNumber.from(from._hex)
      const converted = bigNumber.div(ethers.constants.WeiPerEther).toNumber()
      tokenDatas.frombalance = converted
      const to = await contract.factory.checkToken(tokenCA[tokenData.to])
      const bigNumberTo = ethers.BigNumber.from(to._hex)
      const convertedTo = bigNumberTo.div(ethers.constants.WeiPerEther).toNumber()
      tokenDatas.tobalance = convertedTo
      setTokenSwap(tokenDatas)
    }
  }

  const setBalanceRethToEth = async () => {
    if (typeof provider.provider == "string") return
    const clonetokenSwap = { ...tokenData }
    const from = await provider.provider.getBalance(wallet.signer)
    const bigNumberFrom = ethers.BigNumber.from(from._hex)
    const convertedFrom = bigNumberFrom.div(ethers.constants.WeiPerEther).toNumber()
    clonetokenSwap.frombalance = convertedFrom
    const to = await contract.factory!.checkToken(tokenCA[tokenData.to])
    const bigNumberTo = ethers.BigNumber.from(to._hex)
    const convertedTo = bigNumberTo.div(ethers.constants.WeiPerEther).toNumber()
    clonetokenSwap.tobalance = convertedTo
    setTokenSwap(clonetokenSwap)
  }

  const setBalanceEthToRETH = async () => {
    if (typeof provider.provider == "string") return
    const clonetokenSwap = { ...tokenData }
    const from = await contract.factory!.checkToken(tokenCA[tokenData.from])
    const bigNumberFrom = ethers.BigNumber.from(from._hex)
    const convertedFrom = bigNumberFrom.div(ethers.constants.WeiPerEther).toNumber()
    clonetokenSwap.frombalance = convertedFrom
    const to = await provider.provider.getBalance(wallet.signer)
    const bigNumberTo = ethers.BigNumber.from(to._hex)
    const convertedTo = bigNumberTo.div(ethers.constants.WeiPerEther).toNumber()
    clonetokenSwap.tobalance = convertedTo

    setTokenSwap(clonetokenSwap)
  }

  useEffect(() => {
    ;(async () => {
      if (checked()) {
        if (selectToken.fromToken == "RETH" && selectToken.toToken == "ETH") {
          setBalanceRethToEth()
        } else {
          setBalanceEthToRETH()
        }
      } else if (selectToken.fromToken == "RETH" || selectToken.toToken == "RETH") {
        setTokenSwap(tokenData)
        alert("불가능한 조합입니다.")
      } else {
        setBalance()
      }
    })()
  }, [selectToken.fromToken, selectToken.toToken])

  const changeClickHandler = () => {
    dispatch(setFromToken(selectToken.toToken))
    dispatch(setToToken(selectToken.fromToken))
  }

  const checked = () => {
    if ((selectToken.fromToken === "ETH" && selectToken.toToken === "RETH") || (selectToken.fromToken === "RETH" && selectToken.toToken === "ETH")) {
      return true
    }
    return false
  }

  const sameToken = () => {
    if (selectToken.fromToken === selectToken.toToken) {
      alert("같은 토큰입니다.")
      return false
    }
    return true
  }

  let clickHandler = async () => {
    if (sameToken() && contract.factory) {
      if (inputValueFrom <= 0) return alert("올바른 숫자를 입력해주세요")
      setIsLodaing(!isLoading)
      const inputString = inputValueFrom.toString()
      const amount = ethers.utils.parseEther(inputString)
      const tx = await contract.factory.swapToken(tokenCA[tokenSwap.from], tokenCA[tokenSwap.to], amount, {
        gasLimit: 800000,
      })
      setIsLodaing(false)
      const complete = await tx.wait()
      if (complete) {
        setBalance()
      } else {
        alert("잘못된 요청입니다.")
      }
    }
  }

  if (checked() && contract.factory) {
    sameToken()
    if (selectToken.fromToken === "RETH" && selectToken.toToken === "ETH") {
      text = "Buy Token"
      clickHandler = async () => {
        if (inputValueFrom <= 0) return alert("올바른 숫자를 입력해주세요")
        const inputString = inputValueFrom.toString()

        const amount = ethers.utils.parseEther(inputString)
        const tx = await contract.factory!.buyToken({
          value: amount,
          gasLimit: 800000,
        })
        setIsLodaing(false)
        const success = await tx.wait()
        if (success) setBalanceRethToEth()
      }
    } else {
      text = "Refund Token"
      clickHandler = async () => {
        if (inputValueFrom <= 0) return alert("올바른 숫자를 입력해주세요")
        const inputString = inputValueFrom.toString()

        const amount = ethers.utils.parseEther(inputString)
        const tx = await contract.factory!.refundToken(tokenCA["ETH"], amount, {
          gasLimit: 800000,
        })
        setIsLodaing(false)
        const success = await tx.wait()
        if (success) setBalanceEthToRETH()
      }
    }
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.swapWrapper}>
          <div className={styles.header}>
            <div className={styles.info}>
              <h3>Swap</h3>
              <span>Trade tokens in an instant</span>
            </div>
            <div className={styles.options}>
              <SettingBtn></SettingBtn>
            </div>
          </div>
          <div className={styles.content}>
            <SwapToken swapData={tokenSwap} onClick={changeClickHandler} onchange={handleInputChangeFrom} returnValue={returnValue}></SwapToken>
            {isLoading && <Loader />}
            <Button width={18} height={3} text={text} onclick={clickHandler} background={isLoading} disabled={isLoading}></Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Swap
