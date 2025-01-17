import React from 'react'
import { TextAnimate } from "@/components/ui/text-animate"
import ChatBot from './ui/chatbot';

const Hero = () => {
  return (
    <div className='h-[90vh] bg-zinc-50 flex justify-center pt-24 px-14'>
        <div className='text-black font-sans flex flex-col items-start'>
            <TextAnimate text="Revolutionize Networking:" type="shiftInUp" className='text-6xl font-extrabold max-w-4xl' />
            <TextAnimate text="Share Your Business" type="shiftInUp" className='text-6xl font-extrabold max-w-4xl' />
            <TextAnimate text="Card Digitally!" type="shiftInUp" className='text-6xl font-extrabold max-w-4xl' />
            <p className='text-zinc-800 text-xl mt-6'>Eco-Friendly. Customizable. Effortless. Connect with a Tap.</p>
            <div className='bg-purple-700 py-3 px-6 text-white rounded-full text-lg mt-6'>Get started now</div>
        </div>
        <ImageWithCaption />    
        <ChatBot />
        </div>
  )
}

const ImageWithCaption = () => {
    return (
        <div style={{ display: 'inline-block', position: 'relative' }}>
            <img 
            className='mt-14'
                src="https://doodleipsum.com/700/hand-drawn?i=34c625e6dca86d75f482e050e145c82b"  
                style={{ width: '100%', height: 'auto' }} 
            />
        </div>
    );
};


export default Hero