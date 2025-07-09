import React from 'react'
import productscor from '../data/productscor.json'
import productswood from '../data/productswood.json'
import productsprot from '../data/productsprot.json'
import productscust from '../data/productscust.json'
import ourwork from '../data/ourwork.json'
import './prod.css'

const Products = () => {
  return (
    <>
      <div className="prod-head">
        <h1  id='allproduct' className='text-transparent'> . </h1>
        <div className='items-center justify-center w-full mt-60 h-60 mainhead'>
          <h1 className='text-8xl text-amber-50 font-bold justify-center items-center'>Our Product Portfolio</h1>
          <p className='text-2xl text-amber-50 font-semibold pt-3'>Explore our diverse range of packaging solutions designed to meet your needs.</p>
        </div>
        <div className='prod flex justify-center' id='corrugated'>
          <section className='flex flex-col items-center w-full mt-15'>
            <h1 id='prod-h1' >Corrugated Packaging Solutions</h1>
            <div className="prod-con">
              {
                productscor.map((product, id) => (
                  <div
                    key={id}
                    className='prod-ind transition-transform duration-300 hover:scale-105 hover:shadow-2xl'
                  >
                    <img src={product.imgsrc} alt={product.title ? `Image of ${product.title} ${product.desc}` : `Corrugated packaging product ${id + 1}`} />
                    <h1>{product.title}</h1>
                    <h2>View</h2>
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
                  <div
                    key={id}
                    className='prod-ind transition-transform duration-300 hover:scale-105 hover:shadow-2xl'
                  >
                    <img src={product.imgsrc} alt={product.title ? `Image of ${product.title} ${product.desc}` : `Wooden packaging product ${id + 1}`} />
                    <h1>{product.title}</h1>
                    <h2>View</h2>
                    <p>{product.desc}</p>
                  </div>
                ))
              }
            </div>
          </section>
        </div>
        <div className="work-cont w-full"id='protective'>
        <div className='prod flex justify-center' >
          <section className='flex flex-col items-center w-full h-full mt-15'>
            <h1 id='prod-h1' >Protective Accessories</h1>
            <div className="prod-con">
              {
                productsprot.map((product, id) => (
                  <div
                    key={id}
                    className='prod-ind transition-transform duration-300 hover:scale-105 hover:shadow-2xl'
                  >
                    <img src={product.imgsrc} alt={product.title ? `Image of ${product.title} ${product.desc}` : `Protective accessory product ${id + 1}`} />
                    <h1>{product.title}</h1>
                    <h2>View</h2>
                    <p>{product.desc}</p>
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
                  <div
                    key={id}
                    className='prod-ind transition-transform duration-300 hover:scale-105 hover:shadow-2xl'
                  >
                    <img src={product.imgsrc} alt={product.title ? `Image of ${product.title} ${product.desc}` : `Custom packaging solution ${id + 1}`} />
                    <h1>{product.title}</h1>
                    <h2>View</h2>
                    <p>{product.desc}</p>
                  </div>
                ))
              }
            </div>
            <p className='copyrightimg my-6'> * Some images displayed on this platform are generated using AI. and are intended for illustrative, conceptual, or design purposes only.

              We do not claim ownership over real-world likenesses that may appear coincidentally in AI-generated visuals.

            </p>
          </section>
        </div>
        </div>
        </div>
        <div className="ourwork w-full overflow-hidden bg-gray-800 justify-center items-center pb-20 pt-8" id="our-work">
          <h1 className='workh1 w-full  text-white font-bold text-5xl p-20 flex text-center justify-center '>Our Recent Work</h1>
          <div className="work-con flex flex-wrap justify-center items-center gap-4 md:gap-6">
              {
                ourwork.map((product, id) => (
                  <div
                    key={id}
                    className='work-ind w-full bg-[#ededed] bg-[linear-gradient(180deg,_rgba(237,237,237,1)_10%,_rgba(138,138,138,1)_100%)] sm:w-1/3 md:w-1/3 lg:w-1/4  p-5 text-center border-blue-300 border-2 justify-center flex flex-col items-center m-2 md:m-5 rounded-bl-3xl rounded-tr-3xl h-90 transition-transform duration-300 hover:scale-105 hover:shadow-2xl'
                  >
                    <img className='w-7/8 mb-5 rounded-2xl' src={product.imgsrc} alt={product.title ? `Recent work: ${product.title} ${product.desc}` : `Recent work project ${id + 1}`} />
                    <h1> <b>Product :</b> {product.title}</h1>
                    <p><b>Client Name :</b> {product.desc}</p>
                  </div>
                ))
              }</div>
      </div></>
  )
}

export default Products