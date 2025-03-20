import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetchBookByIdQuery } from '../../Redux/features/book/bookApi'
import { Link } from 'react-router-dom'
import { imageUrl } from '../../Utilities/imageUrl';
import { useDispatch } from 'react-redux'
import { addToCart } from '../../Redux/features/cart/cartSlice';

function SingleDataPage() {
    let { id } = useParams();
    const dispatch = useDispatch();
    
    let { data: book, isLoading, error } = useFetchBookByIdQuery(id);

    if (isLoading) return <div className="text-center text-lg font-semibold mt-10">Loading...</div>;
    if (error) return <div className="text-center text-red-500 text-lg mt-10">Book not found!</div>;

    function handleAddToCart(book) {
        dispatch(addToCart(book));
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="max-w-2xl w-full bg-white shadow-lg rounded-xl p-6">
                <img 
                    src={imageUrl(book.coverImage)} 
                    alt={book.title} 
                    className="w-full h-80 object-cover rounded-lg mb-6"
                />
                <h1 className="text-3xl font-bold text-gray-800">{book.title}</h1>
                <h2 className="text-xl text-gray-600 mt-2">Category: {book.category}</h2>
                <p className="text-gray-700 mt-4">{book.description}</p>
                <p className="text-2xl font-semibold text-green-600 mt-4">Price: ${book.newPrice}</p>

                {/* Buttons Section */}
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <Link 
                        to="/" 
                        className="flex-1 text-center bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Back to Book List
                    </Link>

                    <button 
                        onClick={() => handleAddToCart(book)}
                        className="flex-1 bg-yellow-500 text-white py-3 px-4 rounded-lg hover:bg-yellow-600 transition duration-300 shadow-md"
                    >
                        🛒 Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SingleDataPage;
