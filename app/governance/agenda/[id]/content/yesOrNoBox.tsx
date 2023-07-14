import { YesNoWrapper } from "../styled/page.styled"
import SelectBox from "./selectBox"
import request from "@/request"
// const data = {
//   title: ["Agreement", "Opposition"],
//   vkSP: ["66,573,528", "332,056"],
//   percent: ["99.50", "0.50"],
// }

const data = [
  {
    title: "Agreement",
    vkSP: "66,573,528",
    percent: "70.50%",
    color: "#1fc7d4",
  },
  {
    title: "Opposition",
    vkSP: "332,056",
    percent: "29.50%",
    color: "#ff0000",
  },
]

const YesOrNoBox = ({ index }: { index: number }) => {
  const isJoin = async () => {
    const res = await request.post(`/governance/${index}`, {
      isJoin: 1,
    })
    console.log(res)
  }

  return (
    <>
      <YesNoWrapper>
        <SelectBox data={data[0]} onClick={() => {}} />
        <SelectBox data={data[1]} onClick={() => {}} />
      </YesNoWrapper>
    </>
  )
}

export default YesOrNoBox
