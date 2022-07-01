import Image from "next/image"
import Instructor from "../images/instructor.svg"

const Instrctor = () => {
    return (
        <div className="flex items-center justify-center max-w-5xl mx-auto" >
            <div className="flex-1" >
                <h1 className="text-5xl font-bold text-[#0B036B] my-10" >Become a Instructor</h1>
                <p className="my-5" >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta consequuntur dolorum sit animi odio aut quibusdam ad? Voluptate, error dignissimos, incidunt mollitia, quas temporibus numquam laudantium id similique quis dolore.
                </p>
                <p className="my-5" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic vel sit, eos ut quia enim.</p>
                <button className="px-10 py-3 transition-all text-white hover:bg-[#6735ff] bg-[#794BFF] rounded-md">Apply</button>
            </div>
            <div className="bg-[#AD90FF] m-6 overflow-hidden w-96 h-96 rounded-full" >
                <Image src={Instructor} alt="" />
            </div>
        </div>
    )
}

export default Instrctor
