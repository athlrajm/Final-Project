import { configureStore,combineReducers } from "@reduxjs/toolkit";
import CreateSlice from "./CreateSlice";
import CartSlice from "./CartSlice";
import OrderSlice from "./OrderSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'

  const persistConfig = {
    key: 'logindata',
    version: 1,
    storage,
  }
  const rootreducer=combineReducers({userdata:CreateSlice,cart:CartSlice,orders:OrderSlice})
  const persistedReducer = persistReducer(persistConfig, rootreducer)
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
    })
    export let persistor = persistStore(store)