import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'

const App = () => {
  const [circle, setcircle] = useState(0);
  const random = gsap.utils.random(-500, 500, 10)

  const { contextSafe } = useGSAP()
  const boxRef = useRef()
  contextSafe(() => {
    gsap.to(boxRef.current, {
      x: circle,
      rotate: 360,
      duration: 2,
    })
  }, [circle])
  return (
    <main className='h-full w-full border flex items-center justify-center'>
      <div ref={boxRef} className='rounded-full bg-red-500 w-[200px] h-[200px]'></div>
      <button onClick={() => {
        setcircle(random)
      }} className='py-2 px-6 rounded-full bg-red-300 z-10'>Move</button>
    </main>
  )
}

export default App