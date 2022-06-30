import Image from 'next/image'
import React from 'react'

const BenifitsCard = ({ Icon, title }) => {
    return (
        <div>
            <div className="grid grid-cols-10 place-items-center" >
                <div className="flex items-center justify-center w-20 h-20 col-span-2 bg-white rounded-full " >
                    <Image src={Icon} />
                </div>
                <div className="col-span-7" >
                    <h2 className="my-2 text-3xl font-semibold" >{title}</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod cumque recusandae excepturi consectetur libero repellendus architecto necessitatibus repellat sapiente earum.</p>
                </div>
            </div>
        </div>
    )
}

export default BenifitsCard
