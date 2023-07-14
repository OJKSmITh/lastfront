import { ReactNode } from "react"
import { FirstLayout, SecondLayout, HeaderWrapper, Header } from "../styled"

const HfLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <FirstLayout>
        <SecondLayout>{children}</SecondLayout>
      </FirstLayout>
    </>
  )
}

export default HfLayout
