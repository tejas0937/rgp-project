import React from 'react'
import productscor from '../data/productscor.json'
import productswood from '../data/productswood.json'
import productsprot from '../data/productsprot.json'
import productscust from '../data/productscust.json'
import './prod.css'

const Products = () => {
  return (
    <>
    <div className="prod-head">
    <h1 className='text-8xl text-amber-50 font-bold'>Our Product Portfolio</h1>
    
    <div className='prod flex justify-center'>
      <section className='flex flex-col items-center w-full h-full'>
        <h1 id='prod-h1' >Corrugated Packaging Solutions</h1>
        <div className="prod-con">
          {
            productscor.map((product, id) => (
              <div key={id} className='prod-ind'>
                <img src={product.imgsrc} alt={product.title ? `Image of ${product.title}` : 'Product image'} />
                <h1>{product.title}</h1>
                
              </div>
            ))
          }
        </div>
      </section>
    </div>
    <div className='prod flex justify-center'>
      <section className='flex flex-col items-center w-full h-full'>
        <h1 id='prod-h1' >Wooden Packaging Solutions</h1>
        <div className="prod-con">
          {
            productswood.map((product, id) => (
              <div key={id} className='prod-ind'>
                <img src={product.imgsrc} alt={product.title ? `Image of ${product.title}` : 'Product image'} />
                <h1>{product.title}</h1>
                
              </div>
            ))
          }
        </div>
      </section>
    </div>
    <div className='prod flex justify-center'>
      <section className='flex flex-col items-center w-full h-full'>
        <h1 id='prod-h1' >Protective Accessories</h1>
        <div className="prod-con">
          {
            productsprot.map((product, id) => (
              <div key={id} className='prod-ind'>
                <img src={product.imgsrc} alt={product.title ? `Image of ${product.title}` : 'Product image'} />
                <h1>{product.title}</h1>
              </div>
            ))
          }
        </div>
      </section>
    </div>
    <div className='prod flex justify-center'>
      <section className='flex flex-col items-center w-full h-full'>
        <h1 id='prod-h1' >Custom Solutions</h1>
        <div className="prod-con">
          {
            productscust.map((product, id) => (
              <div key={id} className='prod-ind'>
                <img src={product.imgsrc} alt={product.title ? `Image of ${product.title}` : 'Product image'} />
                <h1>{product.title}</h1>
                
              </div>
            ))
          }
        </div>
      </section>
    </div>
    </div></>
  )
}

export default Products
