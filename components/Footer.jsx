import Image from 'next/image'
import React from 'react'
import logo1 from "../images/logo1.svg"
import linkedin from "../images/linkedin.svg"
import be from "../images/be.svg"
import fb from "../images/fb.svg"

const Footer = () => {
    return (
        <div className="text-white" >
            <div className="grid h-screen grid-cols-5 gap-20 px-32 place-items-stretch bgFooter pt-96" >
                <div className="" >
                    <div className="" >
                        <Image src={logo1} alt="logo1" className="cursor-pointer" />
                        {/* <div className="absolute w-4 h-4 bg-white rounded-full top-[5px] -right-4" ></div> */}
                        <p className="pt-5 mx-2" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium numquam commodi consequatur fugiat quidem saepe, suscipit dolores sint dolorem, eaque similique sequi.
                        </p>
                        <div className="flex items-center mx-2 mt-5 space-x-5" >
                            <div>
                                <Image src={linkedin} width={30} height={30} />
                            </div>
                            <div>
                                <Image src={fb} width={30} height={30} />
                            </div>
                            <div>
                                <Image src={be} width={30} height={30} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="" >
                    <h3 className="my-6 text-xl font-medium" >Company</h3>
                    <ul className="space-y-4" >
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Community</li>
                        <li>Testimonial</li>
                    </ul>
                </div>
                <div className="" >
                    <h3 className="my-6 text-xl font-medium" >Support</h3>
                    <ul className="space-y-4" >
                        <li>Help Center</li>
                        <li>Tweet @ Us</li>
                        <li>Webians</li>
                        <li>Feedback</li>
                    </ul>
                </div>
                <div className="" >
                    <h3 className="my-6 text-xl font-medium" >Links</h3>
                    <ul className="space-y-4" >
                        <li>Courses</li>
                        <li>Become Teacher</li>
                        <li>Service</li>
                        <li>All in One</li>
                    </ul>
                </div>
                <div className="" >
                    <h3 className="my-6 text-xl font-medium" >Contact Us</h3>
                    <ul className="space-y-4" >
                        <li>(+91) 9876543211</li>
                        <li>shubhamvscode@gmail.com</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
