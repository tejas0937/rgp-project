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
        <section id='allproduct'>
          <h1 className='text-8xl text-amber-50 font-bold justify-center items-center'>Our Product Portfolio</h1>
          <p className='text-2xl text-amber-50 font-semibold'>Explore our diverse range of packaging solutions designed to meet your needs.</p>
        </section>
        <div className='prod flex justify-center' id='corrugated'>
          <section className='flex flex-col items-center w-full h-full mt-15'>
            <h1 id='prod-h1' >Corrugated Packaging Solutions</h1>
            <div className="prod-con">
              {
                productscor.map((product, id) => (
                  <div key={id} className='prod-ind'>
                    <img src={product.imgsrc} alt={product.title ? `Image of ${product.title}` : 'Product image'} />
                    <h1>{product.title}</h1>
                    <p>{product.desc}</p>
                  </div>
                ))
              }
            </div>
          </section>
        </div>
        <div className='prod flex justify-center' id='wooden'>
          <section className='flex flex-col items-center w-full h-full mt-15'>
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
        <div className='prod flex justify-center' id='protective'>
          <section className='flex flex-col items-center w-full h-full mt-15'>
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
        <div className='prod flex justify-center' id='custom'>
          <section className='flex flex-col items-center w-full h-full mt-15'>
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
            <p className='copyrightimg my-6'>Some images displayed on this platform are generated using AI. and are intended for illustrative, conceptual, or design purposes only.

              We do not claim ownership over real-world likenesses that may appear coincidentally in AI-generated visuals.

            </p>
          </section>
        </div>
      </div></>
  )
}

export default Products
