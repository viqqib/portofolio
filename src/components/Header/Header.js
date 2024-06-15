import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll, spy, scroller } from "react-scroll";

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

    let headerlinks = [
        { name: "Home", link: "home_section" },
        { name: "About", link: "about_section" },
        { name: "Skills", link: "skills_section" },
        { name: "Work", link: "work_section" },
    ]

    return (
        <header className={`z-50 overflow-hidden navkoala fixed top-0 left-0 right-0 bg-bgcolor flex py-10 px-10 md:px-28 w-full ${isScrolled ? 'shadow' : ''}`}>
            <div className="flex flex-col md:flex-row md:justify-between  md:items-center w-full " >
                <h1 className="hover:text-hover flex font-bold text-3xl font-serif cursor-pointer duration-300">Fiqqi.</h1>

                <ul className="md:flex md:space-x-10" spy={true}>
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

                <button className="text-sm font-medium text-bgcolor bg-primary py-2 px-4 rounded-md hover:bg-hover duration-300 md:mt-0 mt-5 w-32">Contact Me</button>

            </div>
        </header>
    )
}

export default Header;
