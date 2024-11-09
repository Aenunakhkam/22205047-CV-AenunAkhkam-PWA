import React from 'react'
import { useSelector } from 'react-redux'

export default function AboutIntro() {
  const colorTheme = useSelector((state) => state.mode.colorTheme)
  return (
    <div
      style={{
        color: colorTheme.primaryText,
      }}
      className="text-center mt-4 max-w-[800px]"
    >
      <h1 className="text-4xl font-bold">Hi, I am Mas' Akhkam</h1>
      <div className="mt-2">
        <span className=" hover:text-[#FD8D14] font-bold cursor-pointer">
          Developer
        </span>{' '}
        | {` `}
        <span className=" hover:text-[#FD8D14] font-bold cursor-pointer">
          Teacher
        </span>{' '}
        | {` `}
        <span className=" hover:text-[#FD8D14] font-bold cursor-pointer">
          Student
        </span>{' '}
        | {` `}
        <span className=" hover:text-[#FD8D14] font-bold cursor-pointer">
          Network Engineering
        </span>
      </div>
      <p className="text-xl mt-8">
        seorang guru, pengembang web frontend, mahasiswa Ilmu Komputer, 
        dan IT support yang bersemangat dalam membuat aplikasi web yang menarik dan interaktif. 
        Saya lebih percaya diri dalam pengembangan frontend, tetapi tetap memperdalam konsep backend dan database
        {`I'm`}Sebagai pengembang dan pendidik, saya berkomitmen untuk memanfaatkan teknologi
        guna mempermudah proses pembelajaran dan meningkatkan pengalaman pengguna. 
        Saya senang belajar teknologi baru, memecahkan tantangan, dan mengembangkan
        keterampilan saya di berbagai proyek menarik. Terima kasih sudah mampir!
      </p>
    </div>
  )
}
