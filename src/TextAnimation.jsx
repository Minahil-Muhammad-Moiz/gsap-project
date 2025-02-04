import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react'

const TextAnimation = () => {
    const text = 'MINAHIL';
    const [formattedText, setFormattedText] = useState([])
    const logoRef = useRef()

    useEffect(() => {
        const splitText = text.split('')
        const halfText = Math.floor(splitText.length / 2)
        const modifiedText = splitText.map((char, index) => (
            <span key={index} className={`${index < halfText ? 'a' : 'b'} inline-block`}>{char}</span>
        ))
        setFormattedText(modifiedText)
    }, []);

    useEffect(() => {
        if (formattedText) {
            gsap.from(logoRef.current.querySelectorAll('.a'), {
                y: 80,
                opacity: 0,
                duration: 1,
                delay:0.3,
                stagger: 0.4,
            })

            gsap.from(logoRef.current.querySelectorAll('.b'), {
                y: 80,
                opacity: 0,
                duration: 1,
                delay:0.3,
                stagger: -0.3,
            })
        }
    })

    return (
        <div ref={logoRef} className='text-8xl font-bold overflow-hidden'>
            {formattedText}
        </div>
    )
}

export default TextAnimation
