"use client"

import { useEffect, useState } from "react"
import GovInfo from "./content/govInfo"
import GovProgress from "./content/govProgress"
import Subject from "./content/subject"
import TextContent from "./content/textContent"
import YesOrNoBox from "./content/yesOrNoBox"
import { BodyWrapper, Container } from "./styled/page.styled"
import request from "@/request"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { BigNumber, BytesLike, ethers } from "ethers"
import { ButtonDiv } from "@/app/contents/govornor/buttondiv"
import { ContractCA } from "@/contractCA"

type PageParams = {
  id: string
}
type InfoData = (number | string | boolean | BigNumber)[]

const ViewProposal = ({ params }: { params: PageParams }) => {
  const [subject, setSubject] = useState("")
  const [content, setContent] = useState("")
  const [balance, setBalance] = useState<number>(0)
  const [index, setIndex] = useState(0)
  const [proposal, setProposal] = useState<any>("")
  const [date, setDate] = useState<string>("0")

  const owner = ContractCA.NEXT_PUBLIC_OWNER_ADDRESS

  const {
    wallet: { signer },
    contract: { governance, selfToken },
  } = useSelector<RootState, RootState>((state) => state)

  const getData = async () => {
    const res = await request.get(`/api/governance/${params.id}`)
    setDate(`${res.data[0].created_at.toString().split("T")[0]} ~ ${res.data[0].end_date.toString().split("T")[0]}`)
    setSubject(res.data[0].subject)
    setContent(res.data[0].content)
    setIndex(res.data[0].id)
    const contractData = await governance!.getProposal(params.id)
    setInfo(contractData)
    const balance = await selfToken!.balanceOf(signer)
    setBalance(balance.div(ethers.constants.WeiPerEther).toNumber())
  }

  const setInfo = (data: InfoData) => {
    const info = {
      proposal: data[0],
      startBlock: (data[1] as BigNumber).toNumber(),
      endBlock: (data[2] as BigNumber).toNumber(),
      callFunction: ethers.utils.toUtf8String(data[3] as BytesLike),
      canceled: data[4],
      executed: data[5],
      amountVote: (data[6] as BigNumber).div(ethers.constants.WeiPerEther).toNumber(),
      writterNo: params.id,
    }
    setProposal(info)
  }

  useEffect(() => {
    if (governance && selfToken) getData()
  }, [])

  return (
    <Container>
      <BodyWrapper>
        <Subject subject={subject} balance={balance} date={date} />
        <YesOrNoBox index={index} proposal={proposal} setProposal={setProposal}></YesOrNoBox>
        <TextContent subject={subject} content={content} />
        <GovInfo index={index} proposal={proposal} />
        <GovProgress />
        {signer === owner ? <ButtonDiv index={params.id} text={subject} /> : null}
      </BodyWrapper>
    </Container>
  )
}

export default ViewProposal
