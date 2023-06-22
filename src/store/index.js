import { configureStore } from "@reduxjs/toolkit";
import { Wallet } from "./reducer/wallet";

const reducer = {
    Wallet
}

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    devTools: true
});

export default store