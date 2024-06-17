import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll, spy, scroller } from "react-scroll";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;

            // Add or remove shadow based on scroll position
            setIsScrolled(scrollTop > 0);
        };

        // Add scroll event listener when component mounts
        window.addEventListener("scroll", handleScroll);

        // Remove scroll event listener when component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    
    let headerlinks = [
        { name: "Home", link: "home_section" },
        { name: "About", link: "about_section" },
        { name: "Skills", link: "skills_section" },
        { name: "Work", link: "work_section" },
    ];

    const [open, setOpen] = useState(false);

    return (
        <div className={`${isScrolled ? 'shadow-md' : 'shadow-none'} duration-500 w-full fixed top-0 left-0 z-50`}>
            <div className="md:flex items-center  justify-between bg-bgcolor  py-6 md:px-20 px-10">
                <div className="font-bold font-serif text-3xl lg:text-4xl cursor-default">
                    Fiqqi.
                </div>

                <div 
                onClick={() => setOpen(!open)}
                className="absolute right-10 top-7 cursor-pointer md:hidden">
                <FontAwesomeIcon icon={open ? faXmark : faBars } className="text-primary  hover:text-hover text-2xl duration-300 cursor-pointer" /> 
                </div>

                <div className={`md:flex md:items-center md:justify-between md:pb-0 pb-6 absolute md:static md:z-auto -z-50 bg-bgcolor left-0 w-full   transition-all duration-500 ease-in ${open? 'top-16 shadow-md md:shadow-none' : '-top-56'}`}>
                    <span></span>
                    <ul className="md:flex pl-10 pt-3 md:pl-0">
                    {
                    headerlinks.map((item)=> (
                        <li className="md:ml-10 md:my-0 my-5" key={item.name}>
                                <Link
                                    to={item.link}
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    className="hover:text-maingreen font-semibold duration-300 cursor-pointer"
                                    activeClass={"text-hover"} // Wrap in curly braces and quotes
                                >
                                    {item.name}
                                </Link>
                        </li>
                    ) )
                    }
                    </ul>

                    <button className="ml-10  text-sm font-medium text-bgcolor bg-primary py-2 px-4 rounded-md hover:bg-hover duration-300 md:ml-8 mt-5 mb-5">Contact Me</button>
                </div>

                {/* <ul className="md:flex md:items-center md:pb-0 pb-6 absolute md:static md:z-auto z-[-1] bg-white left-0 w-full md:w-auto top-24 pl-10 md:pl-0">
                <span></span>
                {
                    headerlinks.map((item)=> (
                        <li className="md:ml-8 md:my-0 my-5" key={item.name}>
                            <a href={item.link} className="hover:text-hover duration-300 font-semibold">{item.name}</a>
                        </li>
                    ) )
                }
                    <button className="text-sm font-medium text-bgcolor bg-primary py-2 px-4 rounded-md hover:bg-hover duration-300 md:ml-8">Contact Me</button>
                </ul> */}
            </div>



        </div>
    );
};

export default Navbar;
