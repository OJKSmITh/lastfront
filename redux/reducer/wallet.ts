import { createSlice } from "@reduxjs/toolkit"

export const walletSlice = createSlice({
  name: "wallet",
  initialState: { wallet: "none", signer: "none" },
  reducers: {
    setWallet: (state, action) => {
      state.wallet = action.payload
    },
    setSigner: (state, action) => {
      state.signer = action.payload
    },
  },
})

export const { setWallet, setSigner } = walletSlice.actions
