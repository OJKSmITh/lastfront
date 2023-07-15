import { YesNoWrapper } from "../styled/page.styled"
import SelectBox from "./selectBox"
import request from "@/request"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { useEffect } from "react"
import { ethers } from "ethers"
// const data = {
//   title: ["Agreement", "Opposition"],
//   vkSP: ["66,573,528", "332,056"],
//   percent: ["99.50", "0.50"],
// }

const data = [
  {
    title: "Agreement",
    percent: "70.50%",
    color: "#1fc7d4",
  },
  {
    title: "Opposition",
    percent: "29.50%",
    color: "#ff0000",
  },
]

const YesOrNoBox = ({ index, proposal }: { index: number; proposal: any }) => {
  const {
    wallet: { signer },
    contract: { governance, selfToken },
  } = useSelector<RootState, RootState>((state) => state)

  const clickToAgree = async () => {
    if (governance) {
      const tx = await governance.voting(signer, index, true, {
        gasLimit: 800000,
      })
      const success = await tx.wait()
      if (!success) return alert("이미 참여한 투표거나, 투표에 참여 할 수 없습니다.")
      // const res = await request.post(`/governance/${index}`, {
      //   isJoin: 1,
      // })
      // console.log(res)
      setVotePer()
    }
  }

  const clickTodisAgree = async () => {
    if (governance) {
      const tx = await governance.voting(signer, index, false, {
        gasLimit: 800000,
      })
      const success = await tx.wait()
      if (!success) return alert("이미 참여한 투표거나, 투표에 참여 할 수 없습니다.")
      // const res = await request.post(`/governance/${index}`, {
      //   isJoin: 1,
      // })
      // console.log(res)
      setVotePer()
    }
  }

  const setVotePer = async () => {
    if (selfToken && governance) {
      const totalsupply = await selfToken.totalSupply()
      const total = totalsupply.div(ethers.constants.WeiPerEther).toNumber()
      let amountVotes = proposal.amountVote
      if (!proposal.amountVote) amountVotes = 0
      data[0].percent = `${amountVotes.toFixed(2)}%`
      data[1].percent = `${(100 - amountVotes).toFixed(2)}%`
    }
  }

  useEffect(() => {
    setVotePer()
  }, [proposal])

  return (
    <>
      <YesNoWrapper>
        <SelectBox data={data[0]} onClick={clickToAgree} />
        <SelectBox data={data[1]} onClick={clickTodisAgree} />
      </YesNoWrapper>
    </>
  )
}

export default YesOrNoBox
