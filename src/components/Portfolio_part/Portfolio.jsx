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
    <div className='pt-[20px] pb-[40px] bg-slate-700'>
        <div className="container">
            <div className="title">
                <h1 className='text-center text-4xl lato_font font-bold text-white'>PORT<strong className='text-[#daa520]'>FOLIO</strong></h1>
            </div>  
            <div className='grid grid-cols-3 gap-7 mt-7'>
                <div className='w-full h-[400px] rounded-lg'>
                    <img className='w-[100%] h-full rounded-lg' src={ImgOne} alt="" />
                </div>
                <div className='w-full h-[400px] rounded-lg'>
                    <img className='w-[100%] h-full rounded-lg' src={ImgTwo} alt="" />
                </div>
                <div className='w-full h-[400px] rounded-lg'>
                    <img className='w-[100%] h-full rounded-lg' src={ImgThree} alt="" />
                </div>
                <div className='w-full h-[400px] rounded-lg'>
                    <img className='w-[100%] h-full rounded-lg' src={ImgFour} alt="" />
                </div>
                <div className='w-full h-[400px] rounded-lg'>
                    <img className='w-[100%] h-full rounded-lg' src={ImgFive} alt="" />
                </div>
                <div className='w-full h-[400px] rounded-lg'>
                    <img className='w-[100%] h-full rounded-lg' src={ImgSix} alt="" />
                </div>
            </div>
        </div>        
    </div>      
    </>
  )
}

export default Portfolio
