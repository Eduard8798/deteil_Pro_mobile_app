import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import type {LoginRequest, LoginResponse,} from "../type/type";
import {apiURL} from "../../../apiURL";


export const authApi = createApi({
    reducerPath: 'authApi',

    baseQuery:fetchBaseQuery({
        baseUrl: process.env.EXPO_PUBLIC_API_URL || apiURL,
    }),

    endpoints: build => ({
        login: build.mutation<LoginResponse,LoginRequest>({
            query: (data) => ({
                url: '/api/login/',
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body:data
            }),
        }),

    }),

})


export const {useLoginMutation,
} = authApi;