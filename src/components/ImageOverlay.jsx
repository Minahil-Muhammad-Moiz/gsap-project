import gsap from 'gsap'
import React from 'react'

const ImageOverlay = ({ setCursorText }) => {
    const handleMouseEnter = () => {
        setCursorText('View More')
    }

    return (
        <div id='image' className='w-96 relative bg-amber-50' onMouseEnter={handleMouseEnter} onMouseLeave={() => setCursorText('')}>
            <div className='w-full z-50 absolute bg-transparent h-full'></div>
            <img src={('https://images.unsplash.com/photo-1735596365888-ad6d151533f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')} className='bg-cover' />
        </div>
    )
}

export default ImageOverlay
