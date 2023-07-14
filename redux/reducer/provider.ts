import { createSlice } from "@reduxjs/toolkit"
import { ethers } from "ethers"

interface Providers {
  provider: ethers.providers.JsonRpcProvider | string
}

const initialState: Providers = {
  provider: "none",
}

export const providerSlice = createSlice({
  name: "provider",
  initialState,
  reducers: {
    setProvider: (state, action) => {
      state.provider = action.payload
    },
  },
})

export const { setProvider } = providerSlice.actions
