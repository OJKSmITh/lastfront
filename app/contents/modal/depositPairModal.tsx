"use client"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "../../components/button/button"
import { SwapBox } from "../../components/swapbox"
import { ModalWrapST } from "../../components/modal2/styled"
import { CustomModal } from "../../components/modal2/styled"
import { ModalcontentST } from "../../components/modal2/styled"
import { Span } from "@/app/components/span/span"
import { IPairSwap, ISwap, Token, TokenBalance } from "@/app/components/component.inteface"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { useFactory } from "@/app/hooks/usefactory"
import { BigNumber, Contract, ethers } from "ethers"
import dotenv from "dotenv"
import { setEthPrice1, setUsdtPrice1, setArbPrice1 } from "@/redux/reducer/tokenPrice"
import { WithdrawPairModalContent } from "./withDrawModal"
import { ContractCA } from "@/contractCA"
dotenv.config()

interface IDepositmodal {
  token1?: string
  balance1?: number
  token2?: string
  balance2?: number
}

const Arbadd = ContractCA.NEXT_PUBLIC_ARBTTOKEN_ADDRESS
const Usdtadd = ContractCA.NEXT_PUBLIC_USDTTOKEN_ADDRESS
const Ethadd = ContractCA.NEXT_PUBLIC_ETHTOKEN_ADDRESS
const Asdadd = ContractCA.NEXT_PUBLIC_ASDTOKEN_ADDRESS

const DepositPairModalContent = ({ token1, balance1, token2, balance2, onClick }: IPairSwap) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { provider, wallet, tokenPrice } = useSelector<RootState, RootState>((state) => state)
  const [differValue, setDifferValue] = useState(0)
  const [asdValue, setAsdValue] = useState(0)
  const [inputValue1, setInputValue1] = useState(0)
  const [inputValue2, setInputValue2] = useState(0)
  const [inputValue3, setInputValue3] = useState(0)
  const [contractInstance, setContractInstance] = useState<Contract | null>(null)
  const [signerInstance, setsignerInstance] = useState<Contract | null>(null)
  const [token1Amount, settoken1Amount] = useState(ethers.BigNumber.from(0))
  const [token2Amount, settoken2Amount] = useState(ethers.BigNumber.from(0))
  const [ethPer, setEthPer] = useState(0)
  const [arbPer, setArbPer] = useState(0)
  const [usdtPer, setUsdtPer] = useState(0)

  const userAmount = async (signerInstance: Contract, differTokenAddress: string, asdTokenAddress: string) => {
    let tx1 = await signerInstance.checkToken(differTokenAddress)
    let tx2 = await signerInstance.checkToken(asdTokenAddress)
    const amount1 = ethers.BigNumber.from(tx1)
    const amount2 = ethers.BigNumber.from(tx2)
    return { amount1, amount2 }
  }

  interface tokenPrice {
    ethPrice?: number
    usdtPrice?: number
    arbPrice?: number
  }

  const setAmount = async (signerInstance: Contract) => {
    let setPrice = await signerInstance.setPrice()
    await setPrice.wait()
    let { _hex: arbHex } = await signerInstance.ArbPrice()
    let { _hex: usdtHex } = await signerInstance.UsdtPrice()
    let { _hex: ethHex } = await signerInstance.EthPrice()
    const arbBig = ethers.BigNumber.from(arbHex)
    const usdtBig = ethers.BigNumber.from(usdtHex)
    const ethBig = ethers.BigNumber.from(ethHex)
    const arbPrice = arbBig.toNumber()
    const usdtPrice = usdtBig.toNumber()
    const ethPrice = ethBig.toNumber()
    dispatch(setEthPrice1(ethPrice))
    dispatch(setUsdtPrice1(usdtPrice))
    dispatch(setArbPrice1(arbPrice))
    console.log(tokenPrice)
  }

  useEffect(() => {
    if (provider.provider !== "none") {
      const contract = useFactory(provider.provider)
      setContractInstance(contract as Contract)
    }
  }, [provider])

  useEffect(() => {
    if (contractInstance) {
      const providers = new ethers.providers.Web3Provider(window.ethereum)
      const signer = providers.getSigner()
      setsignerInstance(contractInstance.connect(signer))
    }
  }, [contractInstance])

  useEffect(() => {
    if (!signerInstance) return
    if (tokenPrice.arbPrice1 === undefined) setAmount(signerInstance)
    console.log(tokenPrice)
    let asdPrice1 = tokenPrice.usdtPrice1 as number
    let EthPer = Math.floor((tokenPrice.ethPrice1 as number) / asdPrice1)
    let UsdtPer = Math.floor((tokenPrice.usdtPrice1 as number) / asdPrice1)
    let ArbPer = Math.floor((tokenPrice.arbPrice1 as number) / asdPrice1)
    setEthPer(EthPer)
    setUsdtPer(UsdtPer)
    setArbPer(ArbPer)
    if (token1 === "ETH") {
      const fetchData = async () => {
        const {
          amount1: { _hex: convert1 },
          amount2: { _hex: convert2 },
        } = await userAmount(signerInstance, Ethadd as string, Asdadd as string)
        const bigNumber1 = ethers.BigNumber.from(convert1)
        const bigNumber2 = ethers.BigNumber.from(convert2)
        const converted1 = bigNumber1.div(ethers.constants.WeiPerEther).toNumber()
        const converted2 = bigNumber2.div(ethers.constants.WeiPerEther).toNumber()
        setDifferValue(converted1)
        setAsdValue(converted2)
      }
      fetchData()
    } else if (token1 === "ARB") {
      const fetchData = async () => {
        const {
          amount1: { _hex: convert1 },
          amount2: { _hex: convert2 },
        } = await userAmount(signerInstance, Arbadd as string, Asdadd as string)
        const bigNumber1 = ethers.BigNumber.from(convert1)
        const bigNumber2 = ethers.BigNumber.from(convert2)
        const converted1 = bigNumber1.div(ethers.constants.WeiPerEther).toNumber()
        const converted2 = bigNumber2.div(ethers.constants.WeiPerEther).toNumber()
        setDifferValue(converted1)
        setAsdValue(converted2)
      }
      fetchData()
    } else if (token1 === "USDT") {
      const fetchData = async () => {
        const {
          amount1: { _hex: convert1 },
          amount2: { _hex: convert2 },
        } = await userAmount(signerInstance, Usdtadd as string, Asdadd as string)
        const bigNumber1 = ethers.BigNumber.from(convert1)
        const bigNumber2 = ethers.BigNumber.from(convert2)
        const converted1 = bigNumber1.div(ethers.constants.WeiPerEther).toNumber()
        const converted2 = bigNumber2.div(ethers.constants.WeiPerEther).toNumber()
        setDifferValue(converted1)
        setAsdValue(converted2)
      }
      fetchData()
    }
    console.log(balance1, balance2)
  }, [signerInstance])

  useEffect(() => {
    if (!signerInstance) return
    console.log(signerInstance)
    if (token1 === "ETH") {
      signerInstance.addLiquid_1(Ethadd, token1Amount, Asdadd, token2Amount)
    } else if (token1 === "ARB") {
      signerInstance.addLiquid_1(Arbadd, token1Amount, Asdadd, token2Amount)
    } else if (token1 === "USDT") {
      signerInstance.addLiquid_1(Usdtadd, token1Amount, Asdadd, token2Amount)
    }
  }, [token1Amount, token2Amount])

  const handleInputChange1 = (event: any) => {
    setInputValue1(event.target.value)
  }
  const handleInputChange2 = (event: any) => {
    setInputValue2(event.target.value)
  }

  const onFocusChange = (event: any) => {
    if (token1 === "ETH") {
      let test = inputValue1 * ethPer
      setInputValue3(test)
    } else if (token1 === "ARB") {
      let test = inputValue1 * arbPer
      setInputValue3(test)
    } else if (token1 === "USDT") {
      let test = inputValue1 * usdtPer
      setInputValue3(test)
    }
  }
  const submitButton = (e: any) => {
    e.preventDefault()
    let realAmount1 = ethers.utils.parseEther(inputValue1.toString())
    let realAmount2 = ethers.utils.parseEther(inputValue3.toString())
    settoken1Amount(realAmount1)
    settoken2Amount(realAmount2)
    router.push("/pool/pair")
    // console.log(realAmount1, realAmount2)
  }
  return (
    <>
      <ModalWrapST width={280} height={250}>
        <ModalcontentST width={280} height={100} flex={"true"}>
          <Span size={2.2} weight={"true"} text={"Add Liquidity"}></Span>
          <Span size={1.3} weight={"none"} text={"deposit Amount"} left={0} color={"purple"}></Span>
        </ModalcontentST>
        <ModalcontentST width={280} height={150}>
          <form>
            <SwapBox token={token1 as Token} balance={differValue as TokenBalance} onInputChange={handleInputChange1} from={false}></SwapBox>
            <SwapBox
              token={token2 as Token}
              balance={asdValue as TokenBalance}
              top={1.2}
              onInputChange={handleInputChange2}
              onFocusChange={onFocusChange}
              from={false}
              defaultValue={inputValue3}
              readonly={true}
            ></SwapBox>
            <Button width={18} height={2} top={2} text={"Deposit"} onclick={submitButton}></Button>
          </form>
        </ModalcontentST>
      </ModalWrapST>
    </>
  )
}

