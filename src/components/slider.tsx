import React, { useState } from 'react'
import { reviews, review } from '../data/reviews';


interface ArrowProps {
    color: string,
    index: number,
    clickHandler: () => void,
}

interface colors {
    red: string,
    blue: string
}

const arrowColors: colors = {
    red: 'text-red-500',
    blue: 'text-blue-500'
}

const Slider = () => {
    const [index, setIndex] = useState(0);
    const card = reviews[index]

    function arrowSliding(operation: 'back' | 'next') {
        if (operation == 'next') {
            if (index == reviews.length - 1) return
            setIndex(i => i + 1);
            return
        }
        if (index == 0) return
        setIndex(i => i - 1);
    }

    function Suprise(): void {
        const num = Math.round(Math.random() * (reviews.length - 1));
        console.log(num);
        setIndex(() => num);

    }


    return (
        <div className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl w-[95%] max-w-[620px]">
            <div className=" flex flex-col gap-4 items-center">
                <CardInfo card={card}></CardInfo>
                <div className="flex gap-4">
                    <LeftArrow clickHandler={() => arrowSliding('back')} color='text-red-500' index={index} />
                    <RightArrow clickHandler={() => arrowSliding('next')} color='text-blue-500' index={index} />
                </div>
                <SupriseButton clickHandler={() => Suprise()} />
            </div>
        </div>
    )
}

function CardInfo({ card }: { card: review }) {



    return (
        <>
            <div>
                <img className='rounded-full w-32 h-32 object-cover' src={card.image} alt="" />
            </div>
            <div className="flex flex-col gap-1 text-center">
                <h1 className="font-bold text-xl">{card.name}</h1>
                <h2 className="text-sm uppercase text-cyan-600">{card.job}</h2>

            </div>
            <p className="text-gray-500 h-16">{card.text}</p>
        </>
    )
}


function LeftArrow(props: ArrowProps) {

    return (
        <button onClick={() => props.clickHandler()} className={`text-5xl font-bold ` + (props.index === 0 ? arrowColors.red : arrowColors.blue)}>{'<'}</button>
    )
}

function RightArrow(props: ArrowProps) {

    return (
        <button onClick={() => props.clickHandler()} className={`text-5xl font-bold ` + (props.index === reviews.length - 1 ? arrowColors.red : arrowColors.blue)}>{'>'}</button>
    )
}

function SupriseButton({ clickHandler }: any) {

    return (
        <button onClick={() => clickHandler()} className="text-blue-400 bg-blue-50 duration-200 ease-in-out rounded-md px-1 py-1 
        hover:text-blue-50 hover:bg-blue-400">Suprise Me</button>
    )
}

export { Slider }
