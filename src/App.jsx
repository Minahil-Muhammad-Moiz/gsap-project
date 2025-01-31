import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'

const App = () => {
  const logoRef = useRef()
  const navlistRef = useRef()

  const tl = gsap.timeline()

  useGSAP(() => {
    tl.from(logoRef.current, {
      y: -30,
      opacity: 0,
      duration: 1,
      delay: 0.5
    })
    tl.from('li', {
      y: -30,
      opacity: 0,
      duration: 1,
      delay:0.2,
      stagger: 1
    })
  })


  return (
    <main className='h-full w-full text-white flex items-center justify-center'>
      <nav className='w-full flex justify-between  items-center py-4 px-10'>
        <h1 ref={logoRef} className='text-xl font-bold px-10'>Portfolio</h1>
        <ul className='flex gap-10 text-lg font-semibold px-10'>
          <li>About</li>
          <li>Project</li>
          <li>Contact</li>
        </ul>
      </nav>
    </main>
  )
}

export default App