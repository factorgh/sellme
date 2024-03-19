import React from 'react'

const Product = ({product}) => {
  return (
    <div  className='w-full md:w-96 h-[200] flex flex-col bg-gray-100 b items-center  p-3 rounded'>
    <a className='no-underline' href={`/product/${product.slug}`}>
      <img className="w-[100%] h-[80%] p-5" src={product.image} alt={product.name}/>
      </a>
      <div className='w-full px-3 flex flex-col  items-start'> 
      <a  href={`/product/${product.slug}`}>
     <p className='text-blue-600'>{product.name}</p>
     </a>
      <p className='p-2'><strong>$ {product.price}.00</strong></p>
      </div>
     
     <button className='bg-green-500 hover:bg-blue-600 hover:drop-shadow-xl ease-in-out transition duration:0 hover:duration-150 hover:text-white w-30 p-3 mt-3 rounded-lg' >Add to cart</button>
  </div>
  )
}

export default Product
