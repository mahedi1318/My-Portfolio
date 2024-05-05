import BannerImg from "../../assets/banner-img.jpg"

const Banner = () => {
  return (
    <>
      <div className='bg-[#0F1726] w-full h-[500px]'>
        <div className='container flex justify-between'>
          <div className="text inline-block mt-[100px]">
            <h1 className='text-2xl lato_font font-medium text-gray-500 w-[400px] leading-10'>I AM A FRONT-END DEVELOPER (REACT $ NEXT JS)</h1>            
            <p className='text-base lato_font font-medium text-[#a2a2a2] mt-[20px] w-[644px] leading-7'>Hi, I am a professional Frontend Developer & web designer with 3 years experience, I provide html, 
            CSS, JavaScript, related services like PSD, SD, sketch, Figma to html or React with fully responsive design.
            If you are looking for a complete professional service then feel free to contact us. I'm ready to translate my skill sets to your project.</p>
            <button className="text-base lato_font font-bold px-[20px] py-[12px] rounded-xl bg-[#55e6a5] mt-[20px]" type="button">Resume Downloade</button>
          </div>
          <div className="mt-[100px]">
            <img src={BannerImg} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
