import Image from "next/image"
import bgFooter from "../images/bgFooter.svg"
import logo1 from "../images/logo1.svg"


const GetStarted = () => {
    return (
        <div className="text-center " >
            <div className="max-w-3xl mx-auto border-4 shadow-2xl my-80 bg-white py-5 border-[#794BFF] rounded-xl " >
                <div>
                    <h1 className="text-5xl text-[#0B036B] font-bold my-10" >Get Started Now</h1>
                    <div className="inline-flex flex-col " >
                        <input type="text" className="px-10 my-2 py-5 text-center border-[#794BFF] border rounded-md" placeholder="Full Name" />
                        <input type="text" className="px-10 py-5 text-center border-[#794BFF] border rounded-md" placeholder="E-mail" />
                        <button className="py-3 hover:scale-95 transition-all mt-5 mb-14 text-center bg-[#5117ff] rounded-md text-white" >Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetStarted
