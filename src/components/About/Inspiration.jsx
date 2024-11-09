import React from 'react'
import { useSelector } from 'react-redux'
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi'

export default function Inspiration() {
  const colorTheme = useSelector((state) => state.mode.colorTheme)
  return (
    <div
      className="my-8 max-w-[800px] w-full "
      style={{
        color: colorTheme.primaryText,
      }}
    >
      <h1 className="text-4xl font-bold text-center">Dreams & Inspiration</h1>
      <p className="text-center text-xl mt-8">
      Sebagai seorang pendidik yang berdedikasi, saya bercita-cita untuk menginspirasi generasi muda dan menciptakan lingkungan belajar yang positif. 
      Di sisi lain, sebagai pengembang web, saya berambisi untuk membangun solusi digital yang inovatif dan bermanfaat. Selain itu, sebagai teknisi IT,
      saya berkomitmen untuk memberikan layanan terbaik dan menjaga kelancaran sistem. Dengan menggabungkan passion saya dalam bidang pendidikan dan teknologi, 
      saya berharap dapat memberikan kontribusi yang berarti bagi masyarakat.
      </p>
      <div className=" mx-auto max-w-[500px] my-4">
        <p className="text-center text-xl">
          
        </p>
        <h3 className="text-2xl text-center font-bold mt-4">
          My Favourite Quote
        </h3>
        <p className="text-lg text-center mt-4 ">
          <BiSolidQuoteAltLeft className="inline-block text-2xl relative top-[-.5rem]" />{' '}
          You can never cross the ocean until you have the courage to lose sight
          of the shore.{' '}
          <BiSolidQuoteAltRight className="inline-block text-2xl relative bottom-[.5rem]" />
        </p>
        <p className="text-lg mt-2 text-end">–Christopher Columbus</p>
      </div>
    </div>
  )
}
