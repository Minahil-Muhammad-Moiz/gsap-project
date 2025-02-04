import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { BiMenu } from 'react-icons/bi'
import { CgClose } from 'react-icons/cg'

const Header = () => {
    const logoRef = useRef()
    const navlistRef = useRef()
    const list = useRef()

    const tl = gsap.timeline()

    useGSAP(() => {
        tl.from(logoRef.current, {
            y: -30,
            opacity: 0,
            duration: 1,
            delay: 0.5
        })

        tl.to(navlistRef.current, {
            right: 0,
            duration: 0.4,
        })

        tl.to(list.current, {
            right: 0,
            duration: 1,
        })

        tl.from('ul li', {
            x: 150,
            opacity: 0,
            duration: 0.5,
            stagger: 0.4,
        })

        tl.from('#close', {
            opacity: 0
        })

        tl.pause()
    })

    return (
        <header className='w-full '>
            <nav className='w-full flex justify-between items-center py-6 px-10 '>
                <h1 ref={logoRef} className='text-xl font-bold px-10'>Portfolio</h1>
                <BiMenu size={35} onClick={() => tl.play()} />
                <div ref={navlistRef} className='z-30 w-[40%] top-0 h-full  -right-[40%] absolute bg-amber-400 '></div>
                <ul ref={list} className='z-30 w-[40%] top-0 h-full  -right-[40%] absolute bg-white text-black flex flex-col items-start justify-center gap-20 text-7xl pl-20 font-extrabold'>
                    <li>About</li>
                    <li>Project</li>
                    <li>Contact</li>
                    <CgClose id='close' onClick={() => tl.reverse()} className='absolute top-20 right-20' size={30} />
                </ul>
            </nav>
            {/* <div ref={headRef} className='hover:w-full text-center absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] text-6xl font-bold group hover:italic hover:font-extralight cursor-pointer hover:text-amber-300 '>First GSAP Tutorial<div className='bg-black w-full h-1 border-black border absolute top-[50%] -translate-y-[50%] group-hover:block hidden'></div></div> */}
        </header>
    )
}

export default Header
