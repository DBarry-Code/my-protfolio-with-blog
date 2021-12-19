import React from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

function Header() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (
        <header className='relative'>
            <nav className='fixed w-full z-10 top-0 flex flex-wrap items-center justify-between px-2 py-3 mb-3 bg-zinc-800 shadow-lg shadow-zinc-500/50'>
                <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
                    <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
                        <Link href='/#home'>
                            <a className='text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white'>
                                Barry Dabrowski
                            </a>
                        </Link>
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
                                <Link href='/#home'>
                                    <a className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'>
                                        <span className='ml-2'>Home</span>
                                    </a>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link href='/#about'>
                                    <a className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'>
                                        <span className='ml-2'>About</span>
                                    </a>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link href='/#stack'>
                                    <a className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'>
                                        <span className='ml-2'>Stack</span>
                                    </a>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link href='/#project'>
                                    <a className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'>
                                        <span className='ml-2'>Projects</span>
                                    </a>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link href='/#blog'>
                                    <a className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'>
                                        <span className='ml-2'>Blog</span>
                                    </a>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link href='/#contact'>
                                    <a className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'>
                                        <span className='ml-2'>Contact</span>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
