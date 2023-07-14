import { ImgST } from "./styled"
import { Span } from "../span/span"
import { ContentsWrapST } from "../contentswrap"
import { Token } from "../component.inteface"

interface TokenName {
  token: Token
  onclick?: () => void
}

export const TokenName: React.FC<TokenName> = ({ token, onclick }) => {
  const imags = {
    USDT: "https://cryptologos.cc/logos/tether-usdt-logo.png?v=025",
    ETH: "https://stakingcrypto.info/static/assets/coins/coinbase-wrapped-staked-eth-logo.png",
    ARB: "https://cryptologos.cc/logos/arbitrum-arb-logo.png?v=025",
    ASD: "https://s2.coinmarketcap.com/static/img/coins/64x64/3673.png",
    ARBLP: "https://cryptologos.cc/logos/arbitrum-arb-logo.png?v=025",
    USDTLP: "https://cryptologos.cc/logos/tether-usdt-logo.png?v=025",
    ETHLP:
      "https://stakingcrypto.info/static/assets/coins/coinbase-wrapped-staked-eth-logo.png",
    RETH: "https://stakingcrypto.info/static/assets/coins/coinbase-wrapped-staked-eth-logo.png",
  }
  return (
    <>
      <ContentsWrapST width={3.6} height={2} flex={"true"} onClick={onclick}>
        <img
          style={{ width: "1.4rem", height: "1.4rem", marginRight: "0.3rem" }}
          src={imags[token]}
        />
        <Span text={token} />
      </ContentsWrapST>
    </>
  )
}
