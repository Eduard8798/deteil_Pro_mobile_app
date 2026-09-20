import {configureStore} from "@reduxjs/toolkit";
import {authApi} from "./endpoints/authApi";
import {orderApi} from "./endpoints/orderApi";


export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [orderApi.reducerPath]: orderApi.reducer
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware()
            .concat(authApi.middleware)
            .concat(orderApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch