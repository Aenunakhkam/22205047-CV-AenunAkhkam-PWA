import React, { useEffect } from 'react'
import { useInView, useAnimate } from 'framer-motion'
import { useSelector } from 'react-redux'
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

export default function About() {
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
          delay: 0.2,
          duration: 0.2,
        },
      )
    } else {
      //   console.log('not in view')
      animate(aboutRef.current, { opacity: 0, x: 100 })
    }
  }, [isInView])

  return (
    <div
      className=" w-full h-screen flex flex-col items-center justify-center text-center gap-4 lg:gap-8 max-w-[600px]"
      id="about"
    >
      <div
        ref={aboutRef}
        className=""
        style={{
          fontFamily: 'Borel, sans-serif',
          color: colorTheme.primaryText,
        }}
      >
        <h1 className="text-3xl mb-4 font-bold">About</h1>
        <p className="text-lg">
          Hello! {`I'm`} "Seorang guru yang berpengalaman dengan latar belakang dalam pengembangan web dan dukungan TI. 
          Memadukan keterampilan teknologi dan pendidikan untuk menciptakan lingkungan belajar yang inovatif dan efektif. 
          Berkomitmen untuk memberikan solusi teknologi yang memudahkan proses pembelajaran dan meningkatkan pengalaman pengguna."
        </p>
        <h3 className="text-2xl font-bold mt-4">My Favourite Quote</h3>
        <div className=" mx-auto max-w-[500px]">
          <p className="text-lg mt-4 ">
            <BiSolidQuoteAltLeft className="inline-block text-2xl relative top-[-.5rem]" />{' '}
            Berikan contoh yang baik dari pada nasehat, Karena setiap orang bodoh pun bisa memnberikan nasehat.{' '}
            <BiSolidQuoteAltRight className="inline-block text-2xl relative bottom-[.5rem]" />
          </p>
          <p className="text-lg mt-2 text-end">–Aenun Akhkam</p>
        </div>
        <div className="w-full flex justify-center mt-8">
          <Button
            onClick={() => navigate('/about')}
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
