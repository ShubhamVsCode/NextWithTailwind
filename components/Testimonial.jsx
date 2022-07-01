import Image from 'next/image'
import people1 from '../images/people1.svg'
import people2 from '../images/people2.svg'

const Testimonial = () => {
    return (
        <div className="mx-auto text-center max-w-7xl" >
            <div><h1 className="text-5xl text-[#0B036B] font-bold my-20" >Student Testimonial</h1></div>
            <div className="flex justify-between" >
                <div>
                    <div>
                        <Image src={people1} alt="" />
                    </div>
                    <div className="inline-flex transition-all border-4 border-[#AD90FF] px-10 pt-20 rounded-3xl shadow-xl hover:shadow-2xl -my-20 w-80" >
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vitae quas, pariatur eligendi exercitationem repudiandae</p>
                            <p className="my-5 font-semibold" >-Max Merdok</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <Image src={people2} alt="" />
                    </div>
                    <div className="inline-flex transition-all border-4 border-[#FF91E0] px-10 pt-20 rounded-3xl shadow-xl hover:shadow-2xl -my-20 w-80" >
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vitae quas, pariatur eligendi exercitationem repudiandae</p>
                            <p className="my-4 font-semibold" >-Andy Paul</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <Image src={people1} alt="" />
                    </div>
                    <div className="inline-flex transition-all border-4 border-[#AD90FF] px-10 pt-20 rounded-3xl shadow-xl hover:shadow-2xl -my-20 w-80" >
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vitae quas, pariatur eligendi exercitationem repudiandae</p>
                            <p className="my-5 font-semibold" >-Luke Cage</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial