import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'
import Header from './components/Header'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HorizontalScroll from './components/HorizontalScroll';
import SVGanimation from './components/SVGanimation';
import ImageOverlay from './components/ImageOverlay';
import TextAnimation from './TextAnimation';

const App = () => {
  const [cursorText, setCursorText] = useState('')

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
      <div id='cursor' className={`z-40 w-4 h-4 rounded-full fixed bg-amber-400 ${cursorText && 'w-auto p-2 h-auto !bg-amber-100 text-black'}`}>{cursorText}</div>
      <Header />
      <main className='h-screen w-full text-white'>
        <SVGanimation />
        <ImageOverlay setCursorText={setCursorText} />
        <TextAnimation />
      </main>
      <HorizontalScroll />
    </div>
  )
}

export default App