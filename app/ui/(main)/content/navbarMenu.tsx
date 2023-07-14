import Link from "next/link"
import {
  Item,
  ItemList,
  Menu,
  SubTitle,
  Wrapper,
} from "../styled/navbar.styled"
import NavItem from "./navItem"

interface SubItemProps {
  name: string
  link: string
}

interface ItemProps {
  name: string
  link?: string
  list?: SubItemProps[]
}

const NavList: ItemProps[] = [
  {
    name: "Swap",
    link: "/swap",
  },
  {
    name: "Pool",
    list: [
      { name: "single", link: "/pool/single" },
      { name: "pair", link: "/pool/pair" },
    ],
  },
  {
    name: "Governance",
    list: [
      { name: "staking", link: "/governance/staking" },
      { name: "agenda", link: "/governance/agenda" },
    ],
  },
  {
    name: "Drops",
    link: "/drops",
  },
  {
    name: "Dashboard",
    link: "/dashboard",
  },
]

const NavbarMenu = () => {
  return (
    <Menu>
      {NavList.map((item, i) => (
        <NavItem item={item} key={i} />
      ))}
    </Menu>
  )
}

export default NavbarMenu
