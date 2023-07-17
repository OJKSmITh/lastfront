import { ModalWrapST } from "@/app/components/modal2/styled"
import { ModalcontentST } from "@/app/components/modal2/styled"
import { Span } from "@/app/components/span/span"
import { SwapBox } from "@/app/components/swapbox"
import { Button } from "@/app/components/button/button"
import { Token } from "@/app/components/component.inteface"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "@/redux/store"
import { useFactory } from "@/app/hooks/usefactory"
import { useState, useEffect } from "react"
import { Contract, ethers } from "ethers"
import { useRouter } from "next/navigation"
import { ContractCA } from "@/contractCA"

interface IWithdrawPairModalContent {
  token: Token
}

const Arbadd = ContractCA.NEXT_PUBLIC_ARBTTOKEN_ADDRESS
const Usdtadd = ContractCA.NEXT_PUBLIC_USDTTOKEN_ADDRESS
const Ethadd = ContractCA.NEXT_PUBLIC_ETHTOKEN_ADDRESS
const Asdadd = ContractCA.NEXT_PUBLIC_ASDTOKEN_ADDRESS
const ArbLp = ContractCA.NEXT_PUBLIC_ARBLP_ADDRESS
const UsdtLp = ContractCA.NEXT_PUBLIC_USDTLP_ADDRESS
const EthLp = ContractCA.NEXT_PUBLIC_ETHLP_ADDRESS

export const WithdrawPairModalContent = ({ token }: IWithdrawPairModalContent) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { provider, wallet, tokenPrice } = useSelector<RootState, RootState>((state) => state)

  const [differLpValue, setDifferLpValue] = useState(0)
  const [differLpamount, setDifferLpAmount] = useState(0)
  const [differValue, setDifferValue] = useState(0)
  const [asdValue, setAsdValue] = useState(0)
  const [contractInstance, setContractInstance] = useState<Contract | null>(null)
  const [signerInstance, setsignerInstance] = useState<Contract | null>(null)
  const [withDraw1, setwithDraw1] = useState(0)
  const [withDraw2, setwithDraw2] = useState(0)


    const userAmount = async (signerInstance: Contract,differLp:string ,differTokenAddress: string, asdTokenAddress: string) => {
        let tx1 = await signerInstance.checkToken(differLp,{gasLimit:800000});
        let tx2 = await signerInstance.checkToken(differTokenAddress, {gasLimit:800000});
        let tx3 = await signerInstance.checkToken(asdTokenAddress, {gasLimit:800000}); 
        const {_hex:convert1} = ethers.BigNumber.from(tx1);
        const {_hex:convert2} = ethers.BigNumber.from(tx2);
        const {_hex:convert3} = ethers.BigNumber.from(tx3);
        const bigNumber1 = ethers.BigNumber.from(convert1)
        const bigNumber2 = ethers.BigNumber.from(convert2)
        const bigNumber3 = ethers.BigNumber.from(convert3)
        const converted1 = bigNumber1.div(ethers.constants.WeiPerEther).toNumber();
        const converted2 = bigNumber2.div(ethers.constants.WeiPerEther).toNumber();
        const converted3 = bigNumber3.div(ethers.constants.WeiPerEther).toNumber();
        setDifferLpValue(converted1)
        setDifferValue(converted2)
        setAsdValue(converted3)
      };
    
    const calcLp = async (signerInstance:Contract, differLp:string, differLpAmount:number)=>{
        let lpAmount = ethers.utils.parseEther(differLpAmount.toString())
        let tx1 =await signerInstance.getAmount(differLp, lpAmount, Asdadd,{gasLimit:800000})
        let tx2 = await signerInstance.withdrawtoken1({gasLimit:800000})
        let tx3 = await signerInstance.withdrawAsd({gasLimit:800000})
        let amount1 = ethers.BigNumber.from(tx2)
        let amount2 = ethers.BigNumber.from(tx3)
        return {amount1, amount2}
    }

    const subLiquid = async(signerInstance:Contract,differLpToken:string, amount:number, AsdToken:string)=>{
        let lpAmount = ethers.utils.parseEther(amount.toString())
        await signerInstance.withDrawLiquid(differLpToken,lpAmount, AsdToken, {gasLimit:800000})
    }


  const subLiquid = async (signerInstance: Contract, differLpToken: string, amount: number, AsdToken: string) => {
    let lpAmount = ethers.utils.parseEther(amount.toString())
    await signerInstance.withDrawLiquid(differLpToken, lpAmount, AsdToken)
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
    if (token === "ETH") {
      const fetchData = async () => {
        userAmount(signerInstance, EthLp as string, Ethadd as string, Asdadd as string)
      }
      fetchData()
    } else if (token === "ARB") {
      const fetchData = async () => {
        userAmount(signerInstance, ArbLp as string, Arbadd as string, Asdadd as string)
      }
      fetchData()
    } else if (token === "USDT") {
      const fetchData = async () => {
        userAmount(signerInstance, UsdtLp as string, Usdtadd as string, Asdadd as string)
      }
      fetchData()
    }
  }, [signerInstance])

  useEffect(() => {
    if (!signerInstance) return
    if (token === "ETH") {
      const fetchData = async () => {
        const {
          amount1: { _hex: convert1 },
          amount2: { _hex: convert2 },
        } = await calcLp(signerInstance, EthLp!, differLpamount)
        const bigNumber1 = ethers.BigNumber.from(convert1)
        const bigNumber2 = ethers.BigNumber.from(convert2)
        const converted1 = bigNumber1.div(ethers.constants.WeiPerEther).toNumber()
        const converted2 = bigNumber2.div(ethers.constants.WeiPerEther).toNumber()
        setwithDraw1(converted1)
        setwithDraw2(converted2)
      }
      fetchData()
    } else if (token === "ARB") {
      const fetchData = async () => {
        const {
          amount1: { _hex: convert1 },
          amount2: { _hex: convert2 },
        } = await calcLp(signerInstance, ArbLp!, differLpamount)
        const bigNumber1 = ethers.BigNumber.from(convert1)
        const bigNumber2 = ethers.BigNumber.from(convert2)
        const converted1 = bigNumber1.div(ethers.constants.WeiPerEther).toNumber()
        const converted2 = bigNumber2.div(ethers.constants.WeiPerEther).toNumber()
        setwithDraw1(converted1)
        setwithDraw2(converted2)
      }
      fetchData()
    } else if (token === "USDT") {
      const fetchData = async () => {
        const {
          amount1: { _hex: convert1 },
          amount2: { _hex: convert2 },
        } = await calcLp(signerInstance, UsdtLp!, differLpamount)
        const bigNumber1 = ethers.BigNumber.from(convert1)
        const bigNumber2 = ethers.BigNumber.from(convert2)
        const converted1 = bigNumber1.div(ethers.constants.WeiPerEther).toNumber()
        const converted2 = bigNumber2.div(ethers.constants.WeiPerEther).toNumber()
        setwithDraw1(converted1)
        setwithDraw2(converted2)
      }
      fetchData()
    }
  }, [differLpamount])

  const handleInputChange1 = (event: any) => {
    setDifferLpAmount(event.target.value)
  }

  const submitButton = (e: any) => {
    e.preventDefault()
    const fetchData = async () => {
      if (token === "ETH") {
        const fetchData2 = async () => {
          subLiquid(signerInstance!, EthLp!, differLpamount!, Asdadd!)
        }
        fetchData2()
      } else if (token === "ARB") {
        const fetchData2 = async () => {
          subLiquid(signerInstance!, EthLp!, differLpamount!, Asdadd!)
        }
        fetchData2()
      } else if (token === "USDT") {
        const fetchData2 = async () => {
          subLiquid(signerInstance!, EthLp!, differLpamount!, Asdadd!)
        }
        fetchData2()
      }
    }
    fetchData()
    router.push("/pool/pair")
    // console.log(realAmount1, realAmount2)
  }

  return (
    <>
      <ModalWrapST width={280} height={250}>
        <ModalcontentST width={280} height={100} flex={"true"}>
          <Span size={2.2} weight={"true"} text={"sub Liquidity"}></Span>
          <Span size={1.3} weight={"none"} text={"withdraw Amount"} left={0} color={"purple"}></Span>
        </ModalcontentST>
        <ModalcontentST width={280} height={150}>
          <SwapBox token={`${token}LP` as Token} balance={differLpValue} from={false} onInputChange={handleInputChange1}></SwapBox>
          <SwapBox token={token as Token} balance={differValue} top={1.2} from={false} defaultValue={withDraw1} readonly={true}></SwapBox>
          <SwapBox token={"ASD"} balance={asdValue} top={1.2} from={false} defaultValue={withDraw2} readonly={true}></SwapBox>
          <Button width={18} height={2} top={2} text={"WithDraw"} onclick={submitButton}></Button>
        </ModalcontentST>
      </ModalWrapST>
    </>
  )
}
