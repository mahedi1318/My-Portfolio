import BannerImg from "../../assets/banner-img.jpg"

const Banner = () => {
  return (
    <>
      <div className='bg-[#0F1726] w-full h-[500px] mb:h-[451px] md:h-[440px]'>
        <div className='container flex justify-between sm:block md:flex'>
          <div className="text inline-block mt-[100px] sm:mt-[80px] md:w-[500px] mb:mt-[42px]">
            <h1 className='xl:text-2xl sm:text-xl mb:text-xl mb:w-[300px] lato_font font-medium text-gray-500 w-[400px] leading-10'>I AM A FRONT-END DEVELOPER (REACT $ NEXT JS)</h1>            
            <p className='text-base lato_font font-medium text-[#a2a2a2] mt-[20px] xl:w-[644px] mb:text-[15px] sm:w-[608px] md:w-[477px] leading-7 lg:w-[583px]'>Hi, I am a professional Frontend Developer & web designer with 3 years experience, I provide html, 
            CSS, JavaScript, related services like PSD, SD, sketch, Figma to html or React with fully responsive design.
            If you are looking for a complete professional service then feel free to contact us. I'm ready to translate my skill sets to your project.</p>
            <button className="text-base lato_font font-bold mb:mt-[40px] px-[20px] py-[12px] rounded-xl bg-[#55e6a5] hover:bg-[#daa520] duration-200 mt-[20px]" type="button">Resume Downloade</button>
          </div>
          <div className="mt-[100px] sm:hidden md:block mb:hidden">
            <img src={BannerImg} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
