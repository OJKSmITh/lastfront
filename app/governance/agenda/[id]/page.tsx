"use client"

import { useEffect, useState } from "react"
import GovInfo from "./content/govInfo"
import GovProgress from "./content/govProgress"
import Subject from "./content/subject"
import TextContent from "./content/textContent"
import YesOrNoBox from "./content/yesOrNoBox"
import { BodyWrapper, Container } from "./styled/page.styled"
import request from "@/request"

type PageParams = {
  id: string
}

const ViewProposal = ({ params }: { params: PageParams }) => {
  const [subject, setSubject] = useState("")
  const [content, setContent] = useState("")
  const [index, setIndex] = useState(0)

  const getData = async () => {
    const res = await request.get(`/api/governance/${params.id}`)
    setSubject(res.data[0].subject)
    setContent(res.data[0].content)
    setIndex(res.data[0].id)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Container>
      <BodyWrapper>
        <Subject subject={subject} />
        <YesOrNoBox index={index}></YesOrNoBox>
        <TextContent subject={subject} content={content} />
        <GovInfo index={index} />
        <GovProgress />
      </BodyWrapper>
    </Container>
  )
}

export default ViewProposal
