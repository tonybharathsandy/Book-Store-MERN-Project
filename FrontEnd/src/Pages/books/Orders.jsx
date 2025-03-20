import React, { useEffect } from 'react';
import { useGetOrderByEmailQuery } from '../../Redux/features/orders/ordersApi';
import { useAuth } from '../../context/ContextApi';

function Orders() {
    const { currentUser, loading } = useAuth();

    const { data: orders = [], isLoading, isError, refetch} = useGetOrderByEmailQuery(currentUser?.email);

    useEffect(() => {
        refetch()
    }, [refetch])

    if ( loading) {
        return <div className="flex justify-center items-center h-screen text-lg">Loading...</div>;
    }

    if(isLoading){
        return <div className="flex justify-center items-center h-screen text-lg">Loading...</div>;
    }

    if (isError) {
        return <div className="text-red-500 text-center mt-5">Error getting order data...</div>;
    }

    return (
        <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
            <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Your Orders</h2>

            {orders.length === 0 ? (
                <p className="text-gray-500 text-center">No orders found.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {orders.map((order) => (
                        <div key={order._id} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Order ID: {order._id}</h3>
                            <ul>
                            <strong>ProductIDs : </strong>
                            {order.productsIds.map((ids, index) => (
                               <li key={index}><strong>{ids}</strong></li> 
                            ))}
                            </ul>
                            <p className="text-gray-600"><span className="font-medium">Name:</span> {order.name}</p>
                            <p className="text-gray-600"><span className="font-medium">Email:</span> {order.email}</p>
                            <p className="text-gray-600"><span className="font-medium">Phone:</span> {order.phone}</p>
                            <p className="text-gray-600"><span className="font-medium">Total Price:</span> ${order.totalPrices}</p>

                            <div className="mt-4">
                                <h4 className="text-md font-semibold text-gray-700">Address:</h4>
                                <p className="text-gray-600">{order.address.street}, {order.address.city}, {order.address.state}, {order.address.country} - {order.address.zipcode}</p>
                            </div>

                            <p className="text-gray-500 mt-4 text-sm">
                                <span className="font-medium">Ordered on:</span> {new Date(order.createdAt).toLocaleDateString()}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Orders;
