import React from "react";
import Head from "next/head";
import Link from "next/link";

const Hero = () => {
    return (
        <>
            <section id='home' className='text-gray-600 body-font h-screen'>
                <div className='container h-full mx-auto flex px-5 flex-col justify-center items-center'>
                    <div className='flex flex-col mb-16 md:mb-0 items-center text-center'>
                        <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
                            Barry Dabrowski
                        </h1>
                        <h2 className='sm:text-6xl text-2xl'>
                            &#123; Full - Stack Web Developer &#125;
                        </h2>
                        <p className='mb-8 mt-8 leading-relaxed font-bold'>
                            HTML . (S)CSS . JavaScript . NodeJS . React .
                            Next.js . RestAPI . GraphQL . CRM . Database
                        </p>
                        <div className='flex justify-center'>
                            <Link href='/#project'>
                                <a>
                                    <button className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-900 rounded text-lg shadow-lg shadow-indigo-500/50'>
                                        PROJECTS
                                    </button>
                                </a>
                            </Link>

                            <Link href='/#contact'>
                                <a>
                                    <button className='ml-4 inline-flex text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-800 rounded text-lg shadow-lg shadow-green-500/50'>
                                        HIRE ME
                                    </button>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <Link href='/#about'>
                        <a>
                            <div className='icon-scroll animate-bounce'></div>
                        </a>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Hero;
