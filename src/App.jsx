import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'
import Header from './components/Header'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HorizontalScroll from './components/HorizontalScroll';
import SVGanimation from './components/SVGanimation';
import ImageOverlay from './components/ImageOverlay';
import TextAnimation from './TextAnimation';
import Marquee from './components/Marquee';

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
    <div className='h-full w-full'>
      <div id='page1' className='h-screen w-full text-black  bg-[#F5E31A] flex justify-center items-center font-bold'>
        <h1><em>We are a</em> CREATIVE <em>studio</em> DEDICATED <em>to</em> CULTURAL
          ADVANCEMENT <em>through</em> STRATEGY <em>and</em> DESIGN.</h1>
      </div>
      <div id='page2' className='bg-black w-full h-screen'></div>
      <div id='page3' className='bg-white w-full h-screen'></div>
    </div>
  )
}

export default App