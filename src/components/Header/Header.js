import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll, spy, scroller } from "react-scroll";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
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

    const [open, setOpen] = useState(false); 

    let headerlinks = [
        { name: "Home", link: "home_section" },
        { name: "About", link: "about_section" },
        { name: "Skills", link: "skills_section" },
        { name: "Work", link: "work_section" },
    ];

    return (
        <header className={` fixed top-0 left-0 right-0 flex py-7 md:py-10 px-10 md:px-28 w-full duration-300  bg-bgcolor ${isScrolled ? 'shadow' : ''}`}>
            <div className="md:flex md:flex-row md:justify-between md:items-center w-full">
                
                <h1 className="hover:text-hover flex font-bold text-3xl font-serif cursor-pointer duration-300">Fiqqi.</h1>

                <div
                onClick={() => setOpen(!open)}
                className="absolute right-10 top-8 md:hidden cursor-pointer">
                    <FontAwesomeIcon icon={open ? faXmark : faBars} className="text-primary  hover:text-hover text-2xl duration-300 cursor-pointer" /> 
                </div>

                <div className={`navitem md:z-auto z-[-1] md:flex items-center w-full justify-between absolute  md:static  left-0 md:pl-0 pl-10 transition-all duration-500 ease-in bg-bgcolor ${open ? 'top-20' : '-top-96'} md:shadow-none shadow-md`}>
                    <span></span>
                    <ul className="md:flex md:space-x-10 md:static pb-5 md:pb-0" spy={true}>
                        {headerlinks.map((item, index) => (
                            <li key={index} className="mt-5 md:mt-0">
                                <Link
                                    to={item.link}
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    className="hover:text-hover font-semibold duration-300 cursor-pointer"
                                    activeClass={"text-hover"} // Wrap in curly braces and quotes
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <button className="text-sm font-medium text-bgcolor bg-primary py-2 px-4 rounded-md hover:bg-hover md:mb-0 mb-10 duration-300">Contact Me</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
