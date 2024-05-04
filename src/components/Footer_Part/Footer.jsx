import { MdOutlineSpeakerPhone } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { MdMarkEmailUnread } from "react-icons/md";
import FooterFromPart from "./FooterFromPart";

const Footer = () => {
  return (
    <>
      <div className='w-full h-[1000px] bg-[#0f172a]'>
       <div className="container">
        <div className='grid grid-cols-3 gap-4 pt-[40px] '>
          <div className="bg-[#09101a] py-[60px] px-[30px] rounded-xl text-center">
            <div className="text-6xl text-[#55e6a5] flex justify-center">
             <MdOutlineSpeakerPhone />
            </div>
            <p className="text-[#a2a2a2] text-lg lato_font mt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, corrupti!</p>
            <a href="#">
              <h3 className="mt-6 text-white hover:text-[#55e6a5] transition-all">01605528981</h3>
            </a>
          </div>
          <div className="bg-[#09101a] py-[60px] px-[30px] rounded-xl text-center">
            <div className="text-6xl text-[#55e6a5] flex justify-center">
              <IoLocationSharp />
            </div>
            <p className="text-[#a2a2a2] text-lg lato_font mt-5">Dhaka 102, m eros justo, posuer oborti viverra laor house of street</p>
            <a href="#">
              <h3 className="mt-6 text-white hover:text-[#55e6a5] transition-all">View on map</h3>
            </a>
          </div>
          <div className="bg-[#09101a] py-[60px] px-[30px] rounded-xl text-center">
            <div className="text-6xl text-[#55e6a5] flex justify-center">
            <MdMarkEmailUnread />
            </div>
            <p className="text-[#a2a2a2] text-lg lato_font mt-5">Dhaka 102, m eros justo, posuer oborti viverra laor house of street</p>
            <a href="#">
              <h3 className="mt-6 text-[white] hover:text-[#55e6a5] transition-all">mahedihasan7784@gmail.com</h3>
            </a>
          </div>
        </div>
        <div className="from-part mt-16">
          <FooterFromPart/>
        </div>
       </div>
      </div>
    </>
  )
}

export default Footer
