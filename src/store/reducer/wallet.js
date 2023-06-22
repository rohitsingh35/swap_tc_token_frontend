import { createSlice } from "@reduxjs/toolkit";
import { CONNECTED_WALLET_DETAILS } from "../types/wallet";

const initialState = {
    accountInfo: {
        web3Provider: null,
        address: null,
        signer: null,
        balance: null
    }
}

const wallet = createSlice({
    name: "Wallet",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(CONNECTED_WALLET_DETAILS, (state, { payload }) => {
            state.accountInfo = payload
        })
    }
});

export const Wallet = wallet.reducer;