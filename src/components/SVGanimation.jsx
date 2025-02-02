import React, { useRef } from 'react'

const SVGanimation = () => {
    const page1 = useRef();

    return (
        <>
            <div ref={page1} id="page1" className='w-full h-[20vh] relative bg-pink-200'>
            </div>
        </>
    )
}

export default SVGanimation
