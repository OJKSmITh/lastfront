import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { persistReducer } from "redux-persist"
// import storage from "redux-persist/lib/storage";
import accountSlice from "./slice/accountSlice"
import { combineReducers } from "@reduxjs/toolkit"
import createWebStorage from "redux-persist/es/storage/createWebStorage"
import { walletSlice } from "./reducer/wallet"
import { providerSlice } from "./reducer/provider"
import { selectTokenSlice } from "./reducer/selecttoken"
import { contractSlice } from "./reducer/contract"
import { tokenPriceSlice } from './reducer/tokenPrice'

const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null)
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value)
    },
    removeItem(_key: any) {
      return Promise.resolve()
    },
  }
}

const storage =
  typeof window === "undefined"
    ? createNoopStorage()
    : createWebStorage("local")

const reducers = combineReducers({
  account: accountSlice.reducer,
  wallet: walletSlice.reducer,
  provider: providerSlice.reducer,
  selectToken: selectTokenSlice.reducer,
  contract: contractSlice.reducer,
  tokenPrice : tokenPriceSlice.reducer
})

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["account", "wallet","tokenPrice"],
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
