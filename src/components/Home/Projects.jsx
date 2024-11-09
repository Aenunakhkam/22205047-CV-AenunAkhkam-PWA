import React, { useEffect } from 'react'
import { useInView, useAnimate } from 'framer-motion'
import { useSelector } from 'react-redux'
import ProjectCard from './ProjectCard'
import jsonIcon from '../../assets/sport.png'
import xCodeImg from '../../assets/webdesain.png'
import floatingHippoImg from '../../assets/crud.png'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function Projects() {
  const colorTheme = useSelector((state) => state.mode.colorTheme)
  const navigate = useNavigate()
  const [aboutRef, animate] = useAnimate()
  const isInView = useInView(aboutRef)

  useEffect(() => {
    if (isInView) {
      //   console.log('in view')
      animate(
        aboutRef.current,
        {
          opacity: 1,
          x: 0,
        },
        {
          duration: 0.2,
          delay: 0.2,
        },
      )
    } else {
      //   console.log('not in view')
      animate(aboutRef.current, { opacity: 0, x: 100 })
    }
  }, [isInView])

  return (
    <div
      className=" w-full min-h-screen flex flex-col items-center justify-center text-center gap-4 lg:gap-8 "
      id="projects"
    >
      <div
        ref={aboutRef}
        className=""
        style={{
          fontFamily: 'Borel, sans-serif',
          color: colorTheme.primaryText,
        }}
      >
        <h1 className="text-3xl mb-4 font-bold">Projects</h1>
        <div className="flex flex-col items-center justify-center lg:flex-row gap-4">
          <ProjectCard
            title="Crud Data Dosen"
            description="web crud data dosen di buat dengan bahasa pemrograman php dengan framwork laravel 10."
            image={floatingHippoImg}
            link="https://github.com/Aenunakhkam/datadosen"
            delay={1}
          />
          <ProjectCard
            title="MataSport"
            description="Web toko matasport di bangun dengan sederhana hanya frontend saja menggunakan HTML, CSS dan Java Script."
            image={jsonIcon}
            link="https://github.com/Aenunakhkam/"
            delay={1.3}
          />
          <ProjectCard
            title="Web Design"
            description="Web Desain yang di tampilkan di buat menggunakan aplikasi Figma aplikasi."
            image={xCodeImg}
            link="hhttps://github.com/Aenunakhkam/"
            delay={1.6}
          />
        </div>
        <div className="w-full flex justify-center mt-4">
          <Button
            onClick={() => navigate('projects')}
            variant="outlined"
            color="primary"
          >
            See more
          </Button>
        </div>
      </div>
    </div>
  )
}
