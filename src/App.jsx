import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'
import Header from './components/Header'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HorizontalScroll from './HorizontalScroll';

const App = () => {

  return (
    <>
      <Header />
      <main className='h-screen w-full text-white'>
        <HorizontalScroll />
      </main>
    </>
  )
}

export default App