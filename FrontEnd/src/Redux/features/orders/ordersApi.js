import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseUrl from "../../../Utilities/baseUrl";

const orderApi = createApi({
    baseQuery : fetchBaseQuery({
        baseUrl : `${getBaseUrl()}/api/orders`,
        credentials : "include"
    }),
    tagTypes : ['Orders'],
    endpoints : (builder) => ({
        createOrder : (builder.mutation) ({
            query : (newOrders) => ({
                url : '/',
                method : "POST",
                body : newOrders,
                credentials : 'include'
            })
        }),
        getOrderByEmail : (builder.query) ({
            query : (email) =>({
                url : `email/${email}`
            }),
            providesTags : ['Orders']
        })
    })
})

export const {useCreateOrderMutation, useGetOrderByEmailQuery} = orderApi

export default orderApi