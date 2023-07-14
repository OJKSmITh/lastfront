import Link from "next/link"
import { Item, ItemList, SubTitle, Wrapper } from "../styled/navbar.styled"
import SubMenu from "./navSubMenu"

export interface SubItemProps {
  name: string
  link: string
}

interface Item {
  name: string
  link?: string
  list?: SubItemProps[]
}

type NavListProps = {
  item: Item
}

const NavItem: React.FC<NavListProps> = ({ item }) => {
  const { name, link, list } = item

  return (
    <Link href={link ? link : ""}>
      <Wrapper>
        <Item>{name}</Item>
        {list && <SubMenu list={list} />}
      </Wrapper>
    </Link>
  )
}

export default NavItem
