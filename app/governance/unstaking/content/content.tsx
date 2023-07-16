"use client"

import { Content, ContentWrapper, StakingReward } from "../styled/page.styled"
import RewardArea from "./rewardArea"
import StakingArea from "./stakingArea"
import { useEffect, useState } from 'react'
import BasicButton from '@/app/components/button/BasicBtn'
import { Contract, ethers } from 'ethers'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { RootState } from '@/redux/store'
import { useFactory } from '@/app/hooks/usefactory'



const Arbadd = process.env.NEXT_PUBLIC_ARBTTOKEN_ADDRESS
const Usdtadd = process.env.NEXT_PUBLIC_USDTTOKEN_ADDRESS
const Ethadd = process.env.NEXT_PUBLIC_ETHTOKEN_ADDRESS
const Asdadd = process.env.NEXT_PUBLIC_ASDTOKEN_ADDRESS
const ArbLp = process.env.NEXT_PUBLIC_ARBLP_ADDRESS
const UsdtLP = process.env.NEXT_PUBLIC_USDTLP_ADDRESS
const EthLP = process.env.NEXT_PUBLIC_ETHLP_ADDRESS

const StakingContent = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const {provider, wallet, tokenPrice} = useSelector<RootState, RootState>(
    (state) => state
    )

  const [submissionPeriod, setSubmissionPeriod] = useState(0)
  const [submissionAmount, setSubmissionAmount] = useState(0)
  const [submissionLp, setSubmissionLp] = useState("")
  const [contractInstance, setContractInstance] = useState<Contract | null>(null)
  const [signerInstance, setsignerInstance] =useState<Contract | null>(null)
  
  const handleSubmissionPeriod = (param:number)=>{
    setSubmissionPeriod(param)
  }
  const handleSubmissionAmount = (param:number)=>{
    setSubmissionAmount(param)
  }

  const handleSubmissionLp = (param:string)=>{
    setSubmissionLp(param)
  }

  useEffect(()=>{
    if(provider.provider !== "none"){
      const contract = useFactory(provider.provider)
      setContractInstance(contract as Contract)
    }
  }, [provider])

  useEffect(() => {
    if (contractInstance) {
      const providers = new ethers.providers.Web3Provider(window.ethereum);
      const signer = providers.getSigner()
      setsignerInstance(contractInstance.connect(signer));
    }
  },[contractInstance]
  )

 
  
  const unSubmitButton = (e:any)=>{
    e.preventDefault()
    if(!signerInstance) return
    let parseAmount = ethers.utils.parseEther(submissionAmount.toString())
    console.log(signerInstance)
    if(submissionLp==="ARBLP"){
      let realPeriod =submissionPeriod
      signerInstance.withDrawStaking(ArbLp, parseAmount,{ gasLimit:508388})
    } else if(submissionLp ==="USDTLP"){
      let realPeriod =submissionPeriod
      signerInstance.withDrawStaking(UsdtLP, parseAmount,{ gasLimit:508388})
    } else if(submissionLp ==="ETHLP"){
      let realPeriod =submissionPeriod
      signerInstance.withDrawStaking(EthLP, parseAmount,{ gasLimit:508388})
    }
  }



  return (
    <Content>
      <ContentWrapper>
        <StakingReward>
          <StakingArea handleSubmissionPeriod={handleSubmissionPeriod} handleSubmissionAmount={handleSubmissionAmount} handleSubmissionLp={handleSubmissionLp}/>
        </StakingReward>
        <form>
          <BasicButton
          text="withDraw Staking !"
          padding="24px"
          borderRadius="16px"
          fontSize="16px"
          fontWeight="600"
          background="#1fc7d4"
          margin-left="1rem"
          color="#fff"
          left={1}
          onClick={unSubmitButton}
        />
      </form>
      </ContentWrapper>
    </Content>
  )
}

export default StakingContent
