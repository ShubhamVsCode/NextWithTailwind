import React from 'react'
import CourseCard from './CourseCard'
import Writing from "../images/writing.svg"
import Development from "../images/development.svg"
import Graphic from "../images/graphic.svg"

const PopulerCourses = () => {
    return (
        <div className="mx-auto max-w-7xl" >
            <h3 className="text-5xl my-3 text-[#0B036B] font-bold text-center">Our Populer Courses</h3>
            <p className="text-xl text-[#0B036B]  text-center" >World's Best Courses by Top Industry Leaders</p>
            <div className="flex items-center mt-20 justify-evenly" >
                <CourseCard image={Development} title="Web Development" description="Web Development : Web development is the work involved in developing a website for the Internet." lessons="▶️48x Lessons" star="5.0⭐" />
                <CourseCard image={Writing} title="Creative Writing" description="Creative Writing : Creative writing is any writing that goes outside the bounds of normal professional" lessons="▶️12x Lessons" star="5.0⭐" />
                <CourseCard image={Graphic} title="Graphic Design" description="Graphic Design : Graphic design is the profession and academic discipline whose activity consists. " lessons="▶️20x Lessons" star="5.0⭐" />
            </div>
        </div>
    )
}

export default PopulerCourses
