import AmountInfo from "./content/amountInfo"
import ListWrap from "./content/listWrap"
import { Header, Subject, TokensWrap, Total } from "./styled"

const tokenItem = [
  {
    index: "#",
    price: "Price",
    name: "Name",
    TVL: "TVL",
    TotalVol: "TotalVol",
    color: "#7645d9",
    img: [],
  },
  {
    index: "1",
    price: "1.20",
    name: "ASD",
    TVL: "2.19M",
    TotalVol: "1.04K",
    color: "#280d5f",
    img: [
      "https://tokens.pancakeswap.finance/images/0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d.png",
    ],
  },
  {
    index: "1",
    price: "1.20",
    name: "ASD",
    TVL: "2.19M",
    TotalVol: "1.04K",
    color: "#280d5f",
    img: [
      "https://tokens.pancakeswap.finance/images/0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d.png",
    ],
  },
  {
    index: "2",
    price: "1.20",
    name: "ASD",
    TVL: "2.19M",
    TotalVol: "1.04K",
    color: "#280d5f",
    img: [
      "https://tokens.pancakeswap.finance/images/0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d.png",
    ],
  },
  {
    index: "3",
    price: "1.20",
    name: "ASD",
    TVL: "2.19M",
    TotalVol: "1.04K",
    color: "#280d5f",
    img: [
      "https://tokens.pancakeswap.finance/images/0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d.png",
    ],
  },
  {
    index: "4",
    price: "1.20",
    name: "ASD",
    TVL: "2.19M",
    TotalVol: "1.04K",
    color: "#280d5f",
    img: [
      "https://tokens.pancakeswap.finance/images/0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d.png",
    ],
  },
]

const pairItem = [
  {
    index: "#",
    name: "Pair",
    price: "",
    TVL: "TVL",
    TotalVol: "TotalVol",
    color: "#7645d9",
    img: [""],
  },
  {
    index: "1",
    name: "USDT/ASD",
    price: "",
    TVL: "38.16M",
    TotalVol: "36.45K",
    color: "#280d5f",
    img: [
      "https://tokens.pancakeswap.finance/images/0x55d398326f99059fF775485246999027B3197955.png",
      "https://tokens.pancakeswap.finance/images/0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d.png",
    ],
  },
  {
    index: "2",
    name: "ETH/ASD",
    price: "",
    TVL: "38.16M",
    TotalVol: "36.45K",
    color: "#280d5f",
    img: [
      "https://tokens.pancakeswap.finance/images/0x55d398326f99059fF775485246999027B3197955.png",
      "https://tokens.pancakeswap.finance/images/0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d.png",
    ],
  },
  {
    index: "3",
    name: "ARB/ASD",
    price: "",
    TVL: "38.16M",
    TotalVol: "36.45K",
    color: "#280d5f",
    img: [
      "https://tokens.pancakeswap.finance/images/0x55d398326f99059fF775485246999027B3197955.png",
      "https://tokens.pancakeswap.finance/images/0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d.png",
    ],
  },
]

const DashBoard = () => {
  return (
    <>
      <Header>
        <Subject>
          <h2>CookieSwap Info & Analytics</h2>
        </Subject>
        <Total>
          <AmountInfo></AmountInfo>
        </Total>
      </Header>
      <TokensWrap>
        <Subject>
          <h2>Top Tokens</h2>
        </Subject>
        <ListWrap tokenItem={tokenItem}></ListWrap>
      </TokensWrap>
      <TokensWrap>
        <Subject>
          <h2>Top Pairs</h2>
        </Subject>
        <ListWrap tokenItem={pairItem}></ListWrap>
      </TokensWrap>
    </>
  )
}

export default DashBoard
