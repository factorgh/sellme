import React from 'react'
import Product from '../components/Product'
import data from '../data'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="w-full flex flex-col bg-white-600 min-h-screen">
     <Header/>
      <main className='container mx-auto flex-1'>
        <h2 className='p-5 text-2xl text-gray-700 font-bold'>Featured products</h2>
        <div className='flex flex-wrap gap-7 px-5 items-center mx-auto'>
          {data.products.map((product) => (
            <Product key={product.brand} product={product} />

          ))}
        </div>
      </main>
            <Footer/>
    </div>

  )
}

export default Home
