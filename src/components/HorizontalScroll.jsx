import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react'

const HorizontalScroll = () => {
    const page3 = useRef();

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(() => {
        gsap.to(page3.current.querySelector('h1'), {
            transform: "translateX(-100%)",
            scrollTrigger: {
                trigger: page3.current, // whenever we use pin property, we trigger the parent div. 
                scroller: "body",
                // markers: true,
                start: "top 0%",
                end: "top -500%",
                duration: 2,
                scrub: 3,
                pin: true,
            }
        })
    })

    return (
        <>
            <div ref={page3} id="page3" className='w-full relative bg-orange-200 transform -skew-10'>
                <h1 className='text-[10vw] font-black text-black whitespace-nowrap'>EXPERTISE ** EXPERTISE ** EXPERTISE ** </h1>
            </div>
        </>
    )
}

export default HorizontalScroll
