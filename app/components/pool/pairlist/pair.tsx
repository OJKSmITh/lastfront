"use client"

import { Span } from '../../span/span';
import { pairCon } from '../../component.inteface';
import { ContentsWrapST } from '../../contentswrap';
import { TokenName } from '../../tokenname/token';
import { PoolWrapST } from './styled';
import { DepositPairModal } from '@/app/contents/modal/depositPairModal';



export const PairList =(props:pairCon)=>{
    const {text, text2 ,top, radius1,radius2,radius3,radius4, amount1} = props
    const imags: Record<string, string> = {
        USDT: "https://cryptologos.cc/logos/tether-usdt-logo.png?v=025",
        ETH: "https://stakingcrypto.info/static/assets/coins/coinbase-wrapped-staked-eth-logo.png",
        ARB: "https://cryptologos.cc/logos/arbitrum-arb-logo.png?v=025",
        ASD: "https://s2.coinmarketcap.com/static/img/coins/64x64/3673.png"
    }
    if(!text||!text2) {
        return  null
    }
    return (
        <>
            <ContentsWrapST width={80.9} height={8.2} flex={"true"} back={"white"} top={top} radius1={radius1} radius2={radius2} radius3={radius3} radius4={radius4} left={8} >
                <PoolWrapST width={8.49} height={2.25} flex={"none"} left={3.5}>
                    <img style={{ width: "1.4rem", height: "1.4rem" ,marginRight:"0.2rem"}} src={imags[text]} />
                    <img style={{ width: "1.4rem", height: "1.4rem" ,marginRight:"1rem"}} src={imags[text2]} />
                    <Span size={1.2} weight={"none"} text={`${text}`}></Span>
                    <Span size={1.2} weight={"none"} text={"ASD"}></Span>
                </PoolWrapST>
                <PoolWrapST width={8.49} height={2.75} flex={"true"} left={5}>
                    <Span size={0.7} weight={"none"} text={"Staked Liquidity($)"} color={"lightPurple"}></Span>
                    <Span size={1.1} weight={"bold"} text={amount1} color={"purple"}></Span>
                </PoolWrapST >
                <PoolWrapST width={8.49} height={2.75} flex={"true"} left={5} >
                    <Span size={0.7} weight={"none"} text={"Reward Token"} color={"lightPurple"}></Span>
                    <img style={{ width: "1.4rem", height: "1.4rem" ,marginRight:"1rem"}} src={imags[text2]} />
                </PoolWrapST>
                <PoolWrapST width={8.49} height={2.75} flex={"true"} left={5}>
                    <Span size={0.7} weight={"none"} text={"APR"} color={"lightPurple"}></Span>
                    <Span size={1.1} weight={"bold"} text={"10%"} color={"purple"}></Span>
                </PoolWrapST >
                <PoolWrapST width={8.49} height={4.55} flex={"true"} right={2}>
                    <DepositPairModal token1={text} token2={text2} ></DepositPairModal>
                </PoolWrapST >
            </ContentsWrapST>
        </>
    )
}
