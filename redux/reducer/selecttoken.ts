import { Token } from "@/app/components/component.inteface"
import { createSlice } from "@reduxjs/toolkit"

interface SelectToken {
  fromToken: Token
  toToken: Token
}

const selectToken: SelectToken = {
  fromToken: "ASD",
  toToken: "ETH",
}

export const selectTokenSlice = createSlice({
  name: "selectToken",
  initialState: selectToken,
  reducers: {
    setFromToken: (state, action) => {
      state.fromToken = action.payload
    },
    setToToken: (state, action) => {
      state.toToken = action.payload
    },
  },
})

export const { setFromToken, setToToken } = selectTokenSlice.actions
