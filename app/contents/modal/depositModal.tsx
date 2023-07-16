"use client"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "../../components/button/button"
import { SwapBox } from "../../components/swapbox"
import { ModalWrapST } from "../../components/modal2/styled"
import { CustomModal } from "../../components/modal2/styled"
import { ModalcontentST } from "../../components/modal2/styled"
import { Span } from "@/app/components/span/span"
import { ISwap, Token } from "@/app/components/component.inteface"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { Contract, ethers } from "ethers"
import { useFactory } from "@/app/hooks/usefactory"
import { WithdrawsingleModalContent } from "./withDrawsinglModal"
import { Loader } from "@/app/components/loader/loader.styled"

const Arbadd = process.env.NEXT_PUBLIC_ARBTTOKEN_ADDRESS
const Usdtadd = process.env.NEXT_PUBLIC_USDTTOKEN_ADDRESS
const Ethadd = process.env.NEXT_PUBLIC_ETHTOKEN_ADDRESS
const Asdadd = process.env.NEXT_PUBLIC_ASDTOKEN_ADDRESS

const DepositModalContent = ({ token, balance }: ISwap) => {
  const { provider, wallet, tokenPrice } = useSelector<RootState, RootState>((state) => state)
  const router = useRouter()
  const [differValue, setDifferValue] = useState(0)
  const [contractInstance, setContractInstance] = useState<Contract | null>(null)
  const [signerInstance, setsignerInstance] = useState<Contract | null>(null)
  const [differamount, setDifferAmount] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const userAmount = async (signerInstance: Contract, differTokenAddress: string, asdTokenAddress: string) => {
    let tx1 = await signerInstance.checkToken(differTokenAddress)
    const amount1 = ethers.BigNumber.from(tx1)
    return amount1
  }

  const sDeposit = async (signerInstance: Contract, differAmount: number) => {
    let realAmount = ethers.utils.parseEther(differamount.toString())
    if (token === "ETH") {
      const tx = await signerInstance.Sdeposit(Ethadd, realAmount)
      setIsLoading(false)
    } else if (token === "ARB") {
      const tx = await signerInstance.Sdeposit(Arbadd, realAmount)
      console.log("dddd")
      setIsLoading(false)
    } else if (token === "USDT") {
      const tx = await signerInstance.Sdeposit(Usdtadd, realAmount)
      setIsLoading(false)
    }
    setIsLoading(false)
  }

  const handleInputChange1 = (event: any) => {
    setDifferAmount(event.target.value)
  }

  useEffect(() => {
    if (provider.provider !== "none") {
      const contract = useFactory(provider.provider)
      setContractInstance(contract as Contract)
    }
  }, [provider])

  const submitButton = (e: any) => {
    e.preventDefault()
    setIsLoading(!isLoading)
    if (!signerInstance) return
    sDeposit(signerInstance, differamount)
    // router.refresh()
  }

  useEffect(() => {
    if (contractInstance) {
      const providers = new ethers.providers.Web3Provider(window.ethereum)
      const signer = providers.getSigner()
      setsignerInstance(contractInstance.connect(signer))
    }
  }, [contractInstance])

  useEffect(() => {
    if (!signerInstance) return
    if (token === "ETH") {
      const fetchData = async () => {
        const { _hex: convert1 } = await userAmount(signerInstance, Ethadd as string, Asdadd as string)
        const bigNumber1 = ethers.BigNumber.from(convert1)
        const converted1 = bigNumber1.div(ethers.constants.WeiPerEther).toNumber()
        setDifferValue(converted1)
      }
      fetchData()
    } else if (token === "ARB") {
      const fetchData = async () => {
        const { _hex: convert1 } = await userAmount(signerInstance, Arbadd as string, Asdadd as string)
        const bigNumber1 = ethers.BigNumber.from(convert1)
        const converted1 = bigNumber1.div(ethers.constants.WeiPerEther).toNumber()
        setDifferValue(converted1)
      }
      fetchData()
    } else if (token === "USDT") {
      const fetchData = async () => {
        const { _hex: convert1 } = await userAmount(signerInstance, Usdtadd as string, Asdadd as string)
        const bigNumber1 = ethers.BigNumber.from(convert1)
        const converted1 = bigNumber1.div(ethers.constants.WeiPerEther).toNumber()
        setDifferValue(converted1)
      }
      fetchData()
    }
  }, [signerInstance])

  return (
    <>
      <ModalWrapST width={280} height={0}>
        <ModalcontentST width={280} height={100} flex={"true"}>
          <Span size={2.2} weight={"true"} text={"Add Liquidity"}></Span>
          <Span size={1.3} weight={"none"} text={"deposit Amount"} left={0} color={"purple"}></Span>
        </ModalcontentST>
        <ModalcontentST width={280} height={150} flex={"true"}>
          <SwapBox token={token} balance={differValue} from={false} onInputChange={handleInputChange1}></SwapBox>
          {isLoading && (
            <div style={{ width: "100%", height: "30px", display: "flex", justifyContent: "center", margin: "5px 0px" }}>
              <Loader />
            </div>
          )}
          <Button width={18} height={3} top={1} text={"Deposit"} onclick={submitButton} disabled={isLoading} background={isLoading}></Button>
        </ModalcontentST>
      </ModalWrapST>
    </>
  )
}

interface IDepositModal {
  token?: string
}

export const DepositModal = ({ token }: IDepositModal) => {
  const router = useRouter()
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalIsOpen2, setModalIsOpen2] = useState(false)


  return (
    <>
      <Button width={6.303} height={2.2} top={1} onclick={() => setModalIsOpen(true)} text={"Deposit"}></Button>
      <Button width={6.303} height={2.2} top={0.5} onclick={() => setModalIsOpen2(true)} text={"Withdraw"}></Button>
      <CustomModal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        width={340}
        height={350}
        left={17}
        content={<DepositModalContent token={token as Token} balance={0} from={false} />}
      />
      <CustomModal
        isOpen={modalIsOpen2}
        onClose={() => setModalIsOpen2(false)}
        width={340}
        height={350}
        left={17}
        content={<WithdrawsingleModalContent token={token as Token} />}
      />
    </>
  )
}
