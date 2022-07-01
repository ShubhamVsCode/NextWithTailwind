import Image from 'next/image'
import hero_girl from '../images/hero_girl.png'
import play from "../images/play.svg"
import timeIcon from "../images/timeIcon.svg"
import peopleIcon from "../images/peopleIcon.svg"
import globeIcon from "../images/globeIcon.svg"
import HeroCard from './HeroCard'


const HeroSection = () => {
    return (
        <div>
            <div className="grid items-center grid-cols-2 ">
                <div className="relative my-20" >
                    <div className="absolute w-[550px] h-[550px] border-b-[20px] border-r-[20px] rotate-[60deg] border-gray-100/50 rounded-full " ></div>
                    <div className="absolute top-0 border-8 rounded-full right-20 border-gray-100/50 h-44 w-44 " ></div>
                    <div className="absolute w-20 h-20 border-8 rounded-full -top-10 left-40 border-gray-100/50 " ></div>
                    <div className="absolute left-0 border-8 rounded-full top-96 border-gray-100/50 h-52 w-52" ></div>
                    <div className="absolute w-24 h-24 border-8 rounded-full -left-28 top-96 border-gray-100/50" ></div>
                    <div className="absolute w-32 h-32 border-8 rounded-full top-20 left-20 border-gray-100/50 " ></div>
                    <Image className="rounded-full" width="550" height="550" src={hero_girl} alt="" />
                </div>
                <div className="text-right text-white " >
                    <h1 className="font-semibold text-7xl " >A revolutionary way to educate.</h1>
                    <p className="my-10 text-lg" >“Online education is electronically supported learning that
                        relies on the Internet for teacher/student interaction and
                        the distribution of class materials.”
                    </p>
                    <div className="flex items-center justify-end space-x-2" >
                        <Image src={play} className="transition-all cursor-pointer hover:scale-110 " alt="" />
                        <span>What's Null ?</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-evenly" >
                <HeroCard Icon={timeIcon} title="60,000+" description="Hours content" />
                <HeroCard Icon={peopleIcon} title="1,00,000+" description="Students" />
                <HeroCard Icon={globeIcon} title="110+" description="Countries" />
            </div>
        </div>
    )
}

export default HeroSection
