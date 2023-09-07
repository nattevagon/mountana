import React from 'react'
import { Link } from 'react-router-dom'
import { Banner } from '../../components'

export default function Home() {
  const banners = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is the description of product 1.',
      url: 'https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?cs=srgb&dl=pexels-joyston-judah-933054.jpg&fm=jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is the description of product 2.',
      url: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
    }
  ];

  const mountain = [
    {
      id: 1,
      name: 'Gunung Everest',
      description: 'Gunung paling mematikan seasia sedunia brow',
      url: 'everest',
      imageUrl: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80'
    },
    {
      id: 2,
      name: 'Gunung K2',
      description: 'Gunung paling mematikan seasia sedunia brow',
      url: 'k2',
      imageUrl: 'https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?cs=srgb&dl=pexels-joyston-judah-933054.jpg&fm=jpg'
    },
    {
      id: 3,
      name: 'Gunung Sindoro',
      description: 'Gunung paling mematikan seasia sedunia brow',
      url: 'sindoro',
      imageUrl: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80'
    }
  ];

  return (
    <div className="container mx-auto mt-8 px-4 py-20">
      <div>
        <Banner data={banners} />
      </div>
      <div>
        <div className="container mx-auto mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mountain.map((product, i) => {
              return (
                <div>
                  <div key={product.id} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 ease-in-out" >
                    <Link className='relative' to={'/mountain/' + product.url}>
                      <img className='rounded-2xl' src={product.imageUrl} alt='Product' />
                      <div className='absolute bottom-4 left-4'>
                        <h2 className="text-xl font-semibold text-gray-100">{product.name}</h2>
                        <p className="text-gray-100">{product.description}</p>
                      </div>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
