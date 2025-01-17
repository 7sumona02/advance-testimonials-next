'use client'
import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Space_Mono } from 'next/font/google';
import { motion } from "framer-motion"; // Correct import for framer-motion

const sm = Space_Mono({
    weight: '400',
    subsets: ['latin'],
});

const Testimonials = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const avatars = [
        { name: "FYODOR DOSTOEVSKY", src: "https://github.com/shadcn.png" },
        { name: "Neon", src: "https://github.com/shadcn.png" },
        // Add more avatars as needed
        { name: "User 3", src: "https://github.com/shadcn.png" },
        { name: "User 4", src: "https://github.com/shadcn.png" },
        { name: "User 5", src: "https://github.com/shadcn.png" },
        { name: "User 6", src: "https://github.com/shadcn.png" },
    ];

    return (
        <div className='flex justify-center flex-col items-center mt-10'>
            <div className='font-sans text-neutral-400'>Trusted by:</div>
            <div className='flex gap-2 mt-6'>
                {/* User icons */}
                {avatars.map((avatar, index) => (
                    <div className="relative flex flex-col items-center" key={index}>
                        <Avatar
                            className='size-8 ring-red-600 ring-0 ring-offset-0 hover:ring-offset-4 ring-offset-black hover:ring-1 duration-200 transition-all'
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <AvatarImage src={avatar.src} />
                            <AvatarFallback>{avatar.name.charAt(0)}</AvatarFallback>
                        </Avatar>

                        {/* Tooltip */}
                        <motion.div
                            initial={{ opacity: 0, y: 2 }}
                            animate={hoveredIndex === index ? { opacity: 1, y: 0 } : {}}
                            exit={{ opacity: 0, y: 2 }}
                            transition={{ duration: 0.2 }}
                            className={`${sm.className} whitespace-nowrap text-center absolute top-full mt-2 bg-neutral-800 px-3 py-1 rounded text-[10px] capitalize text-white`}
                            style={{ display: hoveredIndex === index ? 'block' : 'none' }} // Hide when not hovered
                        >
                            {avatar.name}
                        </motion.div>
                    </div>
                ))}
            </div>
            {/* Testimonial card */}
        </div>
    );
}

export default Testimonials;
