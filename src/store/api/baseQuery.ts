import {
    fetchBaseQuery,
    type BaseQueryFn,
    type FetchArgs,
    type FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import asyncStorage from "@react-native-async-storage/async-storage";
import {apiURL} from "../../../apiURL";

interface IRefreshResponse {
    access: string;
    refresh: string;
}

const baseQuery =   fetchBaseQuery({
    baseUrl: process.env.EXPO_PUBLIC_API_URL || apiURL,

    prepareHeaders: async (headers)  => {

        const token = await  asyncStorage.getItem("accessToken");
        console.log("HEADER TOKEN", token);

        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }

        return headers;
    },
});

export const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> =
    async (args, api, extraOptions) => {


        let result = await baseQuery(args, api, extraOptions);

        if (result.error?.status === 401) {
            const refreshToken = await asyncStorage.getItem("refreshToken");


            if (refreshToken) {
                const refreshResult = await baseQuery(
                    {
                        url: "/api/token/refresh/",
                        method: "POST",
                        body: { refresh: refreshToken },
                    },
                    api,
                    extraOptions
                );

                if (refreshResult.data) {
                    const data = refreshResult.data as IRefreshResponse

                   await asyncStorage.setItem("accessToken", data.access);
                  await  asyncStorage.setItem("refreshToken", data.refresh);

                    console.log("NEW ACCESS", data.access);
                    console.log("FROM STORAGE", await asyncStorage.getItem("accessToken"));

                    // повторяем исходный запрос
                    result = await baseQuery(args, api, extraOptions);
                    console.log("SECOND RESULT", result);
                } else {
                    asyncStorage.clear();
                }
            } else {
                asyncStorage.clear();
            }
        }

        return result;
    };