"use client"

import { Content, ContentWrapper, StakingReward } from "../styled/page.styled"
import RewardArea from "./rewardArea"
import StakingArea from "./stakingArea"
import { useEffect, useState } from "react"
import BasicButton from "@/app/components/button/BasicBtn"
import { Contract, ethers } from "ethers"
import { useDispatch, useSelector } from "react-redux"
import { useRouter } from "next/navigation"
import { RootState } from "@/redux/store"
import { useFactory } from "@/app/hooks/usefactory"
import { ContractCA } from "@/contractCA"

const Arbadd = ContractCA.NEXT_PUBLIC_ARBTTOKEN_ADDRESS
const Usdtadd = ContractCA.NEXT_PUBLIC_USDTTOKEN_ADDRESS
const Ethadd = ContractCA.NEXT_PUBLIC_ETHTOKEN_ADDRESS
const Asdadd = ContractCA.NEXT_PUBLIC_ASDTOKEN_ADDRESS
const ArbLp = ContractCA.NEXT_PUBLIC_ARBLP_ADDRESS
const UsdtLP = ContractCA.NEXT_PUBLIC_USDTLP_ADDRESS
const EthLP = ContractCA.NEXT_PUBLIC_ETHLP_ADDRESS

const StakingContent = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { provider, wallet, tokenPrice } = useSelector<RootState, RootState>((state) => state)

  const [submissionPeriod, setSubmissionPeriod] = useState(0)
  const [submissionAmount, setSubmissionAmount] = useState(0)
  const [submissionLp, setSubmissionLp] = useState("")
  const [contractInstance, setContractInstance] = useState<Contract | null>(null)
  const [signerInstance, setsignerInstance] = useState<Contract | null>(null)
  const [returnAmount, setReturnAmount] = useState(0)

  const handleSubmissionPeriod = (param: number) => {
    setSubmissionPeriod(param)
  }
  const handleSubmissionAmount = (param: number) => {
    setSubmissionAmount(param)
    if (submissionPeriod === 4) {
      setReturnAmount(param)
    } else if (submissionPeriod === 8) {
      setReturnAmount(param * 2)
    } else if (submissionPeriod === 12) {
      setReturnAmount(param * 4)
    }
  }

  const handleSubmissionLp = (param: string) => {
    setSubmissionLp(param)
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

  const submitButton = (e: any) => {
    e.preventDefault()
    if (!signerInstance) return
    console.log(signerInstance)
    let parseAmount = ethers.utils.parseEther(submissionAmount.toString())
    if (submissionLp === "ARBLP") {
      let realPeriod = submissionPeriod
      signerInstance.LpStaking(ArbLp, parseAmount, realPeriod)
    } else if (submissionLp === "USDTLP") {
      let realPeriod = submissionPeriod
      signerInstance.LpStaking(UsdtLP, parseAmount, realPeriod)
    } else if (submissionLp === "ETHLP") {
      let realPeriod = submissionPeriod
      signerInstance.LpStaking(EthLP, parseAmount, realPeriod)
    }
  }

  return (
    <Content>
      <ContentWrapper>
        <StakingReward>
          <StakingArea
            handleSubmissionPeriod={handleSubmissionPeriod}
            handleSubmissionAmount={handleSubmissionAmount}
            handleSubmissionLp={handleSubmissionLp}
          >
            <form style={{ display: "flex", justifyContent: "center" }}>
              <BasicButton
                text="Staking !"
                padding="24px"
                borderRadius="16px"
                fontSize="16px"
                fontWeight="600"
                background="#1fc7d4"
                margin-left="1rem"
                color="#fff"
                left={1}
                onClick={submitButton}
              />
            </form>
          </StakingArea>
          <RewardArea />
        </StakingReward>
      </ContentWrapper>
    </Content>
  )
}

export default StakingContent
