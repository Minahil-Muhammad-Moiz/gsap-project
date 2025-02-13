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

  const tl = gsap.timeline()
  useGSAP(() => {
    tl.to('#loader .moveUp', {
      height: 0,
      delay: 0.9,
      stagger:0.3
    })
    tl.to('#loader', {
      height: 0,
      delay: -0.1
    })
  })

  return (
    <>
      <div id='loader' className='h-screen w-full text-white bg-[#3b3b3b] fixed text-center'>
        <div className='moveUp bg-[#F5E31A]  w-full h-full'></div>
        <div className='moveUp bg-[#d900ff]  w-full h-full'></div>
      </div>
      <div className='h-full w-full' id='main'>
        <div id='page1' className='h-screen w-full text-[#555555]  bg-[#F5E31A] flex justify-center items-center text-center'>
          <h1 className='text-[6.9vw] tracking-[-2px] leading-[5.3vw]'><em>We are a</em> CREATIVE <em>studio</em><br /> DEDICATED <em>to</em> CULTURAL<br />
            ADVANCEMENT <em>through</em><br /> STRATEGY <em>and</em> DESIGN.</h1>
        </div>
        <div id='page2' className='bg-black w-full h-screen'></div>
        <div id='page3' className='bg-white w-full h-screen'></div>
      </div>
    </>
  )
}

export default App