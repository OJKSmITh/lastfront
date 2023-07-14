import Link from "next/link"
import { ItemList, SubTitle } from "../styled/navbar.styled"
import { SubItemProps } from "./navItem"

const SubMenu: React.FC<{ list: SubItemProps[] }> = ({ list }) => {
  return (
    <ItemList>
      {list.map((subItem) => (
        <Link href={subItem.link}>
          <SubTitle>{subItem.name}</SubTitle>
        </Link>
      ))}
    </ItemList>
  )
}

export default SubMenu
