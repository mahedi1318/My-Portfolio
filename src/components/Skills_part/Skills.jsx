import React from 'react'
import SkillsLevel from './SkillsLevel'


  const skillsName = [
    {
      name: "HTML",
      percentage: "90%"
    },
    {
      name: "CSS",
      percentage: "85%"
    },
    {
      name: "BOOTSTRAP",
      percentage: "80%"
    },
    {
      name: "TAILWIN CSS",
      percentage: "90%"
    },
    {
      name: "SASS",
      percentage: "80%"
    },
    {
      name: "FIGMA",
      percentage: "80%"
    },
    {
      name: "PHOTOSHOP",
      percentage: "60%"
    }, 
  ]

  const skillsNameTwo = [
    {
      name: "jAVASCRIPT",
      percentage: "90%"
    },
    {
      name: "REACT JS",
      percentage: "85%"
    },
    {
      name: "NEXT JS",
      percentage: "70%"
    },
    {
      name: "RESPONSIVE",
      percentage: "90%"
    },
    {
      name: "REDUX",
      percentage: "50%"
    },
    {
      name: "NODE JS",
      percentage: "30%"
    },
    {
      name: "MONGO DB",
      percentage: "20%"
    }, 
  ]

const Skills = () => {
  return (
    <>
      <div className='pt-[50px] pb-[50px] bg-[#0F1726]'>
        <div className='container'>
            <div className=''>
                {/* heading_part */}
                <div className='relative mt-[-43px]'>
                    <div className='text-center text-8xl lato_font font-bold text-white/5 pt-5'>Skills</div>
                    <h1 className='text-3xl text-white text-center mt-[-60px]'>Skills</h1>
                </div>
            </div>
            <div className='grid xl:grid-cols-2 mb:grid-cols-1 md:grid-cols-2 gap-12'>
            <div>
                {/* skills section */}
                <div>
                  {skillsName.map((skill, id)=>(
                    <SkillsLevel key={id} skillName={skill.name} percentage={skill.percentage} />
                  ))}                   
                </div>
            </div>
            <div>
                {/* skills section */}
                <div>
                {skillsNameTwo.map((skill, id)=>(
                    <SkillsLevel key={id} skillName={skill.name} percentage={skill.percentage} />
                  ))}                   
                </div>
            </div>
            </div>
            
        </div>
        
      </div>
    </>
  )
}

export default Skills
