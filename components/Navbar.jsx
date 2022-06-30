import Image from "next/image"
import logo1 from "../images/logo1.svg"

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between text-white navbar h-14" >
            <div className="relative flex " >
                <Image src={logo1} alt="logo1" className="cursor-pointer" />
                <div className="absolute w-4 h-4 bg-white rounded-full top-[5px] -right-4" ></div>
            </div>
            <div className="space-x-10 text-lg" >
                <span className="cursor-pointer hover:text-gray-300 " >About</span>
                <span className="cursor-pointer hover:text-gray-300 " >Courses</span>
                <span className="cursor-pointer hover:text-gray-300 " >Platforms</span>
                <span className="cursor-pointer hover:text-gray-300 " >Resources</span>
                <span className="box-border px-10 py-4 transition-all border-2 rounded-lg cursor-pointer hover:bg-[#4a3af8]/20" >Contact</span>
            </div>
        </nav>
    )
}

export default Navbar
