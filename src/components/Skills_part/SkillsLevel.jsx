import React from 'react'

const SkillsLevel = ({skillName, percentage}) => {
  return (
    <>
    <div className='text-white mt-8'>
        <div className='flex justify-between items-end'>
            <p className='text-xl font-bold mb-2'>{skillName}</p>
            <p className='text-xl font-bold'>{percentage}</p>
        </div>  
        <div>
            <div className='w-full bg-[#444] h-2 rounded-full'>
                <div style={{width: `${percentage}`}} className='h-2 bg-[#daa520] rounded-full'></div>
            </div>
        </div>  
    </div>
    </>
  )
}

export default SkillsLevel
