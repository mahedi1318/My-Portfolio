import React from 'react'
import SkillsLevel from './SkillsLevel'


const Skills = () => {
  return (
    <>
      <div className='p-[50px] bg-[#0F1726]'>
        <div className='container'>
            <div className=''>
                {/* heading_part */}
                <div className='relative'>
                    <div className='text-center text-8xl lato_font font-bold text-white/5 pt-5'>Skills</div>
                    <h1 className='text-3xl text-white text-center mt-[-60px]'>Skills</h1>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-12'>
            <div>
                {/* skills section */}
                <div>
                    <SkillsLevel skillName="HTML" percentage={"90%"} />
                    <SkillsLevel skillName="CSS" percentage={"85%"} />
                    <SkillsLevel skillName="BOOTSTRAP" percentage={"60%"} />
                    <SkillsLevel skillName="TAILWIN CSS" percentage={"70%"} />
                    <SkillsLevel skillName="SASS" percentage={"60%"} />
                    <SkillsLevel skillName="FIGMA" percentage={"90%"} />
                    <SkillsLevel skillName="PHOTOSHOP" percentage={"70%"} />
                </div>
            </div>
            <div>
                {/* skills section */}
                <div>
                    <SkillsLevel skillName="jAVASCRIPT" percentage={"60%"} />
                    <SkillsLevel skillName="REACT JS" percentage={"85%"} />
                    <SkillsLevel skillName="NECT JS" percentage={"40%"} />
                    <SkillsLevel skillName="RESPONSIVE" percentage={"80%"} />
                    <SkillsLevel skillName="REDUX" percentage={"50%"} />
                    <SkillsLevel skillName="NODE JS" percentage={"30%"} />
                    <SkillsLevel skillName="MONGO DB" percentage={"20%"} />
                </div>
            </div>
            </div>
            
        </div>
        
      </div>
    </>
  )
}

export default Skills
