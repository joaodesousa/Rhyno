export default function News() {
    var post1 = '/player.jpg';
    var post2 = 'post2.png';

    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 gap-4 h-[120vh] lg:h-[50vh] px-6 lg:px-24">
            <div className="relative  z-10 flex flex-col justify-end font-menu" style={{ backgroundImage: `url(${post1})`, backgroundSize: `cover`, backgroundPosition: `center` }}>
                <div className="bg-gradient-to-t from-[#FF1721] opacity-60 h-full"></div>
                <div className="absolute z-30 mb-24 ml-8 px-2 py-1 text-xs text-red-600 bg-white uppercase">Notícias</div>
                <div className="absolute z-30 mb-10 ml-10">
                    <div className=" text-white text-3xl">FIFA da Rhyno - 2022</div>
                </div>
            </div>
            <div className="flex flex-col justify-end font-menu " style={{ backgroundImage: `url(${post2})`, backgroundSize: `cover`, backgroundPosition: `center` }}>
            <div className="bg-gradient-to-t from-[#FF1721] opacity-60 h-full"></div>
                <div className="absolute z-30 mb-24 ml-8 px-2 py-1 text-xs text-red-600 bg-white uppercase">Notícias</div>
                <div className="absolute z-30 mb-10 ml-10">
                    <div className=" text-white text-3xl">FIFA da Rhyno - 2022</div>
                </div>
            </div>
            <div className="flex flex-col justify-end font-menu " style={{ backgroundImage: `url(${post2})`, backgroundSize: `cover`, backgroundPosition: `center` }}>
            <div className="bg-gradient-to-t from-[#FF1721] opacity-60 h-full"></div>
                <div className="absolute z-30 mb-24 ml-8 px-2 py-1 text-xs text-red-600 bg-white uppercase">Notícias</div>
                <div className="absolute z-30 mb-10 ml-10">
                    <div className=" text-white text-3xl">FIFA da Rhyno - 2022</div>
                </div>
            </div>
            <div className="flex flex-col justify-end font-menu " style={{ backgroundImage: `url(${post2})`, backgroundSize: `cover`, backgroundPosition: `center` }}>
            <div className="bg-gradient-to-t from-[#FF1721] opacity-60 h-full"></div>
                <div className="absolute z-30 mb-24 ml-8 px-2 py-1 text-xs text-red-600 bg-white uppercase">Notícias</div>
                <div className="absolute z-30 mb-10 ml-10">
                    <div className=" text-white text-3xl">FIFA da Rhyno - 2022</div>
                </div>
            </div>
        </div>
    )
}