export const DepositPairModal = ({ token1, balance1, token2, balance2 }: IDepositmodal) => {
  const { provider, wallet } = useSelector<RootState, RootState>((state) => state)
  const router = useRouter()
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modal2IsOpen, setModal2IsOpen] = useState(false)
  const [contractInstance, setContractInstance] = useState<Contract | null>(null)
  const [signerInstance, setsignerInstance] = useState<Contract | null>(null)
  const [DAmount, setDAmount] = useState(0)
  const [AAmount, setAAmount] = useState(0)

  useEffect(() => {
    if (provider.provider !== "none") {
      const contract = useFactory(provider.provider)
      setContractInstance(contract as Contract)
    }
  }, [provider])

  useEffect(() => {
    if (contractInstance) {
      const providers = new ethers.providers.Web3Provider(window.ethereum)
      const signer = providers.getSigner()
      setsignerInstance(contractInstance.connect(signer))
    }
  }, [contractInstance])

  return (
    <>
      <Button width={6.303} height={3} onclick={() => setModal2IsOpen(true)} text={"withDraw"}></Button>
      <Button width={6.303} height={3} onclick={() => setModalIsOpen(true)} text={"Deposit"} top={0.5}></Button>
      <CustomModal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        width={340}
        height={500}
        left={17}
        content={<DepositPairModalContent token1={token1 as Token} balance1={DAmount} token2={token2 as Token} balance2={AAmount} />}
      />
      <CustomModal
        isOpen={modal2IsOpen}
        onClose={() => setModal2IsOpen(false)}
        width={340}
        height={650}
        left={17}
        content={<WithdrawPairModalContent token={token1 as Token} />}
      />
    </>
  )
}
