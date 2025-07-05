import React from 'react'
import './hero.css'
import { Center } from '@react-three/drei';

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
    }, 3000);
    return () => clearInterval(interval);
}, [images.length]);

return (
    <div className="main-carousel">
    <div
        className="hero-carousel"
        style={{
            width: '100%',
            height: '100vh',
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
                    transition: 'opacity 1s ease-in-out',
                    zIndex: idx === current ? 1 : 0,
                    transform: 'none',
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
                background: 'rgba(0,0,0,0.7)',
                zIndex: 2
            }}
        />
        <div className='text-board'
            style={{
                position: 'absolute',
                top: '12%',
                left: '-1%',
                zIndex: 3,
                color: '#fff',
                fontSize: 'clamp(2rem, 7vw, 7rem)',
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
                background: 'rgba(255, 236, 190, 0.150)',
                backdropFilter: 'blur(6px)',
                borderRadius: '16px',
                padding: '1rem 2rem 1rem 1.8rem',
                textShadow: '0 4px 24px rgba(0,0,0,0.7), 0 1px 2px rgba(0,0,0,0.6)',
                boxSizing: 'border-box'
            }}
        >
            {[
                "Welcome to RGP GROUP",
                "Innovative Packaging Solutions",
                "Our Work is Our Identity"
            ][current]}
        </div>
        
        </div>
    </div>
)
}

export default Hero
