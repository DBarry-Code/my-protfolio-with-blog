import React from "react";
import { social } from "../../constants/socialIcons";

const Footer = () => {
    return (
        <footer className='z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-0 flex flex-col justify-center'>
            <div className='flex justify-center space-x-6'>
                {social.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        target={item.target}
                        className='text-gray-400 hover:text-gray-500'
                    >
                        <span className='sr-only'>{item.name}</span>
                        <item.icon className='h-6 w-6' aria-hidden='true' />
                    </a>
                ))}
            </div>
            <p className='text-gray-500 text-center mt-4 mb-2'>
                Coded with Next.js , Tailwind , GraphQL and GraphCRM
            </p>
            <p className='text-gray-500 text-center mb-2'>
                &copy;{new Date().getFullYear()} Barry Dabrowski
            </p>
        </footer>
    );
};

export default Footer;
