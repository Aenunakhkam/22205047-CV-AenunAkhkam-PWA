import React from 'react'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import SkillCard from '../Home/SkillCard'
import reactIcon from '../../assets/react.svg'
import reduxIcon from '../../assets/icons8-redux.svg'
import cIcon from '../../assets/icons8-c.svg'
import htmlIcon from '../../assets/icons8-html.svg'
import cssIcon from '../../assets/icons8-css.svg'
import jsIcon from '../../assets/js_logo.svg'
import figmaIcon from '../../assets/figma.svg'
// import nodeIcon from '../../assets/icons8-nodejs.svg'
import gitIcon from '../../assets/icons8-git.svg'
import tailwindIcon from '../../assets/tailwindcss.svg'
import flaskIcon from '../../assets/syestem.svg'
import pythonIcon from '../../assets/icons8-python.svg'
import astroIconLight from '../../assets/astro-icon-light.svg'
import astroIconDark from '../../assets/astro-icon-dark.svg'
import itIcon from '../../assets/webdesign.svg'
import djangoIcon from '../../assets/infrastruktur.svg'
import gitLabIcon from '../../assets/icons8-gitlab.svg'
import gitHubIcon from '../../assets/icons8-github.svg'
import cProgIcon from '../../assets/icons8-c-programming.svg'
import bootstrapIcon from '../../assets/icons8-bootstrap.svg'
import nextJsIcon from '../../assets/icons8-nextjs.svg'
import typeScript from '../../assets/icons8-typescript.png'

export default function Skills() {
  const colorTheme = useSelector((state) => state.mode.colorTheme)
  const isDark = useSelector((state) => state.mode.darkMode)

  return (
    <div style={{ color: colorTheme.primaryText }} className="my-8">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl text-center font-bold mt-8">Frontend</h1>
        <div className="flex flex-wrap gap-3 justify-center max-w-[800px]">
          
          <SkillCard title={`React`}>
            <motion.img
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              src={reactIcon}
              width={'60px'}
              className="group"
              style={{ filter: 'drop-shadow(0px 0px 10px #5BC0F8f5)' }}
              alt=""
            />
          </SkillCard>

          <SkillCard title={`HTML`}>
            <motion.img
              whileHover={{ scale: 1.2 }}
              src={htmlIcon}
              width={'60px'}
              style={{ filter: 'drop-shadow(0px 0px 10px #FD8D14A5)' }}
              alt=""
            />
          </SkillCard>

          <SkillCard title={`CSS`}>
            <motion.img
              whileHover={{ scale: 1.2 }}
              src={cssIcon}
              width={'60px'}
              style={{ filter: 'drop-shadow(0px 0px 10px #2CD3E1A5)' }}
              alt=""
            />
          </SkillCard>

          <SkillCard title={`JavaScript`}>
            <motion.img
              whileHover={{ scale: 1.2 }}
              src={jsIcon}
              width={'50px'}
              style={{ filter: 'drop-shadow(0px 0px 10px #F0DE36A5)' }}
              alt=""
            />
          </SkillCard>

         

      

          <SkillCard title={`Bootstrap`}>
            <motion.img
              whileHover={{ scale: 1.2 }}
              src={bootstrapIcon}
              style={{ filter: 'drop-shadow(0px 0px 10px #6F61C0A5)' }}
              width={'60px'}
              alt=""
            />
          </SkillCard>

          <SkillCard title={`Figma`}>
            <motion.img
              whileHover={{ scale: 1.2 }}
              src={figmaIcon}
              style={{ filter: 'drop-shadow(0px 0px 10px #6F61C0A5)' }}
              width={'60px'}
              alt=""
            />
          </SkillCard>

        
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl text-center font-bold mt-8">Network Engineering</h1>
        <div className="flex flex-wrap gap-3 justify-center max-w-[800px]">

          <SkillCard title={` Web Design`}>
            <motion.img
              whileHover={{ scale: 1.2 }}
              src={itIcon}
              style={{ filter: 'drop-shadow(0px 0px 10px #0B666AA5)' }}
              width={'60px'}
              alt=""
            />
          </SkillCard>

          <SkillCard title={`Infrastructure`}>
            <motion.img
              whileHover={{ scale: 1.2 }}
              src={djangoIcon}
              width={'70px'}
              style={{ filter: 'drop-shadow(0px 0px 10px #0B666AA5)' }}
              alt=""
            />
          </SkillCard>

          <SkillCard title={`System Network`}>
            <motion.img
              whileHover={{ scale: 1.2 }}
              src={flaskIcon}
              width={'70px'}
              style={{ filter: 'drop-shadow(0px 0px 10px #000000A5)' }}
              alt=""
            />
          </SkillCard>

       
        </div>
      </div>

    
      
    </div>
  )
}
