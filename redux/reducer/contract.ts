import { createSlice } from "@reduxjs/toolkit"
import { Contract } from "ethers"

interface Contracts {
  factory: Contract | undefined
}

const initialState: Contracts = {
  factory: undefined,
}

export const contractSlice = createSlice({
  name: "contract",
  initialState,
  reducers: {
    setFactory: (state, action) => {
      state.factory = action.payload
    },
  },
})

export const { setFactory } = contractSlice.actions
