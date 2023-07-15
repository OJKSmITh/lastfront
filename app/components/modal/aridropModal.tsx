"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import {
  AirdropInfo,
  AirdropPeriod,
  AirdropPeriodDate,
  AirdropPeriodTxT,
  ModalContainer,
  ModalContent,
  ModalOuter,
  MyAirdropAmount,
  MyAirdropTxT,
  RewardDate,
  TotalAirdropAmount,
  TotalAirdropAmountTxT,
  TotalAirdropAmountValue,
} from "./styled/airdrop.styled"
import ButtonWrapper from "../../components/button/airdropButtonWrapper"
import { Contract } from "ethers"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"

const AirdropModal = ({ setIsOpen, index, contract }: { setIsOpen: (value: boolean) => void; index: number; contract: Contract | null }) => {
  const wrapperRef = useRef<HTMLDivElement>(null)

  const { wallet } = useSelector<RootState, RootState>((state) => state)
  const LPToken = process.env.NEXT_PUBLIC_ETHLP_ADDRESS

  const handler = useCallback(
    (e: any) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    },
    [wrapperRef.current]
  )

  useEffect(() => {
    document.addEventListener("mousedown", handler)
    return () => {
      document.removeEventListener("mousedown", handler)
    }
  })

  const clickHandler = async () => {
    // console.log(provider, airdropContract)
    if (contract) {
      const tx = await contract.doAirdrop(wallet.signer, LPToken, index, {
        gasLimit: 80000,
      })
      const result = await tx.wait()
    }
  }
  // console.log(index) //index로 구분해서 데이터 받아오기.

  return (
    <ModalOuter>
      <ModalContainer ref={wrapperRef}>
        <ModalContent>
          <MyAirdropTxT>My Airdrop</MyAirdropTxT>
          <MyAirdropAmount>Airdrop</MyAirdropAmount>
          <RewardDate>Enable reward Date: 2023.07.20 09:00</RewardDate>
          <ButtonWrapper onclick={clickHandler} />
          <AirdropInfo>
            <AirdropPeriod>
              <AirdropPeriodTxT>Airdrop Date</AirdropPeriodTxT>
              <AirdropPeriodDate>23.07.09 ~ 23.07.20</AirdropPeriodDate>
            </AirdropPeriod>
            <TotalAirdropAmount>
              <TotalAirdropAmountTxT>Total Airdrop</TotalAirdropAmountTxT>
              <TotalAirdropAmountValue>1,000 oMEGA</TotalAirdropAmountValue>
            </TotalAirdropAmount>
          </AirdropInfo>
        </ModalContent>
      </ModalContainer>
    </ModalOuter>
  )
}

export default AirdropModal
