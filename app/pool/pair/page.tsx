"use client"
import PoolIntro from "@/app/components/pool/intro/poolIntro"
import styles from "./page.module.css"
import { PairList } from "@/app/components/pool/pairlist/pair"
import { SwapBox } from "@/app/components/swapbox"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { useFactory } from "../../hooks/usefactory"
import { Contract, ethers } from "ethers"
import dotenv from "dotenv"
import style from "./page.module.css"
dotenv.config()

const address = "0x0000000000000000000000000000000000000000"

const PairPool = () => {
  const { provider, wallet } = useSelector<RootState, RootState>((state) => state)
  const [contractInstance, setContractInstance] = useState<Contract | null>(null)
  const [signerInstance, setsignerInstance] = useState<Contract | null>(null)
  const [isTestPassed, setIsTestPassed] = useState(false)
  const [isEthTestPassed, setEthTestPassed] = useState(false)
  const [isArbTestPassed, setArbTestPassed] = useState(false)
  const [isUsdtTestPassed, setUsdtTestPassed] = useState(false)
  const [ETHAmount, setETHAmount] = useState("")
  const [ARBAmount, setARBAmount] = useState("")
  const [USDTAmount, setUSDTAmount] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const getLpAddress = async (tokenName: string, contractInstance: Contract) => {
    setIsLoading(!isLoading)
    const providers = new ethers.providers.Web3Provider(window.ethereum)
    const signer = providers.getSigner()
    const connectedContract = contractInstance.connect(signer)

    let result
    const test = connectedContract.checkPool()
    test.then((result: any) => {
      console.log(result[2])
      setIsLoading(false)
    })
    switch (tokenName) {
      case "ETH":
        result = await connectedContract.checkPool()
        if (ethers.constants.AddressZero == result[2]) {
          setEthTestPassed(false)
        } else {
          setEthTestPassed(true)
        }
        break
      case "ARB":
        result = await connectedContract.checkPool()
        if (ethers.constants.AddressZero == result[0]) {
          setArbTestPassed(false)
        } else {
          setArbTestPassed(true)
        }
        break
      case "USDT":
        result = await connectedContract.checkPool()
        if (ethers.constants.AddressZero == result[1]) {
          setUsdtTestPassed(false)
        } else {
          setUsdtTestPassed(true)
        }
        break
      default:
        throw new Error(`Unsupported token: ${tokenName}`)
    }
  }

  const getlqAmount = async (tokenName: string, contractInstance: Contract) => {
    const providers = new ethers.providers.Web3Provider(window.ethereum)
    const signer = providers.getSigner()
    const connectedContract = contractInstance.connect(signer)

    let lqAmount

    switch (tokenName) {
      case "ETH":
        lqAmount = await connectedContract.lqAmountETH()
        setETHAmount((lqAmount.toNumber() + ((lqAmount.toNumber()) * 1878)).toString())
        break
      case "ARB":
        lqAmount = await connectedContract.lqAmountARB()
        setARBAmount((lqAmount.toNumber() + ((lqAmount.toNumber()))).toString())
        break
      case "USDT":
        lqAmount = await connectedContract.lqAmountUSDT()
        setUSDTAmount((lqAmount.toNumber() + ((lqAmount.toNumber()))).toString())
        break
      default:
        throw new Error(`Unsupported token: ${tokenName}`)
    }

    return lqAmount
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
      ;["ETH", "ARB", "USDT"].forEach((tokenName) => {
        getLpAddress(tokenName, contractInstance)
          .then((result) => {
            setIsTestPassed(true)
          })
          .catch((err) => console.error(err))
      })
      ;["ETH", "ARB", "USDT"].forEach((tokenName) => {
        getlqAmount(tokenName, contractInstance).catch((err) => console.error(err))
      })
    }
  }, [contractInstance])

  // useEffect(() => {
  //   if (contractInstance) {
  //     const providers = new ethers.providers.Web3Provider(window.ethereum);
  //     const signer = providers.getSigner()
  //     setsignerInstance(contractInstance.connect(signer))
  //   }
  // }, [contractInstance]);

  //   const setCreatePool = async () => {
  //     if (!signerInstance) return
  //     const EthAddress = ethers.utils.getAddress("0x166fce3AB6F2A05c256a539668AF3D1C743fca61")
  //     const AsdAddress = ethers.utils.getAddress("0x50519fcB3D44f3d07fc19b097A6dE33E136649c7")

  //     let tx = await signerInstance.createPool(EthAddress, AsdAddress, {gasLimit:800000});
  //     let response = await tx.wait()
  //     console.log(response)
  //     // console.log(signerInstance)
  // }

  // useEffect(() => {
  //   if (signerInstance) {
  //     console.log(signerInstance)
  //     // setCreatePool()
  //     // const test =signerInstance.createPool("0x25e7878Ea3f5DCf5D3976375141a5d4337F3090a", "0x0BDA0D2Acc74F393bf16C91B06eF0C4FfC148d97", {gasLimit:800000})
  //     // test.then((result: any) =>{
  //     //   console.log(test)
  //     // }).catch((error: any) => {
  //     //   console.error(error); // 추가된 코드: 오류 출력
  //     // });

  //   }
  // }, [signerInstance]);

  if (isLoading) {
    return <span className={style.loader}></span>
  }

  return (
    <div className={styles.container}>
      <PoolIntro />
      {isLoading && <>loading..</>}
      <div style={{ background: "#faf9fa", padding: "24px 32px", height: "100%" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
          {isArbTestPassed && <PairList text="ARB" text2="ASD" top={0} radius1={2} radius2={2} amount1={ARBAmount}></PairList>}
          {isUsdtTestPassed && <PairList text="USDT" text2="ASD" amount1={USDTAmount}></PairList>}
          {isEthTestPassed && <PairList text="ETH" text2="ASD" radius3={2} radius4={2} amount1={ETHAmount}></PairList>}
        </div>
      </div>
    </div>
  )
}

export default PairPool
