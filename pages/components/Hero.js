import Image from "next/image"

import { BsArrowRight } from "react-icons/bs"

export default function Hero() {
    var post1 = '/player.jpg';
    var post2 = 'post2.png';

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-8 gap-0.5 h-[120vh] lg:h-[70vh]">
            <div className="relative  z-10 flex flex-col justify-end md:col-span-2 font-menu" style={{ backgroundImage: `url(${post1})`, backgroundSize: `cover`, backgroundPosition: `center` }}>
                <div className="bg-gradient-to-t from-[#FF1721] via-[#FF1721] opacity-60 h-full"></div>
                <div className="absolute z-30 mb-36 ml-8 px-2 py-1 text-xs text-red-600 bg-white uppercase">Notícias</div>
                <div className="absolute z-30 mb-10 ml-10">
                    <div className=" text-white text-5xl">FIFA da Rhyno - 2022</div>
                    <BsArrowRight size={40} className="text-white  hover:cursor-pointer hover:scale-125 transition ease-in-out durantion-300" />
                </div>
            </div>
            <div className="flex flex-col justify-end lg:col-span-1 font-menu " style={{ backgroundImage: `url(${post2})`, backgroundSize: `cover`, backgroundPosition: `center` }}>
            <div className="bg-gradient-to-t from-[#FF1721] via-[#FF1721] opacity-60 h-full"></div>
                <div className="absolute z-30 mb-36 ml-8 px-2 py-1 text-xs text-red-600 bg-white uppercase">Notícias</div>
                <div className="absolute z-30 mb-10 ml-10">
                    <div className=" text-white text-5xl">FIFA da Rhyno - 2022</div>
                    <BsArrowRight size={40} className="text-white  hover:cursor-pointer hover:scale-125 transition ease-in-out durantion-300" />
                </div>
            </div>
        </div>
    )
}