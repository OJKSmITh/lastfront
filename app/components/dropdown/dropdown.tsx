import { ReactNode } from "react"

const Dropdown = ({
  children,
  visibility,
}: {
  children: ReactNode
  visibility: boolean
}) => {
  if (!visibility) return null

  return <div style={{ marginTop: "8px" }}>{children}</div>
}

export default Dropdown
