'use client'
import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import React from 'react'

const page = () => {
  return (
    <div className='select-none h-screen overflow-hidden'>
      <Nav />
      <Hero />
    </div>
  )
}

export default page