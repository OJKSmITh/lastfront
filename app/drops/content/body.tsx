import { RootState } from "@/redux/store"
import { Contract, ethers } from "ethers"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { BodyWrapper, BodyContent } from "../styled/page.styled"
import airdrop from "../../../contracts/airdrop.sol/Airdrop.json"
import Airdrop from "./airdrop"

const data = [
  {
    index: 1,
    backgroundImg: "https://ss.klayswap.com/data/drops/token/0xea4c0ce0a20529127979Eb8F3FFBC7909AF09C99.png",
    title: "oPBOS AIR DROP",
    progress: "진행",
  },
  {
    index: 2,
    backgroundImg: "https://ss.klayswap.com/data/drops/token/0xea4c0ce0a20529127979Eb8F3FFBC7909AF09C99.png",
    title: "oADRB AIR DROP",
    progress: "종료",
  },
  {
    index: 3,
    backgroundImg: "https://ss.klayswap.com/data/drops/token/0xea4c0ce0a20529127979Eb8F3FFBC7909AF09C99.png",
    title: "oABCD AIR DROP",
    progress: "종료",
  },
]

const DropBody = () => {
  const { provider } = useSelector<RootState, RootState>((state) => state)
  const [airdropContract, setAirdropContract] = useState<Contract | null>(null)

  useEffect(() => {
    const airdropCA = process.env.NEXT_PUBLIC_AIRDROP_ADDRESS
    if (typeof provider.provider !== "string" && airdropCA) {
      const contract = new ethers.Contract(airdropCA, airdrop.abi, provider.provider)
      const instance = contract.connect(provider.provider.getSigner())
      setAirdropContract(instance)
    }
  }, [])

  return (
    <BodyWrapper>
      <BodyContent>
        {data.map((item, i) => (
          <Airdrop data={item} key={i} contract={airdropContract} />
        ))}
      </BodyContent>
    </BodyWrapper>
  )
}

export default DropBody
