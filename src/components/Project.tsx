import React from 'react'
import { Slider } from './slider'

const Project = () => {
    return (
        <div className='w-full flex flex-col min-h-screen bg-main-bg items-center gap-8'>
            <div className="w-[95%] mx-auto max-w-[768px] mt-12 flex flex-col gap-8 items-center">
                <h1 className="font-bold text-5xl relative text-center
            after:absolute after:bottom-0 after:w-[60%] after:h-[4px] after:left-[20%]
            after:bg-blue-500 pb-3 after:z-50">Our Reviews</h1>
                <Slider />
            </div>
        </div>
    )
}

export { Project }
