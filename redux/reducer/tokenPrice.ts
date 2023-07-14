import { createSlice } from "@reduxjs/toolkit"
import { Contract } from "ethers"

interface tokenPrice {
  ethPrice1: number | undefined
  usdtPrice1: number | undefined
  arbPrice1: number | undefined
}

const initialState: tokenPrice = {
  ethPrice1: undefined,
  usdtPrice1: undefined,
  arbPrice1: undefined,
}

export const tokenPriceSlice = createSlice({
  name: "tokenPrice",
  initialState,
  reducers: {
    setEthPrice1: (state, action) => {
      state.ethPrice1 = action.payload
    },
    setUsdtPrice1: (state, action) => {
      state.usdtPrice1 = action.payload
    },
    setArbPrice1: (state, action) => {
      state.arbPrice1 = action.payload
    },
  },
})

export const { setEthPrice1, setUsdtPrice1, setArbPrice1 } =
  tokenPriceSlice.actions
