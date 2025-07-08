import React from 'react';

const Hero = () => {
  const images = [
    '/bg/bg1cr.png',
    '/bg/bg2cr.png',
    '/bg/bg3cr.png',
    
  ];

  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="main-carousel overflow-hidden">
      <div
        className="hero-carousel relative w-full h-[80vh] overflow-hidden"
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`slide-${idx}`}
            style={{
              width: '100vw',
              height: '80vh',
              objectFit: 'cover',
              position: 'absolute',
              top: 0,
              left: 0,
              opacity: idx === current ? 1 : 0,
              transform: idx === current ? 'scale(1.05)' : 'scale(1)',
              transition: 'opacity 1.2s ease-in-out, transform 5s ease',
              zIndex: idx === current ? 1 : 0,
            }}
          />
        ))}

        
        <div
          className="absolute top-0 left-0 w-full h-full z-10"
          style={{
            background: 'linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.2))',
          }}
        />

        
        <div
          key={current}
          className="text-board slideup z-20"
          style={{
            position: 'absolute',
            top: '25%',
            left: '8%',
            color: '#fff',
            fontSize: 'clamp(1.5rem, 6vw, 4rem)',
            fontWeight: '700',
            maxWidth: '600px',
            background: 'rgba(255, 255, 255, 0.12)',
            padding: '2rem 2.5rem',
            borderRadius: '18px',
            backdropFilter: 'blur(10px)',
            lineHeight: 1.4,
            textShadow: '0 2px 10px rgba(0,0,0,0.8)',
            boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
          }}
        >
          {[
            "Welcome to RGP GROUP",
            "Innovative Packaging Solutions",
            "Complete Packaging at One Place"
          ][current]}
        </div>

       
        <style>
          {`
            .slideup {
              animation: slideUpFade 1.8s ease forwards;
            }
            @keyframes slideUpFade {
              from {
                opacity: 0;
                transform: translateY(50px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @media (max-width: 768px) {
              .text-board {
                top: 50% !important;
                left: 50% !important;
                transform: translate(-50%, -50%) !important;
                text-align: center !important;
                width: 90vw !important;
                padding: 1.5rem !important;
                font-size: clamp(1.2rem, 5vw, 2.5rem) !important;
              }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default Hero;
