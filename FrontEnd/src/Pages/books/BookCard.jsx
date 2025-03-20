import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import {imageUrl} from '../../Utilities/imageUrl';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { addToCart } from '../../Redux/features/cart/cartSlice';

function BookCard({book}) {

  const dispatch = useDispatch()

  function handleAddToCart(book){
    dispatch(addToCart(book))
  }

  return (

    <div className="rounded-lg transition-shadow duration-300 p-4 bg-white shadow-md">
      <div className="flex flex-col sm:flex-row sm:items-center sm:h-72 sm:justify-start gap-4">
        <div className="sm:h-72 sm:w-48 flex-shrink-0 border rounded-md overflow-hidden">
          <Link to={`/books/${book._id}`}>
            <img
              src={`${imageUrl(book.coverImage)}`}
              alt="Book Cover"
              className="w-full h-full object-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-transform duration-200"
            />
          </Link>
        </div>

        <div>
        <Link to={`/books/${book._id}`}>
            <h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
              {book.title}
            </h3>
          </Link>
          <p className="text-gray-600 mb-5">{book.description.length > 80 ? book.description.slice(0, 80) + "..." : book.description}</p>
          <p className="font-medium mb-5">
            ${book.newPrice} <span className="line-through font-normal ml-2">${book.oldPrice}</span>
          </p>
          <button onClick={() => handleAddToCart(book)} className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
            <FiShoppingCart />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
