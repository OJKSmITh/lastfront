```js
"use client"
import PoolIntro from "@/app/components/pool/intro/poolIntro"
import styles from "./page.module.css"
import { PairList } from '@/app/components/pool/pairlist/pair'
import { SwapBox } from '@/app/components/swapbox'
import { useEffect, useState } from 'react'
import {useSelector} from "react-redux"
import { RootState} from "@/redux/store"
import { useFactory} from "../../hooks/usefactory"
import { Contract, ethers } from 'ethers'

const PairPool = () => {
  const {provider, wallet} = useSelector<RootState, RootState>(
    (state) => state
    )
    const [contractInstance, setContractInstance] = useState<Contract | null>(null)

  useEffect(()=>{
    if(provider.provider !== "none"){

      const contract = useFactory(provider.provider)
      setContractInstance(contract as Contract)
    }
  }, [provider])


  useEffect(() => {
    if (contractInstance) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner()
      const signedContractInstance = contractInstance.connect(signer);
      const lpcheck1 = signedContractInstance.createPool("0x25e7878Ea3f5DCf5D3976375141a5d4337F3090a","0x0BDA0D2Acc74F393bf16C91B06eF0C4FfC148d97")
      console.log(lpcheck1)
    }
  }, [contractInstance]);
  if (!contractInstance) {
    return null
  }




  return (
    <div className={styles.container}>
      <PoolIntro />
      <PairList text='ARB' text2='ASD' top={5.5} radius1={2} radius2={2}></PairList>
      <PairList text='USDT' text2='ASD'></PairList>
      <PairList text='ETH' text2='ASD' radius3={2} radius4={2}></PairList>
    </div>
  )
}

export default PairPool
```

성공했을경우에 fullfiled라고 옴

```js
"use client"
import PoolIntro from "@/app/components/pool/intro/poolIntro"
import styles from "./page.module.css"
import { PairList } from '@/app/components/pool/pairlist/pair'
import { SwapBox } from '@/app/components/swapbox'
import { useEffect, useState } from 'react'
import {useSelector} from "react-redux"
import { RootState} from "@/redux/store"
import { useFactory} from "../../hooks/usefactory"
import { Contract, ethers } from 'ethers'
import dotenv from "dotenv"
dotenv.config()


const address = '0x0000000000000000000000000000000000000000'
const Ethtoken = process.env.NEXT_PUBLIC_ETHTOKEN_ADDRESS
const ASDtoken = process.env.NEXT_PUBLIC_ASDTOKEN_ADDRESS

const PairPool = () => {
  const {provider, wallet} = useSelector<RootState, RootState>(
    (state) => state
    )
    const [contractInstance, setContractInstance] = useState<Contract | null>(null)
    const [signerInstance, setsignerInstance] =useState<Contract | null>(null)
    const [isTestPassed, setIsTestPassed] = useState(false);
    const [isEthTestPassed, setEthTestPassed] = useState(false);
    const [isArbTestPassed, setArbTestPassed] = useState(false);
    const [isUsdtTestPassed, setUsdtTestPassed] = useState(false);
    const [ETHAmount, setETHAmount] = useState(0);
    const [ARBAmount, setARBAmount] = useState(0);
    const [USDTAmount, setUSDTAmount] = useState(0);


    // const getLpAddress = async (tokenName: string, contractInstance: Contract) => {
    //   const providers = new ethers.providers.Web3Provider(window.ethereum);
    //   const signer = providers.getSigner()
    //   const connectedContract = contractInstance.connect(signer)

    //   let result;
    //   const test = connectedContract.checkPool();
    //   test.then((result:any)=>{
    //     console.log(result[2])
    //   })
    //   switch(tokenName) {
    //     case 'ETH':
    //       result = await connectedContract.checkPool();
    //       if (ethers.constants.AddressZero == result[2]){
    //         setEthTestPassed(false);
    //       } else {
    //         setEthTestPassed(true)
    //       }
    //       break;
    //     case 'ARB':
    //       result = await connectedContract.checkPool();
    //       if (ethers.constants.AddressZero == result[1]){
    //         setArbTestPassed(false);
    //       } else {
    //         setArbTestPassed(true)
    //       }
    //       break;
    //     case 'USDT':
    //       result = await connectedContract.checkPool();
    //       if (ethers.constants.AddressZero == result[2]){
    //         setUsdtTestPassed(false);
    //       } else {
    //         setUsdtTestPassed(true)
    //       }
    //       break;
    //     default:
    //       throw new Error(`Unsupported token: ${tokenName}`);
    //   }
    // }

  useEffect(()=>{
    if(provider.provider !== "none"){
      console.log(provider)
      const contract = useFactory(provider.provider)
      setContractInstance(contract as Contract)
    }
  }, [provider])

  // useEffect(() => {
  //   if (contractInstance) {
  //     const providers = new ethers.providers.Web3Provider(window.ethereum);
  //     const signer = providers.getSigner()
  //     setsignerInstance(contractInstance.connect(signer));
  //      ['ETH', 'ARB', 'USDT'].forEach(tokenName => {
  //     getLpAddress(tokenName, contractInstance)
  //       .then(result => {
  //         setIsTestPassed(true)
  //       })
  //       .catch(err => console.error(err));
  //   })
  //   }
  // }, [contractInstance]);
  useEffect(() => {
    if (contractInstance) {
      const providers = new ethers.providers.Web3Provider(window.ethereum);
      const signer = providers.getSigner()
      setsignerInstance(contractInstance.connect(signer))
    }
  }, [contractInstance]);

  const setCreatePool = async () => {
    if (!signerInstance) return
    const test = await signerInstance.createPool("0x25e7878Ea3f5DCf5D3976375141a5d4337F3090a", "0x0BDA0D2Acc74F393bf16C91B06eF0C4FfC148d97", {gasLimit:30000})
    const tx = await test.wait()
    console.log(tx)
    // console.log(signerInstance)

  }

  useEffect(() => {
    if (signerInstance) {
      console.log(signerInstance)
      setCreatePool()
      // const test =signerInstance.createPool("0x25e7878Ea3f5DCf5D3976375141a5d4337F3090a", "0x0BDA0D2Acc74F393bf16C91B06eF0C4FfC148d97", {gasLimit:800000})
      // test.then((result: any) =>{
      //   console.log(test)
      // }).catch((error: any) => {
      //   console.error(error); // 추가된 코드: 오류 출력
      // });

    }
  }, [signerInstance]);

  return (
    <div className={styles.container}>
    <PoolIntro />
    {isArbTestPassed && <PairList text='ARB' text2='ASD' top={5.5} radius1={2} radius2={2}></PairList>}
    {isUsdtTestPassed && <PairList text='USDT' text2='ASD'></PairList>}
    {isEthTestPassed && <PairList text='ETH' text2='ASD' radius3={2} radius4={2}></PairList>}
    </div>
  )
}

export default PairPool

```
