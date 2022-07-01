import Image from 'next/image';
import image1 from "../images/1.svg"
import image2 from "../images/2.svg"
import image3 from "../images/3.svg"
import image4 from "../images/4.svg"
import image5 from "../images/5.svg"
import onlinedegree from "../images/onlinedegree.svg"
import shortcourses from "../images/shortcourses.svg"
import expert from "../images/expert.svg"
import BenifitsCard from './BenifitsCard';

const Benifits = () => {
    return (
        <div className="relative flex bg-[#794BFF] px-20 " >
            <div className="relative flex-1 " >
                <div className="absolute border-8 rounded-full top-20 right-80 border-white/50 h-44 w-44 " ></div>
                <div className="absolute w-24 h-24 border-8 rounded-full -left-28 -top-10 border-white/50" ></div>
                <div className="absolute w-10 h-10 border-8 rounded-full -left-12 top-10 border-white/50" ></div>
                <div className="absolute -top-20  hover:scale-[102%] transition-all " >
                    <Image src={image1} alt="" />
                </div>
                <div className="absolute right-72 top-40 hover:scale-[102%] transition-all " >
                    <Image src={image2} alt="" />
                </div>
                <div className="absolute left-72 bottom-52 hover:scale-[102%] transition-all " >
                    <Image src={image3} alt="" />
                </div>
                <div className="absolute -bottom-10 left-48 hover:scale-[102%] transition-all " >
                    <Image src={image4} alt="" />
                </div>
                <div className="absolute -bottom-32 left-10 hover:scale-[102%] transition-all " >
                    <Image src={image5} alt="" />
                </div>
            </div>
            <div className="flex-1 space-y-10 text-white my-28 " >
                <h3 className="mb-16 text-6xl font-bold" >Benifits from our online learning</h3>
                <BenifitsCard Icon={onlinedegree} title="Online Degrees" />
                <BenifitsCard Icon={shortcourses} title="Short Courses" />
                <BenifitsCard Icon={expert} title="Expert Training" />
            </div>
            <div className="relative " >
                <div className="absolute border-8 rounded-full -right-20 -bottom-24 border-white/50 h-44 w-44 " ></div>
                <div className="absolute w-24 h-24 border-8 rounded-full right-28 -bottom-10 border-white/50" ></div>
                <div className="absolute w-12 h-12 border-8 rounded-full bottom-20 right-16 border-white/50" ></div>
                <div className="absolute w-24 h-24 border-8 rounded-full -right-10 bottom-32 border-white/50" ></div>
            </div>
        </div>
    )
}

export default Benifits
