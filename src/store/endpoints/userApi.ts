import {createApi} from "@reduxjs/toolkit/query/react";
import {baseQueryWithReauth} from "../api/baseQuery";
import {UserPasswordRequest} from "../type/type";

export const userApi = createApi({
    reducerPath: 'userApi',

    baseQuery: baseQueryWithReauth,
    tagTypes: ['Users'],

    endpoints: build => ({
        switchPassword: build.mutation<void,UserPasswordRequest>({
            query: (body) => ({
                url: '/users/update-password',
                method: 'PATCH',
                body
            }),
            invalidatesTags: ['Users']
        }),

    })
})

export const {
    useSwitchPasswordMutation
} = userApi;