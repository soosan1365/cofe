import gsap from 'gsap';
import {useGSAP} from '@gsap/react'

import {FaBagShopping} from "react-icons/fa6";
import {IoIosSearch} from "react-icons/io";
import {navLinks} from "../../constants/index.js";

const Navbar = () => {

    useGSAP(() => {
            const navTween = gsap.timeline(
                {
                    scrollTrigger: {
                        trigger: "nav",
                        start: "bottom top"
                    }
                }
            )
            navTween.fromTo('nav', {backgroundColor: 'transparent'}, {
                backgroundColor: '#00000050',
                backgroundFilter: 'blur(10px)',
                duration: 1,
                ease: 'power1.inOut'
            })
        }
    )
    return (<>
            <nav className="flex justify-between items-center py-1 px-4 md:px-10  ">
                {/*right  */}
                <div>
                    <a href="#home">
                        <img src="/images/logocofe.png "
                             alt=""
                             className="w-32 md:w-36"
                        />
                    </a></div>
                {/*center*/}
                <div className=" ">
                    <ul
                        id="primary-navigation" className="hidden md:flex justify-between items-center gap-12"
                    >
                        {navLinks.map((link) => (
                            <li key={link.id} className="">
                                <a href={`#${link.id}`}>
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                {/*left*/}
                <div className="flex justify-center gap-4">
                    <FaBagShopping className="w-6 h-6 "/>
                    <IoIosSearch className="w-6 h-6 "/>
                </div>
            </nav>
        </>
    )
}
export default Navbar
