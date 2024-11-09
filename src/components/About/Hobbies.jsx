import React from 'react'
import ImageList from '@mui/material/ImageList'

import HobbiyCard from './HobbyCard'
import { useSelector } from 'react-redux'

export default function Hobbies() {
  const colorTheme = useSelector((state) => state.mode.colorTheme)

  return (
    <div
      style={{ color: colorTheme.primaryText }}
      className="text-center my-8 max-w-[1000px] "
    >
      <h1 className="text-4xl font-bold mb-8">My Hobbies</h1>
      <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-2 gap-5 ">
        <div className="">
          <p className="text-xl lg:text-start ">
          Saya memiliki beberapa hobi yang saya nikmati di waktu luang. 
          Salah satu hobi favorit saya adalah bermain sepak bola. 
          Saya menyukai perasaan berada di lapangan dan bekerja sama dengan rekan-rekan setim untuk mencapai tujuan bersama. 
          Hobi lain yang saya sukai adalah mendengarkan musik. 
          Saya menemukan bahwa musik bisa sangat menenangkan dan membantu saya untuk bersantai setelah hari yang panjang. 
          Terakhir, saya juga senang berenang. 
          Ini adalah cara yang bagus untuk tetap aktif dan sehat sambil bersenang-senang. Ini hanyalah beberapa hobi yang saya nikmati di waktu luang.
          </p>
        </div>
        <ImageList>
          <HobbiyCard
            title="Bermain Sepak Bola"
            description="I love playing football"
            image="/images/playing-football.jpg"
          />
          <HobbiyCard
            title="Dengerin Music"
            description="I love playing football"
            image="/images/headphones.jpg"
          />
          <HobbiyCard
            cols={2}
            title="Berenang"
            description="I love playing football"
            image="/images/swimming.jpg"
          />
        </ImageList>
      </div>
    </div>
  )
}
