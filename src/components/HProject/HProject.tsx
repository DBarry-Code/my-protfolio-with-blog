/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

function HProject({ projects }: any) {
    return (
        <section id='project' className='text-gray-600 body-font sm:h-screen'>
            <div className='container h-full px-5 py-24 mx-auto flex flex-col justify-center'>
                <div className='text-center mb-20'>
                    <h1 className='sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4'>
                        Projects in Highlight
                    </h1>
                    <div className='flex mt-6 justify-center'>
                        <div className='w-14 h-1 rounded-full bg-indigo-500 inline-flex'></div>
                    </div>
                </div>
                <div className='flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4'>
                    <article className='p-4 md:w-1/3 sm:mb-0 mb-6'>
                        <div className='rounded-lg h-64 overflow-hidden'>
                            <img
                                alt='content'
                                className='object-cover object-center h-full w-full'
                                src='https://dummyimage.com/1203x503'
                            />
                        </div>
                        <h2 className='text-xl font-medium title-font text-gray-900 mt-5'>
                            Shooting Stars
                        </h2>
                        <p className='text-base leading-relaxed mt-2'>
                            Swag shoivdigoitch literally meditation subway tile
                            tumblr cold-pressed. Gastropub street art beard
                            dreamcatcher neutra, ethical XOXO lumbersexual.
                        </p>
                        <a className='text-indigo-500 inline-flex items-center mt-3'>
                            Learn More
                            <svg
                                fill='none'
                                stroke='currentColor'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                className='w-4 h-4 ml-2'
                                viewBox='0 0 24 24'
                            >
                                <path d='M5 12h14M12 5l7 7-7 7'></path>
                            </svg>
                        </a>
                    </article>
                </div>
                <div className='flex justify-center mt-20'>
                    <Link href='/projects'>
                        <a>
                            <button className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-900 rounded text-lg shadow-lg shadow-indigo-500/50'>
                                ALL PROJECTS
                            </button>
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default HProject;
