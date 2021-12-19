import React from "react";

const social = [
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/bartlomiej-dabrowski/",
        target: "_blank",
        icon: (props: any) => (
            <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
                <path
                    stroke='none'
                    d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'
                ></path>
                <circle cx='4' cy='4' r='2' stroke='none'></circle>
            </svg>
        ),
    },
    {
        name: "GitHub",
        href: "https://github.com/DBarry-Code",
        target: "_blank",
        icon: (props: any) => (
            <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
                <path
                    fillRule='evenodd'
                    d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                    clipRule='evenodd'
                />
            </svg>
        ),
    },
];

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
                Coded with Next.js , Tailwind , CSS and GraphCRM
            </p>
            <p className='text-gray-500 text-center mb-2'>
                &copy;{new Date().getFullYear()} Barry Dabrowski
            </p>
        </footer>
    );
};

export default Footer;
