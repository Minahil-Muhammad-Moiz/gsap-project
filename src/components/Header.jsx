import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const Header = () => {
    const logoRef = useRef()
    const navlistRef = useRef()
    const headRef = useRef()

    const tl = gsap.timeline()

    useGSAP(() => {
        tl.from(logoRef.current, {
            y: -30,
            opacity: 0,
            duration: 1,
            delay: 0.5
        })

        tl.from(navlistRef.current.children, {
            y: -30,
            opacity: 0,
            duration: 1,
            stagger: 0.3
        })

        tl.from(headRef.current, {
            scale: 0,
            opacity: 0,
            duration: 1,
        })
    })

    return (
        <header className='w-full'>
            <nav className='w-full flex justify-between  items-center py-6 px-10 '>
                <h1 ref={logoRef} className='text-xl font-bold px-10'>Portfolio</h1>
                <ul ref={navlistRef} className='flex gap-10 text-lg font-semibold px-10'>
                    <li>About</li>
                    <li>Project</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <div ref={headRef} className='w-full text-center absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] text-6xl font-bold group hover:italic hover:font-extralight cursor-pointer hover:text-amber-300 '>First GSAP Tutorial<div className='bg-black w-full h-1 border-black border absolute top-[50%] -translate-y-[50%] group-hover:block hidden'></div></div>
        </header>
    )
}

export default Header
