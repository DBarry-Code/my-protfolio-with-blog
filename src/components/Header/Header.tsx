import React from "react";
import { FaBars } from "react-icons/fa";

function Header() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (
        <header>
            <nav className='relative flex flex-wrap items-center justify-between px-2 py-3 bg-zinc-800 shadow-sm mb-3'>
                <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
                    <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
                        <a
                            className='text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white'
                            href='home'
                        >
                            Barry Dabrowski
                        </a>
                        <button
                            className='text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
                            type='button'
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <FaBars />
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id='example-navbar-danger'
                    >
                        <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
                            <li className='nav-item'>
                                <a
                                    className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
                                    href='#home'
                                >
                                    <span className='ml-2'>Home</span>
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a
                                    className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
                                    href='#about'
                                >
                                    <span className='ml-2'>About</span>
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a
                                    className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
                                    href='/projects'
                                >
                                    <span className='ml-2'>Projects</span>
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a
                                    className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
                                    href='/blogs'
                                >
                                    <span className='ml-2'>Blog</span>
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a
                                    className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
                                    href='#contact'
                                >
                                    <span className='ml-2'>Contact</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
