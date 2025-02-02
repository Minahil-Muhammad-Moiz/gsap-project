import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'
import Header from './components/Header'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HorizontalScroll from './components/HorizontalScroll';
import SVGanimation from './components/SVGanimation';

const App = () => {

  return (
    <>
      <Header />
      <main className='h-screen w-full text-white'>
        <SVGanimation />
        <HorizontalScroll />
      </main>
    </>
  )
}

export default App