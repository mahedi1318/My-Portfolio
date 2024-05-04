import React from 'react'

const FooterFromPart = () => {
  return (
    <>
    <div className='w-[900px] m-auto'>
        <div className='gap-8 flex'>
            <input className='w-full pl-4 py-3 rounded-lg' type="text" placeholder='FIRST NAME'/>
            <input className='w-full pl-4 py-3 rounded-lg' type="text" placeholder='LAST NAME'/>
        </div>
        <div className=''>
            <input className='w-full pl-4 py-3 rounded-lg mt-5' type="text" placeholder='Email'/>
            <textarea className='w-full pl-4 pt-3 h-[200px] rounded-lg mt-5' name="" id="" placeholder='Your Message Here'></textarea>
        </div>  
        <button className='px-6 py-3 bg-[#55e6a5] flex m-auto mt-8 rounded-xl text-[#444] text-lg font-bold lato_font' type='submit'>Submit</button>          
    </div>      
    </>
  )
}

export default FooterFromPart
