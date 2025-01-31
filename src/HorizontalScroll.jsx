import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, {  useRef } from 'react'

const HorizontalScroll = () => {
    const page1 = useRef();
    const page2 = useRef();
    const page3 = useRef();

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(() => {
        gsap.to(page2.current.querySelector('h1'), {
            transform: "translateX(-100%)",
            scrollTrigger: {
                trigger: page2.current, // whenever we use pin property, we trigger the parent div. 
                scroller: "body",
                // markers: true,
                start: "top 0%",
                end: "top -100%",
                duration: 2,
                scrub: 3,
                pin: true,
            }
        })
    })

    return (
        <>
            <div ref={page1} id="page1" className='w-full h-full relative bg-pink-200'>
            </div>
            <div ref={page2} id="page2" className='w-full relative bg-blue-200'>
                <h1 className='text-[30vw] font-black text-black'>EXPERTISE</h1>
            </div>
            <div ref={page3} id="page3" className='w-full h-full relative bg-orange-200'>
            </div>
        </>
    )
}

export default HorizontalScroll
