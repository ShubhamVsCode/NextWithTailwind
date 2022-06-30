import Image from 'next/image'
import React from 'react'

const HeroCard = ({ Icon, title, description }) => {
    return (
        <div className="h-52 text-center text-[#794BFF] bg-white border-2 shadow-xl border-[#794BFF] rounded-xl w-44 flex justify-center flex-col items-center space-y-4 " >
            <Image src={Icon} />
            <div>
                <h4 className="text-xl font-bold" >{title}</h4>
                <h4 className="text-lg font-semibold" >{description}</h4>
            </div>
        </div>
    )
}

export default HeroCard
