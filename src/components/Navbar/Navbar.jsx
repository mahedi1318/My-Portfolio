import LogoImg from "../../assets/logo.png"

const Navbar = () => {
  return (
    <>
    <div className='w-full p-[20px] bg-[#0f172a]'>
      <div className='container flex justify-between items-center'>
        <div className="flex items-center  gap-[5px]">
            <img className="w-[30px] h-[30px] rounded-xl" src={LogoImg} alt="" /> 
            <h1 className='lato_font text-base font-bold text-[#BCAAA4]'>Mahedi-Hassan</h1>
        </div>
        <div className="menu">
            <ul className='flex gap-[60px]'>
                <li className='text-lg lato_font font-medium text-white '><a href="#">Home</a></li>
                <li className='text-lg lato_font font-medium text-white '><a href="#">About</a></li>
                <li className='text-lg lato_font font-medium text-white '><a href="#">Portfolio</a></li>
                <li className='text-lg lato_font font-medium text-white '><a href="#">Skills</a></li>
                <li className='text-lg lato_font font-medium text-white '><a href="#">Contact</a></li>
            </ul>
        </div>
        <div className="">
            <button className='px-[30px] py-[10px] bg-green-500 rounded-xl lato_font font-bold text-base' type='button'>Dwonlode CV</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar
