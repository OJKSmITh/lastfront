import { createSlice } from "@reduxjs/toolkit"
import { Contract } from "ethers"

interface Contracts {
  factory: Contract | undefined
  governance: Contract | undefined
  selfToken: Contract | undefined
  airdrop: Contract | undefined
}

const initialState: Contracts = {
  factory: undefined,
  governance: undefined,
  selfToken: undefined,
  airdrop: undefined,
}

export const contractSlice = createSlice({
  name: "contract",
  initialState,
  reducers: {
    setFactory: (state, action) => {
      state.factory = action.payload
    },
    setGovernance: (state, action) => {
      state.governance = action.payload
    },
    setSelfToken: (state, action) => {
      state.selfToken = action.payload
    },
    setAirdrop: (state, action) => {
      state.airdrop = action.payload
    },
  },
})

export const { setFactory, setGovernance, setSelfToken, setAirdrop } = contractSlice.actions
