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
        // <div className="bg-slate-600 lg:h-screen lg:pt-0 lg:pb-0 pt-40 pb-20 flex justify-center items-center " id="home_section">
        //     <div className="itemcontainer py-2 bg-white flex flex-col ">
        //         <div className="">
        //             <img src={myphoto} className="w-custom-pic-mobile" alt="" />
        //         </div>
        //         <div className="">
        //             <h1 className="main-text font-serif lg:text-9xl text-5xl lg:mt-0 mt-2">Hi, i'm Fiqqi</h1>
        //             <h1 className="lg:my-1 mt-1 my-2 "><TypewriterComponent /></h1>
        //             <p className="w-64">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nemo provident id odit deleniti pariatur accusantium iste fugiat dolores autem ratione sequi eaque, incidunt itaque beatae ad rerum adipisci? Aperiam?</p>

        //         </div>
        //     </div>
        // </div>


        <div className='lg:h-screen h-full lg:pt-0 md:pt-0 pt-10 pb-20 w-full flex' id="home_section">


         
                <div className=" lg:mt-32 md:mt-44 mt-24  h-custom-profbox w-screen flex items-center justify-center ">

                    <div className="lg:ml-20 flex lg:flex-row flex-col lg:justify-center lg:relative lg:pt-0  lg:w-3/4 items-center">
                        <img src={myphoto} alt="" className=" lg:ml-0 w-custom-pic-mobile lg:w-custom-pic  lg:absolute lg:left-3 lg:top-16 lg:z-10"/>
                        <div className="lg:mt-24 lg:ml-96 lg:z-20 z-10 flex flex-col justify-center">
                            <h1 className="main-text font-serif lg:text-9xl text-5xl lg:mt-0 mt-2">Hi, i'm Fiqqi</h1>
                            <h1 className="lg:my-1 mt-1 my-2 "><TypewriterComponent /></h1>
                            <p className="lg:mt-3 w-72 lg:w-3/4  lg:text-lg text-xs">
                                {bio}
                            </p>
                            <div className="mt-4 space-x-5 text-2xl lg:text-4xl">
                                <a href="https://github.com/viqqib" target="_blank" rel="noopener noreferrer" className="">
                                <FontAwesomeIcon icon={faInstagram} className="text-primary hover:text-maingreen duration-300" />
                                </a>

                                <a href="https://github.com/viqqib" target="_blank" rel="noopener noreferrer" className="">
                                <FontAwesomeIcon icon={faGithub} className="text-primary hover:text-maingreen duration-300" />
                                </a>
                                
                                <a href="https://github.com/viqqib" target="_blank" rel="noopener noreferrer" className="">
                                <FontAwesomeIcon icon={faFacebook} className="text-primary hover:text-maingreen duration-300" />
                                </a>
                            </div>
                            <Link to="about_section" smooth={true} duration={800}>
                                <button className="hover:bg-primary hover:text-bgcolor duration-200 bg-maingreen w-auto px-5 lg:px-10 lg:py-3 font-bold mt-3 text-xs py-2 lg:text-lg rounded-lg">
                                    Know Me Better
                                </button>
                            </Link>

                        </div>
                    </div>

                </div>
            </div>



    )
}
export default Home;