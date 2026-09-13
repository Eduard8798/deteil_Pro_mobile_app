import {
    fetchBaseQuery,
    type BaseQueryFn,
    type FetchArgs,
    type FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";

interface IRefreshResponse {
    access: string;
    refresh: string;
}

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:8080",

    prepareHeaders: (headers) => {
        const token = localStorage.getItem("accessToken");
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
            const refreshToken = localStorage.getItem("refreshToken");


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

                    localStorage.setItem("accessToken", data.access);
                    localStorage.setItem("refreshToken", data.refresh);

                    console.log("NEW ACCESS", data.access);
                    console.log("FROM STORAGE", localStorage.getItem("accessToken"));

                    // повторяем исходный запрос
                    result = await baseQuery(args, api, extraOptions);
                    console.log("SECOND RESULT", result);
                } else {
                    localStorage.clear();
                }
            } else {
                localStorage.clear();
            }
        }

        return result;
    };