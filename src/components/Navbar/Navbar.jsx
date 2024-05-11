
import { useState } from "react";
import LogoImg from "../../assets/logo.png"
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";



  const navbarMenu = [
    {
      name: "Home",
      links: "/"
    },
    {
      name: "About",
      links: "/about"
    },
    {
      name: "Portfolio",
      links: "/portfolio"
    },
    {
      name: "Skills",
      links: "/skills"
    },
    {
      name: "Contact",
      links: "/contact"
    },
  ]
  

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen]= useState(false)

  let handleToggleMenu = ()=>{
    setIsMenuOpen(!isMenuOpen)
  }

   return (
    <>  
    <div className='w-full p-[20px] bg-[#0f172a]'>
      <div className='container flex justify-between items-center'>
        <div className="flex items-center gap-[5px]">
            <img className="w-[30px] h-[30px] rounded-xl" src={LogoImg} alt="" /> 
            <h1 className='lato_font text-base font-bold text-[#BCAAA4]'>Mahedi-Hassan</h1>
        </div>
        <div className="menu sm:hidden lg:block mb:hidden">
            <ul className='flex xl:gap-[60px] lg:gap-[40px]'>
              {navbarMenu.map((link, index)=>(            
                  <li key={index} className='xl:text-lg hover:text-[#daa520] duration-200 lg:text-base lato_font font-medium text-white '>
                    <a href={link.links} >{link.name}</a>
                  </li>         
              ))}                
            </ul>
        </div>
        <div className="sm:hidden lg:block mb:hidden">
            <button className='px-[30px] py-[10px] bg-[#55e6a5] hover:bg-[#daa520] duration-200 rounded-xl lato_font font-bold text-base' type='button'>Dwonlode CV</button>
        </div>
        {/* mobile menu button and mobile screen */}
        <div className="xl:hidden text-3xl text-white lg:hidden">
          <button onClick={handleToggleMenu} className="cursor-pointer">
            {
              isMenuOpen ? <FaXmark /> : <FaBars />
            }            
          </button>
        </div>
      </div> 
    </div>
    {/* mobile menu item and all screen */}
    <div className={`w-full bg-[#1f2c4b] text-center pt-[100px] h-full xl:hidden ${isMenuOpen ? "fixed w-full transition-all duration-1000" : "hidden"}`}>
        <ul className='block xl:gap-[60px] lg:gap-[40px] space-y-7'>
          {navbarMenu.map((link, index)=>(            
              <li key={index} className=' hover:text-[#daa520] duration-200 text-xl lato_font font-medium text-white '>
                <a href="#" >{link.name}</a>
              </li>         
          ))}                
        </ul>
      </div>
    </>
  )
}

export default Navbar
