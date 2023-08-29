/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa'
import {FaGreaterThan} from 'react-icons/fa'
import {PiCopyright} from 'react-icons/pi'
import {TbGps} from 'react-icons/tb'
import {MdEmail} from 'react-icons/md'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {BiSolidTimeFive} from 'react-icons/bi'
import {AiFillInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () =>{
    return (
        <section id="footer">
            <div className="bg-bgg text-slate-500 relative">
                <div>
                    <div className=" py-5 px-20 ">
                    <div className="grid gap-10 md:gap-20 md:grid-cols-2 xl:grid-cols-3 pb-10 ">
                        
                        <div className="space-y-2">
                            {/* <h4 className="font-bold text-lg capitalize">about app</h4> */}
                            <img className=' w-52 h-52 sm:w-32 sm:h-32 md:w-20 md:h-20' src="/images/logom.png" alt="" />
                            <div className="pl-2">
                            <p className='text-eco  font-extrabold text-lg tracking-wider leading-relaxed'>Mohamed Haddaoui</p>
                          {/* <p className=' tracking-wide text font-semibold leading-relaxed'>Coaching - Accompaniment - Advice</p> */}

                            </div>
                            <div className=" flex gap-4 items-center pt-5">
                                
                                <div className="pl-2 flex gap-4 items-center">
                                
                               
                                <Link href="#" target="_blank">
                                <BsGithub className="h-7 w-7 text-eco hover:opacity-50 transition-all duration-500 " />
                                </Link>
                                <Link href="#" target="_blank">
                                <BsLinkedin className="h-6 w-6 text-eco hover:opacity-50 transition-all duration-500 " />
                                </Link>
                                <Link href="#" target="_blank">
                                <AiOutlineTwitter className="h-7 w-7 text-eco hover:opacity-50 transition-all duration-500 " />
                                </Link>
                                <Link href="#" target="_blank">
                                <BsWhatsapp className="h-6 w-6 text-eco hover:opacity-50 transition-all duration-500 " />
                                </Link>
                               
                                
                                

                                </div>
                            </div>
                            <div>

                            </div>
                        </div>
                        <div className="flex pt-5 gap-10">
                        <div className="w-1/2 space-y-4 md:space-y-9 ">
                                <div >
                                    <p className="font-bold text-xl ">Services</p>
                                </div>
                                <div className=" flex flex-col gap-2">
                                    <Link className="font-semibold underline hover:opacity-50 text-sm hover:no-underline transition-all duration-500 ease-in-out" href="#services">Software Engineer</Link>
                                    <Link className="font-semibold underline hover:opacity-50 text-sm hover:no-underline transition-all duration-500 ease-in-out" href="#services">Front-End</Link>
                                    <Link className="font-semibold underline hover:opacity-50 text-sm hover:no-underline transition-all duration-500 ease-in-out" href="#services">Bonus</Link>
                                </div>
                            </div>
                            <div className="space-y-4 md:space-y-9 w-1/2">
                                <div >
                                    <h4 className="font-bold text-xl capitalize">quick links</h4>
                                </div>
                                <div className="flex flex-col gap-2">
                                    {/* <Link className="font-semibold opacity-50  text-sm " href="#">Welcome</Link> */}
                                    <Link className="font-semibold underline hover:opacity-50 text-sm  hover:no-underline transition-all duration-500 ease-in-out " href="#">Welcome</Link>
                                    <Link className="font-semibold underline hover:opacity-50 text-sm  hover:no-underline transition-all duration-500 ease-in-out " href="#about">About</Link>
                                    <Link className="font-semibold underline hover:opacity-50 text-sm  hover:no-underline transition-all duration-500 ease-in-out " href="#services">Services</Link>
                                    <Link className="font-semibold underline hover:opacity-50 text-sm  hover:no-underline transition-all duration-500 ease-in-out " href="#skills">Skills</Link>
                                    <Link className="font-semibold underline hover:opacity-50 text-sm  hover:no-underline transition-all duration-500 ease-in-out " href="#projects">Projects</Link>
                                    <Link className="font-semibold underline hover:opacity-50 text-sm  hover:no-underline transition-all duration-500 ease-in-out " href="#contact">Contact</Link>

                                </div>
                            </div>
                            
                        </div>
                        <div className="space-y-4 md:space-y-9 pt-5 mx-auto ">
                            <div >
                                <p className="font-bold text-xl">Contact Me</p>
                            </div>
                            <div className="space-y-5">
                               
                                <p>  <MdEmail className="w-6 h-6 inline-block text-eco"/>  <span className="leading-relaxed gita text-sm pl-2">mhaddaou@student.1337.ma</span></p>
                                <p>  <BsFillTelephoneFill className=" w-5 h-5 inline-block text-eco"/>  <span className="leading-relaxed  text-sm pl-2">+212 699 848 024</span></p>
                                    {/* <p>  <BiSolidTimeFive className="w-6 h-6 inline-block text-eco"/>  <span className="leading-relaxed  text-sm pl-2">ofligne after 12 </span></p> */}
                                {/* <div className="w-[80%] h-12 bg-white rounded-md flex">
                                    <div className="h-full w-[85%]">
                                        <input className="h-full w-full bg-white rounded-l-md text-slate-800 font-semibold px-2 focus:outline-none" 
                                        type="text" placeholder="Enter Your Email"
                                         />
                                    </div>
                                    <div className=" h-full w-[15%] bg-color-secondary cursor-pointer flex justify-center rounded-r-md items-center">
                                        <button><FaGreaterThan className="bg-color-secondary h-full"/></button>
                                    </div>
                                    <div></div>
                                </div> */}
                            </div>
                           
                        </div>

                    </div>

                </div>
                </div>
                
                {/* <div className=" md:w-1/2  m-auto text-center pb-10 bg-">
                    <p className=" font-semibold">2023 <PiCopyright className=" inline text-lg"/> Mhaddaou, All Righte Reserved</p>
                </div> */}

            </div>
        </section>
    );
}

export default Footer;