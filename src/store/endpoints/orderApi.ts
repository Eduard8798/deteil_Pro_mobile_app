import {createApi} from "@reduxjs/toolkit/query/react";
import {baseQueryWithReauth} from "../api/baseQuery";
import {OrderList} from "../type/type";

export const orderApi = createApi({
    reducerPath: 'orderApi',

    baseQuery:baseQueryWithReauth,

    endpoints: build => ({
        getOrder: build.query<OrderList[],void>({
            query: () => ({
                url: '/order',
                method: 'GET',
            }),
        }),

        getOrderById: build.query<OrderList,void>  ({
            query: (id) => ({
                url:`/order/${id}`,
                method: 'GET',
            }),
        }),
    })
})

export const {
    useGetOrderQuery,
    useGetOrderByIdQuery
}= orderApi;