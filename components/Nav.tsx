import React from 'react'

const Nav = () => {
  return (
    <div className='bg-zinc-50 h-[12vh] font-sans flex items-center justify-between px-14'>
        <div className='text-2xl font-extrabold  text-pink-500'>hello!Card</div>
        <div className='flex gap-8 text-zinc-800 items-center'>
            <div>About us</div>
            <div>Tutorial</div>
            <div className='bg-black py-3 px-6 text-white rounded-full text-sm'>Create your card</div>
        </div>
    </div>
  )
}

export default Nav