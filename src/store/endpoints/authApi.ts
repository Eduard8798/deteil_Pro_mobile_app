import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {LoginRequest, Registration, TokenResponse,} from "../type/type";
import {apiURL} from "../../../apiURL";

const BASE_URL =
    process.env.EXPO_PUBLIC_API_URL || apiURL;




export const authApi = createApi({
    reducerPath: 'authApi',

    baseQuery:fetchBaseQuery({
        baseUrl: process.env.EXPO_PUBLIC_API_URL || apiURL,
    }),

    endpoints: build => ({
        login: build.mutation<TokenResponse,LoginRequest>({
            query: (data) => ({
                url: '/auth/login',
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body:data
            }),
        }),
        registration: build.mutation<TokenResponse,Registration>({
            query: (data) => ({
                url: '/auth/registration',
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body:data
            }),
        }),

    }),

})


export const {useLoginMutation,
    useRegistrationMutation
} = authApi;