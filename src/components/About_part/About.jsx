import AboutImg from "../../assets/banner-img.jpg"

const About = () => {
  return (
    <>
      <div className='w-full lg:w-full pt-[40px] xl:pb-[150px] md:p-[52px] bg-[#0F1726]'>
        <div className="container">
            <div className="title text-center text-white">
                <h2 className='pt-5 lato_font font-bold text-4xl'>ABOUT <strong className='text-[#daa520]'>ME</strong> </h2>
                <span className='lato_font text-base font-normal mb:text-[14px] mt-4 block'>I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.</span>
            </div>
            <div className=' grid xl:grid-cols-2 sm:grid-cols-1 gap-8 mt-14 lg:grid-cols-2 '>
                <div className="relative">
                    <div className="absolute top-[0px] right-[58px] sm:hidden lg:block mb:hidden">
                        <img className="w-[360px] z-10 relative rounded-lg lg:w-[286px]" src={AboutImg} alt="" />
                        <div className="w-[355px] h-[355px] lg:w-[280px] lg:h-[280px] absolute top-[35px] left-[35px] border-8 border-[#daa520]"></div>
                    </div>
                    
                </div>
                <div className="grid xl:grid-cols-2 gap-4 md:w-[600px] md:m-auto lg:w-full mb:grid-cols-1 sm:grid-cols-2 mb:m-auto">
                    <div className="">
                        <ul>
                            <li className="mb-6 lato_font font-semibold text-base">
                                <h6 className="text-[#cacbcc]">Name <span className="pl-8 text-gray-400">Mahedi</span></h6>
                            </li>
                            <li className="mb-6 lato_font font-semibold text-base">
                                <h6 className="text-[#cacbcc]">Last Name<span className="pl-8 text-gray-400">Hassan</span></h6>
                            </li>
                            <li className="mb-6 lato_font font-semibold text-base">
                                <h6 className="text-[#cacbcc]">Birthdate <span className="pl-8 text-gray-400">01-02-2002</span></h6>
                            </li>
                            <li className="mb-6 lato_font font-semibold text-base">
                                <h6 className="text-[#cacbcc]">Nationality <span className="pl-8 text-gray-400">Bangla</span></h6>
                            </li>
                            <li className="mb-6 lato_font font-semibold text-base">
                                <h6 className="text-[#cacbcc]">Experience <span className="pl-8 text-gray-400">3 years</span></h6>
                            </li>
                            <li className="mb-6 lato_font font-semibold text-base">
                                <h6 className="text-[#cacbcc]">Address <span className="pl-8 text-gray-400">Dhaka</span></h6>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <ul>
                            <li className="mb-6 lato_font font-semibold text-base">
                                <h6 className="text-[#cacbcc]">Freelance <span className="pl-7 text-gray-400">Available</span></h6>
                            </li>
                            <li className="mb-6 lato_font font-semibold text-base">
                                <h6 className="text-[#cacbcc]">Langages <span className="pl-7 text-gray-400">English</span></h6>
                            </li>
                            <li className="mb-6 lato_font font-semibold text-base">
                                <h6 className="text-[#cacbcc]">Phone <span className="pl-7 text-gray-400">01605528981</span></h6>
                            </li>
                            <li className="mb-6 lato_font font-semibold text-base">
                                <h6 className="text-[#cacbcc]">Email <span className="pl-7 text-gray-400">javascript0552@gmail.com</span></h6>
                            </li>
                            <li className="mb-6 lato_font font-semibold text-base">
                                <h6 className="text-[#cacbcc]">Address <span className="pl-7 text-gray-400">Dhaka</span></h6>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default About
