import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { BsTwitter, BsInstagram, BsYoutube} from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';

export default function Navbar() {

    const router = useRouter();

    const navLinks = [
      { title: "Notícias", link: "/" },
      { title: "Equipas", icon: <IoMdArrowDropdown size={25} />, link: "/equipas",
            sublinks: [ 
                { title: "CS:GO", link: "/equipas/csgo" },
                { title: "CS:GO YNG", link: "/equipas/csgo-yng" },
                { title: "FIFA", link: "/equipas/fifa" },
            ],
        },        
      { title: "Streamers", link: "/streamers" },
      { title: "Staff", link: "/staff" },
      { title: "Loja", link: "/loja" },
    ];

    return (
    <>
    <div className="md:grid md:grid-cols-3 mt-3">
        <div className="col-start-2 flex justify-center items-center">
            <Image src="/logo.png" width={80} height={80} />
        </div>
        <div className="flex justify-center mt-4 items-center md:col-start-3 text-gray-700 space-x-4">
           <BsTwitter size={16} className="hover:text-gray-400 hover:cursor-pointer hover:scale-125 transition ease-in-out durantion-300" />
           <BsInstagram size={16} className="hover:text-gray-400 hover:cursor-pointer hover:scale-125 transition ease-in-out durantion-300" />
           <FaTiktok size={16} className="hover:text-gray-400 hover:cursor-pointer hover:scale-125 transition ease-in-out durantion-300" />
           <BsYoutube size={16} className="hover:text-gray-400 hover:cursor-pointer hover:scale-125 transition ease-in-out durantion-300" />
        </div>
    </div>

    <div className="flex justify-center items-center md:mx-36 lg:mx-64 mt-8">
    <ul className="flex flex-wrap items-center md:space-x-8">
            {navLinks.map((link) => (
              <li key={link.title} className={`text-gray-900 text-lg tracking-wider font-menu uppercase hover:text-red-600`}>
                <Link href={link.link}>
                  <a className="flex items-center">
                    <span className="ml-2 flex items-center">{link.title} {link.icon}</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
    </div>
    </>
    )
}
