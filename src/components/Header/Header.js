import React from "react";

const Header = () => {
    let headerlinks = [
        { name: "Home", link: "home_section" },
        { name: "About", link: "about_section" },
        { name: "Skills", link: "skills_section" },
        { name: "Work", link: "work_section" },
    ]

    
    return(
        <header className="z-50 overflow-hidden navkoala fixed top-0 left-0 right-0 bg-bgcolor flex shadow py-10 px-28 w-full">
            <div className="flex flex-col md:flex-row md:justify-between  md:items-center w-full " >
                <h1 className="hover:text-hover flex font-bold text-3xl font-serif cursor-pointer duration-300">Fiqqi.</h1>

                <ul className=" md:flex md:space-x-10">
                    {headerlinks.map((item,index) => (
                    <li key={index} className="mt- 5 md:mt-0">
                        <a href={item.link} className="hover:text-hover font-semibold duration-300">{item.name}</a>
                    </li>
                    ))}
                </ul>

                <button className="text-sm font-medium text-bgcolor bg-primary py-2 px-4 rounded-md hover:bg-hover duration-300">Contact Me</button>

            </div>
        </header>
    )

}

export default Header;