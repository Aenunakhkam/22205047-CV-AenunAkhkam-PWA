import React from 'react'
import { useSelector } from 'react-redux'
import ProjectCard from '../Home/ProjectCard'
import emojiPixel from '../../assets/jaringan.png'
import jsonIcon from '../../assets/blog.png'
import morseIcon from '../../assets/morse-in-one.jpg'
import testGif from '../../assets/teminal_test_your_luck2-min.gif'
import morseWeb from '../../assets/morse-in-one-web.png'
import morseCodeGen from '../../assets/morse-code-generator.png'
import myBlogImg from '../../assets/my-blog.jpeg'
import xCodeImg from '../../assets/webdesain.png'
import floatingHippoImg from '../../assets/pribadi.png'
import bashScriptsImg from '../../assets/bash-shell-logo.jpg'
import bioDropImg from '../../assets/crud.png'
import svelteKitTyperImg from '../../assets/sport.png'

export default function Projects() {
  const colorTheme = useSelector((state) => state.mode.colorTheme)
  return (
    <div
      style={{
        color: colorTheme.primaryText,
      }}
      className="flex flex-col justify-center items-center gap-4  w-full min-h-screen text-center my-8 "
    >
      <h1 className="text-3xl text-center font-bold max-w-[800]">Projects</h1>
      <div className="flex flex-wrap justify-center items-center gap-4 mt-4">
        <ProjectCard
          title="Crud Data Dosen"
          description="web crud data dosen di buat dengan bahasa pemrograman php dengan framwork laravel 10."
          image={bioDropImg}
          link="https://github.com/Aenunakhkam/datadosen/"
          delay={0.8}
        />
        <ProjectCard
          title="MataSport"
          description="Web toko matasport di bangun dengan sederhana hanya frontend saja menggunakan HTML, CSS dan Java Script."
          image={svelteKitTyperImg}
          link="https://matasport.netlify.app/"
          delay={0.8}
        />
        <ProjectCard
          title="Web Design"
          description="Web Desain yang di tampilkan di buat menggunakan aplikasi Figma aplikasi."
          image={xCodeImg}
          link="https://www.figma.com/design/4M621FiF69VsQKV1fIUKwU/Untitled?node-id=0-1&node-type=canvas&t=H1zxFtxX06Qrusq2-0"
          delay={0.8}
        />
        <ProjectCard
          title="Personal Blog"
          description="Sebuah portofolio digital yang dibangun menggunakan perpustakaan JavaScript populer, React. Ini adalah sebuah showcase interaktif yang menampilkan proyek-proyek, keterampilan, dan pengalaman seorang developer. Dengan React, portofolio menjadi lebih dinamis, responsif, dan mudah dikelola."
          image={jsonIcon}
          link="https://github.com/Aenunakhkam/"
          delay={0.4}
        />
        <ProjectCard
          title="Personal Blog"
          description="Web personal di buat sederhana dengan menggunakan HTMl, CSS, Java Script dan juga responsive"
          image={floatingHippoImg}
          link="https://aenunakhkam.github.io/matanet/"
          delay={1}
        />
        <ProjectCard
          title="Network Engineering"
          description="Mendesain sebuah jarinan dari skala kecil dengan besar dengan menggunakan aplikasi simulator jaringan, Cisco packet Tracer."
          image={emojiPixel}
          link="https://www.youtube.com/channel/UCzP2nCKzcfFpjWhfKDkqSWw"
          delay={0.2}
        />
       
        
      </div>
    </div>
  )
}
