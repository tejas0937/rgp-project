import React from 'react'

const Hero = () => {
const images = [
    '/plant/RGP -HD(2).jpg',
    '/plant/RGP -HD(4).jpg',
    '/plant/bg-m1.png',
];
const [current, setCurrent] = React.useState(0);

React.useEffect(() => {
    const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
}, [images.length]);

return (
    <div className="main-carousel overflow-hidden">
    <div
        className="hero-carousel"
        style={{
            width: '100%',
            height: '80vh',
            position: 'relative',
            overflow: 'hidden'
        }}
    >
        {images.map((img, idx) => (
            <img
                key={idx}
                src={img}
                alt={`slide-${idx}`}
                style={{
                    width: '100vw',
                    height: '80vh',
                    maxWidth: '100%',
                    maxHeight: '80vh',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    opacity: idx === current ? 1 : 0,
                    transition: 'opacity 1s ease-in-out, transform 6s cubic-bezier(0.2,0,0.2,2)',
                    zIndex: idx === current ? 1 : 0,
                    transform: idx === current ? 'scale(1.1)' : 'scale(1)',
                    overflow: 'hidden', 
                }}
            />
        ))}
        <div className='black-tint'
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100vw',
                height: '80vh',
                background: 'rgba(0,0,0,0.6)',
                zIndex: 2
            }}
        />
        <style>
            {`
                @media (max-width: 768px) {
                    .text-board {
                        left: 20px !important;
                        bottom: 0 !important;
                        min-width: 90vw !important;
                        max-width: 90vw !important;
                        font-size: clamp(1.2rem, 5vw, 3rem) !important;
                        max-height: 100px !important;
                        text-align: center !important;
                    }
                }
                .slideup {
                    animation: slideUpFade 2s cubic-bezier(0.23, 1, 0.32, 1);
                }
                @keyframes slideUpFade {
                    0% {
                        opacity: 0.8;
                        transform: translateX(-120px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            `}
        </style>
        <div className='text-board slideup'
            key={current}
            style={{
                position: 'absolute',
                top: '12%',
                left: '-7%',
                zIndex: 3,
                color: '#fff',
                fontSize: 'clamp(1.5rem, 7vw, 7rem)',
                flexWrap: 'wrap',
                fontWeight: 'bold',
                maxWidth: '50vw',
                width: 'fit-content',
                minWidth: '50vw',
                height: '60vh',
                display: 'flex',
                alignItems: 'center',
                textAlign: 'right',
                lineHeight: 1.2,
                letterSpacing: '2px',
                background: 'rgba(255, 250, 250, 0.250)',
                backdropFilter: 'blur(6px)',
                borderRadius: '16px',
                padding: '1rem 2rem 1rem 1.8rem',
                textShadow: '0 4px 24px rgba(0,0,0,0.7), 0 1px 2px rgba(0,0,0,1)',
                boxSizing: 'border-box'
            }
        }
        >
            {[
                "Welcome to RGP GROUP",
                "Innovative Packaging Solutions",
                "Complete Packaging at one place"
            ][current]}
        </div>
        </div>
    </div>
)

}

export default Hero
