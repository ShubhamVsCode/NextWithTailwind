import Image from 'next/image'
import React from 'react'

const CourseCard = ({ image, title, description, lessons, star }) => {
    return (
        <div className="p-3 text-center transition-all shadow-2xl hover:-translate-y-5 w-72 rounded-2xl" >
            <Image src={image} />
            <h2 className="text-2xl font-semibold my-2 text-[#0B036B]" >{title}</h2>
            <h3 className="text-sm " >{description}</h3>
            <div className="flex justify-between mx-4 mt-4">
                <span>{lessons}</span>
                <span>{star}</span>
            </div>
        </div>
    )
}

export default CourseCard
