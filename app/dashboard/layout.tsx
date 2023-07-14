// "use client"

import { ReactNode } from "react"
import { Container } from "./styled"

const DashBoardLayout = ({ children }: { children: ReactNode }) => {
  return <Container>{children}</Container>
}

export default DashBoardLayout
