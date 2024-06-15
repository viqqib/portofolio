import React from "react";
import myphoto from '../../assets/images/fiqqi.svg'
import { Link } from "react-scroll";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faLaptopCode, faBriefcase, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import TypewriterComponent from "../Text/Typewriter";




const Home = () => {
    const bio = "I'm a passionate web developer with a keen eye for detail, dedicated to creating visually stunning and highly functional websites. Proficient in HTML, CSS, JavaScript, and React, I love bringing ideas to life with clean and efficient code.";

    let job = ["Student", "Front-End Developer","Web Developer","UI/UX Designer"]
    return(
        <div className='h-screen w-full flex' id="home_section">


            <div className="flex justify-center  ">
                <div className=" mt-40  h-custom-profbox w-3/4 flex justify-center">

                    <div className=" flex md:flex-row flex-col justify-center md:relative w-5/6">
                        <img src={myphoto} alt="" className="w-custom-pic-mobile md:w-custom-pic  md:absolute md:left-5 md:top-16 md:z-10"/>
                        <div className="md:mt-24 md:ml-96 md:z-20">
                            <h1 className="main-text font-serif md:text-9xl text-5xl md:mt-0 mt-2">Hi i'm Fiqqi</h1>
                            <h1 className="proftext mt-1"> <TypewriterComponent /></h1>
                            <p className="md:mt-4  md:w-5/6 md:text-lg mt-2 text-sm w-full">
                                {bio}
                            </p>
                            <div className="mt-4 space-x-3">
                                <a href="https://github.com/viqqib" target="_blank" rel="noopener noreferrer" className="">
                                <FontAwesomeIcon icon={faInstagram} size="2x" className="text-primary hover:text-maingreen duration-300" />
                                </a>

                                <a href="https://github.com/viqqib" target="_blank" rel="noopener noreferrer" className="">
                                <FontAwesomeIcon icon={faGithub} size="2x" className="text-primary hover:text-maingreen duration-300" />
                                </a>
                                
                                <a href="https://github.com/viqqib" target="_blank" rel="noopener noreferrer" className="">
                                <FontAwesomeIcon icon={faFacebook} size="2x" className="text-primary hover:text-maingreen duration-300" />
                                </a>
                            </div>
                            <Link to="about_section" smooth={true} duration={500}>
                                <button className="hover:bg-primary hover:text-bgcolor duration-200 bg-maingreen w-auto px-6 md:px-10 py-3 font-bold mt-3 text-sm md:text-md rounded-lg">
                                    Know Me Better
                                </button>
                            </Link>

                        </div>
                    </div>

                </div>
            </div>

        </div>

    )
}
export default Home;