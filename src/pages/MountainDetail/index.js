import React from 'react'
import { useParams } from 'react-router-dom';

export default function MountainDetail() {
  const param = useParams();

  const product = {
    id: 1,
    name: 'Product Name',
    description: 'Product description goes here.',
    price: 29.99,
    imageUrl: 'https://i.natgeofe.com/n/c9107b46-78b1-4394-988d-53927646c72b/1095_3x2.jpg',
  };

  return (
    <div className="container mx-auto px-4 pt-24 pb-10 h-screen">
      <div className="md:flex">
        {/* Product Image */}
        <div className="md:w-1/2">
          <img src={product.imageUrl} alt={product.name} className="w-full" />
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 md:ml-8">
          <h1 className="text-3xl font-semibold mb-4">{product.id}</h1>
          <h1 className="text-3xl font-semibold mb-4">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-blue-500 font-semibold mt-2">${product.price.toFixed(2)}</p>

          {/* Add to Cart Button */}
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full text-lg">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
