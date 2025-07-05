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
                    height: '100vh',
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
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                background: 'rgba(0,0,0,0.6)',
                zIndex: 2
            }}
        />
        <div
            style={{
                position: 'absolute',
                top: '20%',
                left: '5%',
                zIndex: 3,
                color: '#fff',
                fontSize: '5rem',
                fontWeight: 'bold',
                maxWidth: '40vw',
                height: '60vh',
                display: 'flex',
                alignItems: 'center',
                textAlign: 'left',
                lineHeight: 1.2,
                letterSpacing: '1px',
                background: 'rgba(0,0,0,0.3)',
                backdropFilter: 'blur(6px)',
                borderRadius: '16px',
                padding: '1.5rem 2.5rem',
                textShadow: '0 4px 24px rgba(0,0,0,0.7), 0 1px 2px rgba(0,0,0,0.6)'
            }}
        >
            {[
                "Welcome to RGP GROUP",
                "Innovative Plant Solutions",
                "Sustainable Growth for the Future"
            ][current]}
        </div>
    </div>
)
}

export default Hero
