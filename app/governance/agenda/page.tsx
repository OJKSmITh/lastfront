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

const list = [
  {
    index: "1",
    subject: "ddd",
    startDate: "23.07.02",
    endDate: "23.07.05",
    progress: "true",
    join: "true",
  },
  {
    index: "1",
    subject: "ddd",
    startDate: "23.07.02",
    endDate: "23.07.05",
    progress: "false",
    join: "false",
  },
]

const Agenda = () => {
  const router = useRouter()

  const { data, isLoading } = useQuery({
    queryKey: ["governance"],
    queryFn: async () => {
      const res = await request.get("/api/governance")
      return res.data
    },
  })

  console.log(data)
  if (isLoading) {
    return <span className={style.loader}></span>
  }

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
          {data.map(
            (item: { subject: string; content: string; id: number; progress: string; created_at: string; end_date: string; isJoin: number }) => (
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
            )
          )}
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
