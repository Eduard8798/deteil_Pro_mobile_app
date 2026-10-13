import {createApi} from "@reduxjs/toolkit/query/react";
import {baseQueryWithReauth} from "../api/baseQuery";
import {OrderBody, OrderList} from "../type/type";

export const orderApi = createApi({
    reducerPath: 'orderApi',

    baseQuery:baseQueryWithReauth,
    tagTypes: ['Orders'],

    endpoints: build => ({
        getOrder: build.query<OrderList[],void>({
            query: () => ({
                url: '/order',
                method: 'GET',
            }),
            providesTags: ['Orders']
        }),

        getOrderById: build.query<OrderList,number>  ({
            query: (id) => ({
                url:`/order/${id}`,
                method: 'GET',
            }),


        }),
        createOrder: build.mutation<OrderList,OrderBody>  ({
            query: (body) => ({
                url:`/order/create-order`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['Orders']
        }),
    })
})

export const {
    useGetOrderQuery,
    useGetOrderByIdQuery,
    useCreateOrderMutation
}= orderApi;