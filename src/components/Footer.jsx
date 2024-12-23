import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs'

export default function Footer() {
  const colorTheme = useSelector((state) => state.mode.colorTheme)
  const theme = useSelector((state) => state.mode.darkMode)

  return (
    <footer
      className="flex flex-col items-center gap-3 p-4 lg:p-8 lg:pb-4 w-full border-t-[1px] border-t-[#dddddd]"
      style={{
        color: colorTheme.primaryText,
        borderColor: theme ? '#A6A9B6' : '#dddddd',
      }}
    >
      <div className="flex flex-col lg:flex-row items-center gap-5 justify-between w-full">
        <div className="flex flex-col justify-start w-full lg:w-fit ">
          <h1 className="text-2xl font-bold ">Mas Akhkam</h1>
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
              IT Support
            </span>
          </div>
          <p className="">© 2024 Aenun Akhkam</p>
        </div>
        <div className="flex gap-8 lg:gap-12 font-semibold justify-between w-full lg:w-fit">
          <div className="flex flex-col gap-3">
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
          </div>
          <div className="flex flex-col gap-3">
            <Link to="/resume">Resume</Link>
            <Link to="/skills">Skills</Link>
          </div>
          <div className="flex flex-col gap-3">
            <Link to="/contact">Contact</Link>
            <Link to="https://github.com/Aenunakhkam" target="_blank">GitHub</Link>
          </div>
        </div>
      </div>
      <hr
        className="w-full"
        style={{ backgroundColor: colorTheme.primaryText, height: '1.5px' }}
      />
      <div className="flex gap-4 justify-center lg:justify-end w-full ">
        <Link
          target="_blank"
          className="group"
          to="https://github.com/Aenunakhkam"
        >
          <BsGithub className="text-2xl inline-block mr-2 group-hover:text-[#000000]" />
          GitHub
        </Link>
        <Link
          target="_blank"
          className="group"
          to="https://www.linkedin.com/in/aenun-akhkam-2243412bb/"
        >
          <BsLinkedin className="text-2xl inline-block mr-2 group-hover:text-[#1565c0]" />
          LinkedIn
        </Link>
        <Link
          target="_blank"
          className="group"
          to="https://www.instagram.com/akhkaaaam_"
        >
          <BsInstagram className="text-2xl inline-block mr-2 group-hover:text-[#1565c0]" />
          Instagram
        </Link>
      </div>
    </footer>
  )
}
