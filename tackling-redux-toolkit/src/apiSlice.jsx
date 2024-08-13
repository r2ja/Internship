import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const productsAPI = createApi({
    reducerPath: "productsAPI",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => "products",
        }),
    }),
});

export const {useGetAllProducts} = productsAPI;
