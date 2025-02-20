import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

// SVG = 'scalable vector graphics'
const SVGanimation = () => {
    const page1 = useRef();
    const pathRef = useRef();

    let initialPath = `M 10 100 Q 500 100 990 100`;

    const handleMouseMove = (event) => {
        let finalPath = `M 10 100 Q  ${event.clientX} ${event.clientY} 990 100`;

        // GSAP Animation
        gsap.to(pathRef.current, {
            attr: { d: finalPath },
            duration: 0.2,
            ease: "power4.out",
        });
    };

    const handleLeave = () => {
        gsap.to(pathRef.current, {
            attr: { d: initialPath },
            duration: 1.8,
            ease: "elastic.out(1,0.2)"
        });
    }

    return (
        <>
            <div
                ref={page1}
                id="page1"
                className=' h-auto mx-auto relative bg-pink-900 flex items-center justify-center'
                onMouseMove={handleMouseMove}
                onMouseLeave={handleLeave}
            >
                <svg width="1000" height="200">
                    <path ref={pathRef} d={initialPath} stroke="black" fill="transparent" />
                </svg>
            </div>
        </>
    );
};

export default SVGanimation;
