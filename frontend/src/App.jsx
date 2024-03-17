import data from './data'

function App() {
  

  return (
    <>
      <div className="w-full bg-white-600 min-h-screen">
        <header className="w-50 md:w-full bg-black mx-auto flex justify-between px-2 py-5">
        <h2 className="font-bold text-3xl text-gray-400 ">sellme</h2>
        </header>
       <main>
        <h2 className='p-5 text-2xl text-gray-700 font-bold'>Featured products</h2>
        <div className='flex flex-wrap gap-7 px-5 items-center mx-auto'>
          {
            data.products.map((product)=>(
              <div key={product.slug} className='w-full md:w-96 h-96 flex flex-col items-center border border-gray-400 p-3 rounded'>
                <a className='no-underline' href={`/product/${product.slug}`}>
                  <img className="w-[100%] h-[80%] p-5" src={product.image} alt={product.name}/>
                  </a>
                 <a href={`/product/${product.slug}`}>
                 <p className='text-blue-600'>{product.name}</p>
                 </a>
                  <p className='p-2'><strong>$ {product.price}.00</strong></p>
                 <button className='bg-green-500 w-40 p-2 mt-3 rounded' >Add to cart</button>
              </div>
              
            ))
          }
        </div>
       </main>
      </div>
      
    </>
  )
}

export default App
