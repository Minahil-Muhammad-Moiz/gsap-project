import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'
import Header from './components/Header'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HorizontalScroll from './components/HorizontalScroll';
import SVGanimation from './components/SVGanimation';

const App = () => {

  const handleCursor = (dets) => {
    gsap.to('#cursor', {
      x: dets.clientX,
      y: dets.clientY,
      duration: 1,
      ease: "back.out",
    })
  }

  return (
    <div onMouseMove={handleCursor}>
      <div id='cursor' className='z-40 w-4 h-4 rounded-full fixed bg-amber-400'></div>
      <Header />
      <main className='h-screen w-full text-white'>
        <SVGanimation />
      </main>
      <HorizontalScroll />
    </div>
  )
}

export default App