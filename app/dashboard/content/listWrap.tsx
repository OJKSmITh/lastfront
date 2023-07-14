import { ImgWrap, Item, ItemWrap, Items, ItemsWrap, Line } from "../styled"

interface IToken {
  index: string
  price: string
  name: string
  TVL: string
  TotalVol: string
  color: string
  img: string[]
}

interface TokenItem {
  tokenItem: IToken[]
}

const ListWrap = ({ tokenItem }: TokenItem) => {
  return (
    <ItemWrap>
      {tokenItem.map((item, i) => (
        <ItemsWrap key={i}>
          <Items>
            <Item color={item.color}>{item.index}</Item>
            <Item color={item.color}>
              {item.img[0] && item.img[1] ? (
                <ImgWrap>
                  <img
                    src={item.img[0]}
                    style={{ width: "16px", height: "16px" }}
                  />
                  <img
                    src={item.img[1]}
                    style={{ width: "16px", height: "16px" }}
                  />
                </ImgWrap>
              ) : item.img[0] ? (
                <img
                  src={item.img[0]}
                  style={{ width: "24px", height: "24px" }}
                />
              ) : (
                <></>
              )}
              {item.name}
            </Item>
            {item.price && <Item color={item.color}>{item.price}</Item>}
            <Item color={item.color}>{item.TVL}</Item>
            <Item color={item.color}>{item.TotalVol}</Item>
          </Items>
          <Line></Line>
        </ItemsWrap>
      ))}
    </ItemWrap>
  )
}

export default ListWrap
