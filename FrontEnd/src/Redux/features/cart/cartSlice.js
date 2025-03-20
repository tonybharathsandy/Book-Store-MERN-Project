import { createSlice } from '@reduxjs/toolkit'
import Swal from 'sweetalert2'

const initialState = {
    cartItem : []
}

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        addToCart : (state, action) =>{
            const existingData = state.cartItem.find(item => item._id === action.payload._id)
            if(!existingData){
                state.cartItem.push(action.payload)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Item successfully added to cart",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
            else{
                Swal.fire({
                    title: "Items already added in Cart",
                    text: "You won't be able to add again!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Ok"
                  })
            }
        },
        removeFromCart : (state, action) =>{
            state.cartItem = state.cartItem.filter(item => item._id !== action.payload)
        },
        clearCart : (state) => {
            state.cartItem = [];
        }
    }
})  

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;