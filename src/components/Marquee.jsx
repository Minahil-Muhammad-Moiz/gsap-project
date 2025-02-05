import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Marquee = () => {

    window.addEventListener("wheel", (dets) => {
        if (dets.deltaY >= 0) {
            gsap.to('#move div', {
                transform: 'translateX(-100%)',
                repeat: -1,
                duration: 2,
                ease: 'none',
            })
        } else {
            gsap.to('#move div', {
                transform: 'translateX(0%)',
                repeat: -1,
                ease: 'none',
                duration: 2,
            })
        }
    })


    return (
        <div id='move' className='italic flex gap-6  bg-white text-red-500 text-7xl p-4 h-auto'>
            <div className='shrink-0'><h1>Woah! Humpty Dumpty</h1></div>
            <div className='shrink-0 '><h1>Woah! Humpty Dumpty</h1></div>
            <div className='shrink-0 '><h1>Woah! Humpty Dumpty</h1></div>
            <div className='shrink-0 '><h1>Woah! Humpty Dumpty</h1></div>
            <div className='shrink-0 '><h1>Woah! Humpty Dumpty</h1></div>
        </div>
    )
}

export default Marquee
