import React from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

function Header() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const toggleMenu = () => setNavbarOpen(!navbarOpen);

    const navigation = [
        { link: "/#home", text: "Home" },
        { link: "/#about", text: "About" },
        { link: "/#stack", text: "Stack" },
        { link: "/#project", text: "Projects" },
        { link: "/#blog", text: "Blog" },
        { link: "/#contact", text: "Contact" },
    ];

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
                            {navigation.map((nav, index) => (
                                <li key={index} className='nav-item'>
                                    <Link href={nav.link}>
                                        <a
                                            onClick={toggleMenu}
                                            className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
                                        >
                                            <span className='ml-2'>
                                                {nav.text}
                                            </span>
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
