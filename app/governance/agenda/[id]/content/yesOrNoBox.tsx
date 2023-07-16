import { YesNoWrapper } from "../styled/page.styled"
import SelectBox from "./selectBox"
import request from "@/request"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { SetStateAction, useEffect, useState, Dispatch } from "react"
import { BigNumber, ethers } from "ethers"
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

const YesOrNoBox = ({ index, proposal, setProposal }: { index: number; proposal: any; setProposal: Dispatch<SetStateAction<any>> }) => {
  const {
    wallet: { signer },
    contract: { governance, selfToken },
  } = useSelector<RootState, RootState>((state) => state)
  const [voteData, setVoteData] = useState<typeof data>(data)

  const clickToAgree = async () => {
    if (governance) {
      const tx = await governance.voting(signer, index, true, {
        gasLimit: 800000,
      })
      const success = await tx.wait()
      if (!success) return alert("이미 참여한 투표거나, 투표에 참여 할 수 없습니다.")
      voteAfter()
    }
  }

  const clickTodisAgree = async () => {
    if (governance) {
      const tx = await governance.voting(signer, index, false, {
        gasLimit: 800000,
      })
      const success = await tx.wait()
      if (!success) return alert("이미 참여한 투표거나, 투표에 참여 할 수 없습니다.")
      voteAfter()
    }
  }

  const setVotePer = async () => {
    if (selfToken && governance) {
      let amountVotes = proposal.amountVote
      if (!proposal.amountVote) amountVotes = 0
      data[0].percent = `${amountVotes.toFixed(2)}%`
      data[1].percent = `${(100 - amountVotes).toFixed(2)}%`
    }
  }

  const voteAfter = async () => {
    if (selfToken && governance) {
      const result = await governance!.getProposal(index)
      const amountVoteAfter = (result[6] as BigNumber).div(ethers.constants.WeiPerEther).toNumber()
      const cloneVoteData = [...voteData]
      cloneVoteData[0].percent = `${amountVoteAfter.toFixed(2)}%`
      cloneVoteData[1].percent = `${(100 - amountVoteAfter).toFixed(2)}%`
      setVoteData(cloneVoteData)
    }
  }

  useEffect(() => {
    setVotePer()
  }, [proposal])

  return (
    <>
      <YesNoWrapper>
        <SelectBox data={voteData[0]} onClick={clickToAgree} />
        <SelectBox data={voteData[1]} onClick={clickTodisAgree} />
      </YesNoWrapper>
    </>
  )
}

export default YesOrNoBox
