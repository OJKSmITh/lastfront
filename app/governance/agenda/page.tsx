"use client"

import HfLayout from "./content/hfLayout"
import {
  Board,
  BoardSubject,
  BoardWrapper,
  FInfo,
  FSubject,
  HInfo,
  HSubject,
  Header,
  HeaderWrapper,
  Index,
  IsChecked,
  IsVoting,
  Item,
  ItemSubject,
  Period,
} from "./styled"

import ButtonWrap from "./content/buttonWrap"
import { useRouter } from "next/navigation"
import { useQuery } from "@tanstack/react-query"
import request from "@/request"
import style from "./page.module.css"
import { useEffect, useState } from "react"
import { RootState } from "@/redux/store"
import { useDispatch, useSelector } from "react-redux"
import Governance from "../../../contracts/governance.sol/Governance.json"
import Factory from "../../../contracts/Factory_v1.sol/Factory_v1.json"
import SelfToken from "../../../contracts/SelfToken.sol/SelfToken.json"
import { Contract, ethers } from "ethers"
import { setProviders } from "@/app/utiles/setprovider"
import { setProvider } from "@/redux/reducer/provider"
import { setFactory, setGovernance, setSelfToken } from "@/redux/reducer/contract"

interface Items {
  subject: string
  content: string
  id: number
  progress: string
  created_at: string
  end_date: string
  isJoin: number
}

const Agenda = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const {
    provider,
    wallet,
    contract: { governance, selfToken },
  } = useSelector<RootState, RootState>((state) => state)
  const [proposals, setProposals] = useState<Items[] | null>(null)

  let { data, isLoading } = useQuery({
    queryKey: ["governance"],
    queryFn: async () => {
      const res = await request.get("/api/governance")
      setProposals(res.data)
      return res.data
    },
  })

  useEffect(() => {
    if (typeof provider.provider === "string") {
      ;(async () => {
        const providers = await setProviders(wallet)
        dispatch(setProvider(providers))
      })()
    }
  }, [])

  const connectContract = (ca: string, abi: any) => {
    if (typeof provider.provider !== "string") {
      const signer = provider.provider.getSigner()
      const instance = new ethers.Contract(ca, abi, provider.provider)
      const contract = instance.connect(signer)
      return contract
    }
  }

  useEffect(() => {
    if (typeof provider.provider !== "string") {
      const signer = provider.provider.getSigner()
      const govCA = process.env.NEXT_PUBLIC_GOVERNOR_ADDRESS
      const factoryCA = process.env.NEXT_PUBLIC_FACTORY_ADDRESS
      const VASDCA = process.env.NEXT_PUBLIC_VASDTOKEN_ADDRESS
      const govinstance = new ethers.Contract(govCA!, Governance.abi, provider.provider)
      const factoryinstatnce = new ethers.Contract(factoryCA!, Factory.abi, provider.provider)
      const VASDinstance = new ethers.Contract(VASDCA!, SelfToken.abi, provider.provider)
      const govContract = govinstance.connect(signer)
      const facContract = factoryinstatnce.connect(signer)
      const VASDContract = VASDinstance.connect(signer)
      dispatch(setGovernance(govContract))
      dispatch(setFactory(facContract))
      dispatch(setSelfToken(VASDContract))
    }
  }, [provider])

  if (isLoading) {
    return <span className={style.loader}></span>
  }

  const setJoin = () => {
    if (governance && selfToken) {
      data.map(async (v: Items) => {
        const join = await governance.getHasVote(v.id)
        v.isJoin = join
      })
    }
  }

  setJoin()

  return (
    <>
      <HfLayout>
        <HeaderWrapper>
          <Header>
            <HSubject>Voting</HSubject>
            <HInfo>Have your say in the future of the CookieSwap Ecosystem</HInfo>
            <ButtonWrap margin="">Make a Proposal</ButtonWrap>
          </Header>
          <img src="https://pancakeswap.finance/images/voting/voting-presents.png" />
        </HeaderWrapper>
      </HfLayout>
      <BoardWrapper>
        <BoardSubject>Proposals</BoardSubject>
        <Board>
          {isLoading && <>loading</>}
          {proposals
            ? proposals.map((item: Items) => (
                <Item
                  key={item.id}
                  onClick={() => {
                    router.push(`/governance/agenda/${item.id}`)
                  }}
                >
                  <Index>{item.id}</Index>
                  <ItemSubject>{item.subject}</ItemSubject>
                  <IsVoting color={item.progress}>{item.progress}</IsVoting>
                  <Period>
                    {item.created_at.toString().split("T")[0]} ~ {item.end_date.toString().split("T")[0]}
                  </Period>
                  <IsChecked color={item.isJoin}>{item.isJoin === 0 ? "미참여" : "참여"}</IsChecked>
                </Item>
              ))
            : "없습니다"}
        </Board>
      </BoardWrapper>
      <HfLayout>
        <HeaderWrapper>
          <Header>
            <FSubject>Got a suggestion ?</FSubject>
            <FInfo>Community proposals are a great way to see how the community feels about your ideas.</FInfo>
            <FInfo>
              They won't necessarily be implemented if the community votes successful, but suggestions with a lot of community support may be made
              into Core proposals.
            </FInfo>
            <ButtonWrap margin="10px">Make a Proposal</ButtonWrap>
          </Header>
          <img src="https://pancakeswap.finance/images/voting/voting-bunny.png" />
        </HeaderWrapper>
      </HfLayout>
    </>
  )
}

export default Agenda
