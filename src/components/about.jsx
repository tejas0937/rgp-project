import React from 'react'
import './about.css'

const About = () => {
  const [isMuted, setIsMuted] = React.useState(true);
  const videoRef = React.useRef(null);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
  };

  return (
    <div className='about'>

      <div className="a-info" >
        <h1 className='text-6xl font-bold text-[#000851] m-10'>About Us</h1>
        <p className='text-[#000851] text-2xl/12'>Established in 2016 by Mr. Ajay Ramdas Jaid, <b>RGP Pack Tech Solution</b> is a trusted manufacturer and supplier of premium packaging solutions. Located in Chakan MIDC, Pune, we deliver high-quality, cost-effective, and sustainable packaging that meets diverse industrial and export requirements. Our production facility is equipped with fully automated, high-speed imported machines that ensure consistency, precision, and on-time delivery - all under one roof.Our commitment ensures that you get packaging that protects your products and your brand reputation.</p>
      </div>
      <div className="vision-board flex">
        <img src="/plant/bg-m1.png" alt="RGP Pack Tech Solution manufacturing plant background" />
        <div className="vision">
          <h1>Our Vision</h1>
          <h2>Provide Complete Export Packing & Stress Free Dispatch Solution</h2>

          <p >A complete solution for export packing ensures that products are securely and professionally packed according to international standards, using the right materials like corrugated boxes, pallets, and moisture protection. It includes proper labeling, accurate documentation (like invoices, packing lists, and certificates), and optimized loading for safe transit. By coordinating with trusted logistics partners and offering tracking, the process becomes smooth and efficient. As a result, the customer enjoys a stress-free dispatch experience, with goods delivered safely, on time, and without the hassle of customs or damage issues.</p>
        </div>

      </div>
      <div className="infra-board flex">

        <div className="infra">
          <h1>Infrastructure</h1>
          <p><h2>Location </h2> Located at the upcoming Industrial Zone Of Chakan Phase II , Near Hyundai and Bridgestone and General Electrical Company
            <h2>Factory Constructed area </h2> Buildup 4000+4000 sq-ft ( Total Size of 16000 sq-ft ) for further Development.
            <h2>Power </h2> Well connected Capacity for Electrical Power at plant and Genset as a back up .</p>
        </div>
        <div style={{ position: 'relative' }}>
          <video
            ref={videoRef}
            src="/bg/bgvideo-rgp.mp4"
            autoPlay
            muted={isMuted}
            
            loop
            style={{ display: 'block' }}
          ></video>
          <button className='mutebtn'
            onClick={toggleMute}
            style={{
              position: 'absolute',
              bottom: 120,
              right: 40,
              background: 'rgba(0,0,0,0.7)',
              color: '#fff',
              border: 'none',
              borderRadius: '50%',
              width: 40,
              height: 40,
              cursor: 'pointer',
              fontSize: 18,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              <span role="img" aria-label="Muted">&#128263;</span>
            ) : (
              <span role="img" aria-label="Unmuted">&#128266;</span>
            )}
          </button>
        </div>
      </div>
      <div className="machines-img flex flex-col w-full">
        <h1>We have invested in advanced, high-speed imported machines to offer</h1>
        <div className="carousel-wrapper" style={{ width: '100%', maxWidth: 800, margin: '40px auto', position: 'relative' }}>
  <Carousel />
  <div className="outside-controls flex justify-center gap-6 mt-4" style={{ width: '100%', position: 'relative' }}>
    <button
      onClick={() => document.getElementById('carousel-prev')?.click()}
      style={{
        background: 'rgba(0,0,0,0.8)',
        color: '#fff',
        border: 'none',
        width: "120px",
        borderRadius: '6px',
        padding: '10px 20px',
        cursor: 'pointer'
      }}
    >
      &#8592; Previous
    </button>
    <button
      onClick={() => document.getElementById('carousel-next')?.click()}
      style={{
        background: 'rgba(0,0,0,0.8)',
        color: '#fff',
        border: 'none',
        width: "120px",
        borderRadius: '6px',
        padding: '10px 20px',
        cursor: 'pointer'
      }}
    >
      Next &#8594;
    </button>
  </div>
</div>

      </div>

      <div className="director flex ">
        <div className="dir-img">
          <img src="/bg/director.JPG" alt="Director of RGP Pack Tech Solution, Mr. Ajay Ramdas Jaid" />
          <div className="dir-logo"><img src="/LogoRGP1.png" alt="RGP Group company logo" /></div>
        </div>
        <div className="dir-info">
          <h1>About Director</h1>
          <div className="info-sub pl-15">
            <h2>Mr. Ajay Ramdas Jaid</h2>
            <p id='info-sub'>is an tech expert who has skills in Strategic planning, packaging innovation, supply chain management, team leadership, client relations, export compliance, financial oversight, sustainable packaging, quality assurance, and market analysis.

              He had worked for Bajaj Electrials Ltd (Chakan & Ranjangaon), Posco india,
              Raychem RPG Pvt ltd, Hyt India pvt Ltd and many more companies in the area of
              Wooden Box and pallet and Packing materials. </p>
          </div></div>
      </div>
      <div className="director flex ">
        <div className="team-img">
          <img src="/plant/team-rgp.jpg" alt="RGP Pack Tech Solution team members working together" />

        </div>
        <div className="dir-info">
          <h1>Our Team</h1>
          <div className="info-sub pl-15 w-full">
            <h2 id='team-members'>Team Members </h2>
            <p className='w-full'><ul className='list-disc'><li>Designers</li>
              <li>Quality controllers</li>
              <li>Packaging Experts</li>
              <li>Sales & marketing executives</li>
              <li>Administrative staff</li></ul></p>
          </div></div>
      </div>
      <div className="vision-board flex">

        <div className="vision"> <p className='team-info text-2xl'>We have always been connected with experienced professionals since our inception,  that's why we have a pool of professionals which possess outstanding industry knowledge. The professionals appointed by us are well aware of the latest market trends of packaging industry. Moreover, to work efficiently, they work in closesynchronization among themselves as well as with the customers know their exact needs to provide them products accordingly. Further, the professionals of our firm havecomplete knowledge of advanced machines and technologies owing to which we are able to develop remarkable products. Also, skills enhancement classes and seminars are organized by us at regular intervals to keep our workforce abreast with latest technologies and market dynamics.
        </p>
        </div>
        <img src="/bg/emp-2.JPG" alt="RGP Pack Tech Solution employees at work in the facility" />

      </div>
      <div className="loc flex flex-col items-center">
        <div className="loc-info flex flex-col items-center"><h1>Company Address</h1>
          <h2 >RGP Group , Behind Surin Auto Company,  Village - Bhamboli, Chakan.  Tal - Khed, Dist - Pune  State - Maharashtra, India | Pin- 410501. </h2></div>
        <div className="loc-map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.253777910555!2d73.7773357093428!3d18.786840382285522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b444de5039ab%3A0xee3d9503fb63bc7d!2sRGP%20Group!5e0!3m2!1sen!2sin!4v1751800429185!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
      </div>
    </div>
  )

  function Carousel() {
    const images = [
      '/bg/bg-m6.JPG',
      '/bg/mach-3.JPG',
      '/bg/mach-1.JPG',
      '/bg/bg-m1.JPG',


      '/bg/bg-m7.JPG',
      '/bg/bg-m2.JPG',
      '/bg/bg-m3.JPG',
      '/bg/bg-m8.JPG',
      '/bg/bg-m5.JPG',
      '/bg/bg-m9.JPG',

    ];
    const [current, setCurrent] = React.useState(0);

    const prevSlide = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    const nextSlide = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

    return (
      <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 12 }}>
      <img
        src={images[current]}
        alt={`RGP Pack Tech Solution packaging machine ${current + 1} - Advanced manufacturing equipment`}
        style={{ width: '100%', height: 400, objectFit: 'cover', transition: '0.5s' }}
      />
      <div style={{
        position: 'absolute',
        top: '50%',
        left: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        pointerEvents: 'none'
      }}>
        <button id="carousel-prev" onClick={prevSlide}> &#8592;</button>
        <button id="carousel-next"  onClick={nextSlide}> &#8594; </button>
      </div>
      <div style={{ position: 'absolute', bottom: 18, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 8 }}>
        {images.map((_, idx) => (
        <span
          key={idx}
          onClick={() => setCurrent(idx)}
          style={{
          width: 8, height: 8, borderRadius: '50%',
          background: idx === current ? '#fff' : 'rgba(255,255,255,0.5)',
          display: 'inline-block', cursor: 'pointer', border: '1px solid #ccc'
          }}
        />
        ))}
      </div>
      </div>
    );
  }
}

export default About
