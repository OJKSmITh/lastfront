import { PayloadAction, createSlice } from '@reduxjs/toolkit';


type Account = string[]

const initialState: Account = []

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setAccount: (state, action:PayloadAction<Account>) => state =  action.payload,
  },
});

export const { setAccount } = accountSlice.actions;

export default accountSlice;
