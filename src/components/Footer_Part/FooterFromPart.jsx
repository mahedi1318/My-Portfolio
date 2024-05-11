import React from 'react'

const FooterFromPart = () => {
  return (
    <>
    <div className='xl:w-[900px] m-auto sm:w-[600px] lg:w-[800px]'>
        <div className='gap-8 flex'>
            <input className='w-full pl-4 py-3 rounded-lg bg-transparent border border-[#fff4]' type="text" placeholder='FIRST NAME'/>
            <input className='w-full pl-4 py-3 rounded-lg bg-transparent border border-[#fff4]' type="text" placeholder='LAST NAME'/>
        </div>
        <div className=''>
            <input className='w-full pl-4 py-3 rounded-lg mt-5 bg-transparent border border-[#fff4]' type="text" placeholder='Email'/>
            <textarea className='w-full pl-4 pt-3 h-[200px] rounded-lg mt-5 bg-transparent border border-[#fff4]' name="" id="" placeholder='Your Message Here'></textarea>
        </div>  
        <button className='px-6 py-3 bg-[#55e6a5] hover:bg-[#daa520] duration-200 flex m-auto mt-8 rounded-xl text-[#444] text-lg font-bold lato_font' type='submit'>Submit</button>          
    </div>      
    </>
  )
}

export default FooterFromPart
