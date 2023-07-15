import { Token } from '@/app/components/component.inteface'
import { ModalWrapST } from '@/app/components/modal2/styled'
import { ModalcontentST } from '@/app/components/modal2/styled'
import { Span } from '@/app/components/span/span'
import { SwapBox } from '@/app/components/swapbox'
import { Button } from '@/app/components/button/button'
import { useSelector,useDispatch } from 'react-redux'
import { RootState } from '@/redux/store'
import { useFactory } from '@/app/hooks/usefactory'
import { useState, useEffect } from 'react'
import { Contract, ethers } from 'ethers'
import { useRouter } from 'next/navigation'


interface IWithdrawPairModalContent{
    token:Token
}

const Arbadd = process.env.NEXT_PUBLIC_ARBTTOKEN_ADDRESS
const Usdtadd = process.env.NEXT_PUBLIC_USDTTOKEN_ADDRESS
const Ethadd = process.env.NEXT_PUBLIC_ETHTOKEN_ADDRESS
const Asdadd = process.env.NEXT_PUBLIC_ASDTOKEN_ADDRESS
const ArbLp = process.env.NEXT_PUBLIC_ARBLP_ADDRESS
const UsdtLp = process.env.NEXT_PUBLIC_USDTLP_ADDRESS
const EthLp = process.env.NEXT_PUBLIC_ETHLP_ADDRESS

export const WithdrawsingleModalContent = ({token:token}:IWithdrawPairModalContent) =>{
    const dispatch = useDispatch()
    const router = useRouter()
    const {provider, wallet, tokenPrice} = useSelector<RootState, RootState>(
        (state) => state
        )
    const [differValue, setDifferValue] = useState(0)
    const [contractInstance, setContractInstance] = useState<Contract | null>(null)
    const [signerInstance, setsignerInstance] =useState<Contract | null>(null)

    // const userAccountsBalance = async (signerInstance:Contract)=>{
    //     const tx1 =await signerInstance.claimamountcheck({gasLimit:30000})
    //     await tx1.wait()
    //     const tx2 =await signerInstance.accountBalance({gasLimit:30000})
    //     await tx1.wait()
    //     const {_hex:convert1} = ethers.BigNumber.from(tx2);
    //     const bigNumber1 = ethers.BigNumber.from(convert1)
    //     const converted1 = bigNumber1.div(ethers.constants.WeiPerEther).toNumber();
    //     setDifferValue(converted1)
    // }
    const sWithdraw =async (signerInstance:Contract, differToken:string, differAmount:number) =>{
        let lpAmount = ethers.utils.parseEther(differAmount.toString())
        const a =await signerInstance.Swithdraw(differToken, lpAmount,{gasLimit:800000})
        
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

    useEffect(()=>{
        if(!signerInstance) return
        console.log(signerInstance)
        if(token ==="ETH"){
            // userAccountsBalance(signerInstance)
        } else if(token === "ARB"){
            // userAccountsBalance(signerInstance)
        } else if(token === "USDT"){
            // userAccountsBalance(signerInstance)
        }
      },[signerInstance])

      const submitButton = (e:any)=>{
        e.preventDefault()
        if(!signerInstance) return
        if(token ==="ETH"){
            sWithdraw(signerInstance, Ethadd as string, 1)
        } else if(token === "ARB"){
            sWithdraw(signerInstance, Arbadd as string, 1)
        } else if(token === "USDT"){
            sWithdraw(signerInstance, Usdtadd as string, 1)
        }
      }

    return (
        <>
          <ModalWrapST width={280} height={250}>
            <ModalcontentST width={280} height={100} flex={"true"}>
              <Span size={2.2} weight={"true"} text={"sub Liquidity"}></Span>
              <Span size={1.3} weight={"none"} text={"withdraw Amount"} left={0} color={"purple"}></Span>
            </ModalcontentST>
            <ModalcontentST width={280} height={150}>
              <SwapBox token={`${token}` as Token} balance={0} from={false}  ></SwapBox>
              <Button width={18} height={2} top={2} text={"WithDraw"} onclick={submitButton}></Button>    
            </ModalcontentST>
          </ModalWrapST>
        </>
      )
}