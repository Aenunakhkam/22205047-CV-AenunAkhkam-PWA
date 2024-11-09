import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Intro() {
  const colorTheme = useSelector((state) => state.mode.colorTheme)
  return (
    <div
      id="intro"
      style={{ color: colorTheme.primaryText }}
      className="max-w-[800px] w-full mx-auto"
    >
      <h1 className="text-4xl text-center font-bold">My Projects</h1>
      <p className="text-center text-xl mt-4">
      Hai, saya Mas Akhkam dan saya suka membuat proyek dan memecahkan masalah di dunia nyata. Saya senang mempelajari keterampilan dan teknologi baru, dan menerapkannya untuk menciptakan solusi yang keren dan bermanfaat. Anda bisa melihatnya di halaman GitHub saya
        <Link className="font-bold" to={`https://github.com/Aenunakhkam`}>
          @Aenun Akhkam{' '}
        </Link>{' '}
        Saya selalu mencari tantangan dan kesempatan baru untuk belajar dan berkembang. Jika Anda memiliki pertanyaan atau saran, jangan ragu untuk menghubungi saya
        <Link to={`/contact`} className="font-bold">
          @Contact
        </Link>{' '}
        .
      </p>
    </div>
  )
}
