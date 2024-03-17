import React from 'react'
import Product from '../components/Product'
import data from './data'

const Home = () => {
  return (
    <div className="w-full bg-white-600 min-h-screen">
        <header className="w-50 md:w-full bg-black mx-auto flex justify-between px-2 py-5">
        <h2 className="font-bold text-3xl text-gray-400 ">sellme</h2>
        </header>
       <main>
        <h2 className='p-5 text-2xl text-gray-700 font-bold'>Featured products</h2>
        <div className='flex flex-wrap gap-7 px-5 items-center mx-auto'>
          {
            data.products.map((product)=>(
              <Product key={product.brand} product={product}/>
              
            ))
          }
        </div>
       </main>
       </div>
    
  )
}

export default Home
