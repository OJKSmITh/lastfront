
import { Span } from '../../span/span';
import { pairCon, Token } from '../../component.inteface';
import { TokenName } from '../../tokenname/token';
import { PoolWrapST } from './styled';
import { DepositModal } from '@/app/contents/modal/depositModal';
import { ContentsWrapST } from '../../contentswrap';


export const SinglePairList = (props: pairCon) => {
  const { text, top, radius1, radius2, radius3, radius4 } = props
  const imags: Record<string, string> = {
    USDT: "https://cryptologos.cc/logos/tether-usdt-logo.png?v=025",
    ETH: "https://stakingcrypto.info/static/assets/coins/coinbase-wrapped-staked-eth-logo.png",
    ARB: "https://cryptologos.cc/logos/arbitrum-arb-logo.png?v=025",
  }
  if (!text) {
    return null
  }

    return (
        <>
            <ContentsWrapST width={80.9} height={8.2} flex={"true"} back={"white"} top={top} radius1={radius1} radius2={radius2} radius3={radius3} radius4={radius4} left={8} >
                <PoolWrapST width={8.49} height={2.25} flex={"none"} left={3.5}>
                    <TokenName token={`${text}LP` as Token} ></TokenName>
                </PoolWrapST>
                <PoolWrapST width={8.49} height={2.75} flex={"true"} left={5}>
                    <Span size={0.7} weight={"none"} text={"Staked Liquidity"} color={"lightPurple"}></Span>
                    <Span size={1.1} weight={"bold"} text={"39.203"} color={"purple"}></Span>
                </PoolWrapST >
                <PoolWrapST width={8.49} height={2.75} flex={"true"} left={5} >
                    <Span size={0.7} weight={"none"} text={"Reward Token"} color={"lightPurple"}></Span>
                    <img style={{ width: "1.4rem", height: "1.4rem" ,marginRight:"1rem"}} src={imags[text]} />
                </PoolWrapST>
                <PoolWrapST width={8.49} height={2.75} flex={"true"} left={5}>
                    <Span size={0.7} weight={"none"} text={"APR"} color={"lightPurple"}></Span>
                    <Span size={1.1} weight={"bold"} text={"25.38%"} color={"purple"}></Span>
                </PoolWrapST >
                <PoolWrapST width={8.49} height={2.55} flex={"true"} right={2}>
                    <DepositModal></DepositModal>
                </PoolWrapST >
                </ContentsWrapST>
        </>
    )
}

