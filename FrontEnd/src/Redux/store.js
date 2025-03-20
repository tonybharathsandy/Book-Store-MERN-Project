import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'
import booksApi from './features/book/bookApi'
import orderApi from './features/orders/ordersApi'

export const store = configureStore({
  reducer: {
    cart : cartReducer,
    [booksApi.reducerPath] : booksApi.reducer,
    [orderApi.reducerPath] : orderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware, orderApi.middleware),
})
