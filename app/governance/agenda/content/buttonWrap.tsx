import RouterButton from "@/app/components/button/routerButton"
import { useRouter } from "next/navigation"

const ButtonWrap = ({
  children,
  margin,
}: {
  children: string
  margin: string
}) => {
  const router = useRouter()
  return (
    <div style={{ marginTop: margin }}>
      <RouterButton
        width=""
        height="48px"
        color="#1FC7D4"
        padding="0px 24px"
        background="#fff"
        border="none"
        borderRadius="16px"
        fontSize="16px"
        fontFamily=""
        fontWeight="600"
        cursor="pointer"
        letterSpacing="0.03rem"
        onClick={() => router.push("/governance/agenda/create")}
      >
        {children}
      </RouterButton>
    </div>
  )
}

export default ButtonWrap
