import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'
import Header from './components/Header'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const App = () => {
  const page1 = useRef();
  const page2 = useRef();
  const page3 = useRef();

  const box = useRef();

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    gsap.from('#page1 #box', {
      scale: 0,
      duration: 2,
      rotate: 360,
      scrollTrigger: {
        trigger: '#page1 #box',
        scroller: "body",
        markers: true,
        start: "top 80%",
      }
    })
    gsap.from('#page2 #box', {
      scale: 0,
      duration: 2,
      rotate: 360,
      scrollTrigger: {
        trigger: '#page2 #box',
        scroller: "body",
        markers: true,
        start: "top 80%",
        end: "top 30%",
        scrub: 3,
      }
    })
    gsap.from('#page3 #box', {
      scale: 0,
      duration: 2,
      rotate: 360,
      scrollTrigger: {
        trigger: '#page3 #box',
        scroller: "body",
        markers: true,
        start: "top 80%"
      }
    })
  })

  return (
    <>
      <Header />
      <main className='h-screen w-full text-white'>
        <div ref={page1} id="page1" className='w-full h-full relative bg-pink-200'>
          <div ref={box} id='box' className='w-40 h-40 bg-blue-800 flex items-center mx-auto absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]'></div>
        </div>
        <div ref={page2} id="page2" className='w-full h-full relative bg-blue-200'>
          <div ref={box} id='box' className='w-40 h-40 bg-blue-800 flex items-center mx-auto absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]'></div>
        </div>
        <div ref={page3} id="page3" className='w-full h-full relative bg-orange-200'>
          <div ref={box} id='box' className='w-40 h-40 bg-blue-800 flex items-center mx-auto absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]'></div>
        </div>
      </main>
    </>
  )
}

export default App