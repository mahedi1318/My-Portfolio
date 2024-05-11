import React from 'react'
import ImgOne from "../../assets/img-1.jpg"
import ImgTwo from "../../assets/img-2.jpg"
import ImgThree from "../../assets/img-3.jpg"
import ImgFour from "../../assets/img-4.jpg"
import ImgFive from "../../assets/img-5.jpg"
import ImgSix from "../../assets/img-6.jpg"


    

const Portfolio = () => {
  return (
    <>
    <div className='pt-[20px] pb-[40px] bg-[#0F1726]'>
        <div className="container">
            <div className="title">
                <h1 className='text-center text-4xl lato_font font-bold text-white'>PORT<strong className='text-[#daa520]'>FOLIO</strong></h1>
            </div>  
            <div className='grid xl:grid-cols-3 gap-7 mt-7 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3'>
                <div className='w-full h-[400px] rounded-lg'>
                        <div className='relative'>
                            <img className='w-[100%] h-[400px] rounded-lg' src={ImgOne} alt="" />
                            <a href="https://nerko-project-sixx.netlify.app">
                            <div className="overlay w-full h-full bg-[rgba(65,52,26,0.7)] absolute top-0 left-0 opacity-0 hover:opacity-100 duration-500 transition-all rounded-lg flex justify-center items-center">
                                <h3 className='text-white loto_font text-xl font-bold '>DEMO</h3>
                            </div>
                            </a>                            
                    </div>
                </div>
                <div className='w-full h-[400px] rounded-lg'>
                        <div className='relative'>
                            <img className='w-[100%] h-[400px] rounded-lg' src={ImgTwo} alt="" />
                            <div className="overlay w-full h-full bg-[rgba(65,52,26,0.7)] absolute top-0 left-0 opacity-0 hover:opacity-100
                             duration-500 transition-all rounded-lg flex justify-center items-center">
                                <h3 className='text-white loto_font text-xl font-bold '>DEMO</h3>
                        </div>
                    </div>
                </div>
                <div className='w-full h-[400px] rounded-lg'>
                        <div className='relative'>
                            <img className='w-[100%] h-[400px] rounded-lg' src={ImgThree} alt="" />
                            <div className="overlay w-full h-full bg-[rgba(65,52,26,0.7)] absolute top-0 left-0 opacity-0 hover:opacity-100
                             duration-500 transition-all rounded-lg flex justify-center items-center">
                                <h3 className='text-white loto_font text-xl font-bold '>DEMO</h3>
                        </div>
                    </div>
                </div>
                <div className='w-full h-[400px] rounded-lg'>
                        <div className='relative'>
                            <img className='w-[100%] h-[400px] rounded-lg' src={ImgFour} alt="" />
                            <div className="overlay w-full h-full bg-[rgba(65,52,26,0.7)] absolute top-0 left-0 opacity-0 hover:opacity-100
                             duration-500 transition-all rounded-lg flex justify-center items-center">
                                <h3 className='text-white loto_font text-xl font-bold '>DEMO</h3>
                        </div>
                    </div>
                </div>
                <div className='w-full h-[400px] rounded-lg'>
                        <div className='relative'>
                            <img className='w-[100%] h-[400px] rounded-lg' src={ImgFive} alt="" />
                            <div className="overlay w-full h-full bg-[rgba(65,52,26,0.7)] absolute top-0 left-0 opacity-0 hover:opacity-100
                             duration-500 transition-all rounded-lg flex justify-center items-center">
                                <h3 className='text-white loto_font text-xl font-bold '>DEMO</h3>
                        </div>
                    </div>
                </div>
                <div className='w-full h-[400px] rounded-lg'>
                        <div className='relative'>
                            <img className='w-[100%] h-[400px] rounded-lg' src={ImgSix} alt="" />
                            <div className="overlay w-full h-full bg-[rgba(65,52,26,0.7)] absolute top-0 left-0 opacity-0 hover:opacity-100
                             duration-500 transition-all rounded-lg flex justify-center items-center">
                                <h3 className='text-white loto_font text-xl font-bold '>DEMO</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    </div>      
    </>
  )
}

export default Portfolio
