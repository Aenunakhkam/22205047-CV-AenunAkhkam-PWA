import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAnimate, useInView } from 'framer-motion'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import { StepContent } from '@mui/material'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Paper } from '@mui/material'

export default function Exp() {
  const colorTheme = useSelector((state) => state.mode.colorTheme)
  const navigate = useNavigate()
  const [aboutRef, animate] = useAnimate()
  const isInView = useInView(aboutRef)

  const steps = [
    {
      label: 'Laboran Lab Komputer',
      time: 'Juli 2021 - Sekarang',
      description:
        'Pemeliharaan Perangkat Keras Melakukan pengecekan rutin terhadap kondisi komputer, printer, scanner, dan perangkat jaringan lainnya. Pengelolaan Aset Membuat inventarisasi semua perangkat keras dan lunak yang ada di laboratorium. Melakukan pengecekan berkala terhadap keberadaan aset.',
    },
    {
      label: 'IT Support',
      time: ' Juli 2021 - Sekarang',
      description:
        'IT Support aMemasang dan mengkonfigurasi perangkat jaringan, seperti router, switch, access point, dan server. Membuat desain jaringan yang sesuai dengan kebutuhan sekolah, termasuk topologi jaringan, pemilihan perangkat keras, Memastikan jaringan dapat menampung jumlah pengguna dan jenis layanan yang dibutuhkan, seperti akses internet, intranet, dan sistem informasi sekolah.',
    },

    {
      label: 'Pengajar',
      time: 'Juli 2021 - Sekarang',
      description:
        'Bertanggung jawab dalam mengajar mata pelajaran TKJ, mulai dari dasar jaringan komputer hingga pemrograman serta disertai dengan project siswa dan meningkatan bakat minat ,skill siswa',
    },
  ]

  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

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
      className=" w-full h-screen flex flex-col items-center justify-center gap-4 lg:gap-8 max-w-[600px]"
      id="experience"
    >
      <div
        ref={aboutRef}
        className=""
        style={{
          fontFamily: 'Borel, sans-serif',
          color: colorTheme.primaryText,
        }}
      >
        <h1 className="text-3xl text-center mb-4 font-bold">Experience</h1>
        <Box sx={{ maxWidth: 500 }}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  optional={
                    index === 2 ? (
                      <Typography
                        sx={{ color: colorTheme.primaryText }}
                        variant="caption"
                      >
                        Last step
                      </Typography>
                    ) : null
                  }
                >
                  <Typography
                    sx={{ color: colorTheme.primaryText }}
                    variant="caption"
                  >
                    {step.label}
                  </Typography>
                </StepLabel>
                <StepContent>
                  <Typography
                    sx={{ color: colorTheme.primaryText, fontWeight: 'bold' }}
                    variant="h6"
                    component={'div'}
                    className="mb-2"
                  >
                    {step.time}
                  </Typography>
                  <Typography>{step.description}</Typography>
                  <Box sx={{ mb: 2 }}>
                    <div>
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {index === steps.length - 1 ? 'Finish' : 'Continue'}
                      </Button>
                      <Button
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        Back
                      </Button>
                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === 2 && (
            <Paper
              square
              elevation={0}
              sx={{
                p: 2,
                bgcolor: colorTheme.primaryBg,
              }}
            >
              <Button variant="outlined" onClick={handleReset}>
                Reset
              </Button>
            </Paper>
          )}
        </Box>
        <div className="w-full flex justify-center mt-8">
          <Button
            onClick={() => navigate('/experience')}
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
