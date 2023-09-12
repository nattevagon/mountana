import React from 'react'
import { Link } from 'react-router-dom';

export default function Schedule() {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is the description of product 1.',
      price: 19.99,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is the description of product 2.',
      price: 29.99,
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'This is the description of product 3.',
      price: 14.99,
    },
    {
      id: 1,
      name: 'Product 1',
      description: 'This is the description of product 1.',
      price: 19.99,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is the description of product 2.',
      price: 29.99,
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'This is the description of product 3.',
      price: 14.99,
    },
    {
      id: 1,
      name: 'Product 1',
      description: 'This is the description of product 1.',
      price: 19.99,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is the description of product 2.',
      price: 29.99,
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'This is the description of product 3.',
      price: 14.99,
    },
    {
      id: 1,
      name: 'Product 1',
      description: 'This is the description of product 1.',
      price: 19.99,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is the description of product 2.',
      price: 29.99,
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'This is the description of product 3.',
      price: 14.99,
    },
    {
      id: 1,
      name: 'Product 1',
      description: 'This is the description of product 1.',
      price: 19.99,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is the description of product 2.',
      price: 29.99,
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'This is the description of product 3.',
      price: 14.99,
    },
    {
      id: 1,
      name: 'Product 1',
      description: 'This is the description of product 1.',
      price: 19.99,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is the description of product 2.',
      price: 29.99,
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'This is the description of product 3.',
      price: 14.99,
    },
  ];

  return (
    <div className="container mx-auto mt-8 px-4 py-20">
      <h1 className="text-3xl font-semibold mb-4">Schedule</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300 ease-in-out" >
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-blue-500 font-semibold mt-2">${product.price.toFixed(2)}</p>
            <Link to={process.env.PUBLIC_URL+'/mountain/'+product.id}>
              <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full text-lg">
                Detail
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
