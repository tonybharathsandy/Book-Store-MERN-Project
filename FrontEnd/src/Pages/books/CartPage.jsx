import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeFromCart } from '../../Redux/features/cart/cartSlice';
import { imageUrl } from '../../Utilities/imageUrl';

function CartPage() {

    const dispatch = useDispatch()
    const store = useSelector(state => state.cart.cartItem)

    let totalCost = store.reduce((acc, item) => acc + item.newPrice, 0)

    function handleClearCart() {
       dispatch(clearCart())
    }

    function removeFromCarts(id){
        dispatch(removeFromCart(id))
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b">
                    <h2 className="text-2xl font-semibold text-gray-800">Shopping Cart</h2>
                    <button
                        onClick={handleClearCart}
                        className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 transition-all"
                    >
                        <FaTrashAlt /> Clear Cart
                    </button>
                </div>
                {/* Cart Items */}
                    <div  className="p-6">
                    <ul className="divide-y divide-gray-200">
                    {store.length > 0 ? store.map((item, index) => (
                        <li key={index} className="flex items-center gap-6 py-4">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img
                                    src={imageUrl(item.coverImage)}
                                    alt="Book"
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <div className="flex flex-1 flex-col">
                                <div className="flex justify-between text-lg font-medium text-gray-900">
                                    <h3>
                                        <Link to="/">{item.title}</Link>
                                    </h3>
                                    <p className="text-indigo-600 font-bold">${item.newPrice}</p>
                                </div>
                                <p className="text-gray-500 text-sm"><strong>Category:</strong> Fiction</p>
                                <div className="flex justify-between items-center mt-2 text-sm">
                                    <p className="text-gray-600"><strong>Qty:</strong> 1</p>
                                    <button onClick={() => removeFromCarts(item._id)} className="text-red-500 hover:underline">Remove</button>
                                </div>
                            </div>
                        </li>
                    )) : <p className="text-center text-lg text-gray-500">No items in cart</p>}
                    </ul>
                </div>                
        

                {/* Footer */}
                <div className="border-t p-6 bg-gray-50">
                    <div className="flex justify-between text-lg font-semibold text-gray-900">
                        <p>Subtotal:</p>
                        <p>${totalCost ? totalCost : 0 }</p>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    <div className="mt-6">
                    {store.length > 0 ? (
                        <Link
                            to="/checkout"
                            className="block w-full text-center bg-indigo-600 text-white py-3 rounded-md shadow-md hover:bg-indigo-700 transition-all"
                        >
                            Proceed to Checkout
                        </Link>
                    ) : <button
                            disabled={true}
                            className="block w-full text-center bg-indigo-600 text-white py-3 rounded-md shadow-md hover:bg-indigo-700 transition-all"
                        >
                            Proceed to Checkout
                        </button>}
                        
                    </div>
                    <div className="mt-4 text-center">
                        <Link to="/" className="text-indigo-600 hover:underline">
                            &larr; Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartPage;
