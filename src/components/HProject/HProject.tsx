/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

function HProject({ projects }: any) {
    const items = projects.filter((project: any) => project.highlight === true);

    return (
        <section id='project' className='text-gray-600 body-font sm:h-screen'>
            <div className='container h-full px-5 py-24 mx-auto flex flex-col justify-center'>
                <div className='text-center mb-10'>
                    <h1 className='sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4'>
                        Projects in Highlight
                    </h1>
                    <div className='flex mt-6 justify-center'>
                        <div className='w-14 h-1 rounded-full bg-indigo-500 inline-flex'></div>
                    </div>
                </div>
                <div className='flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4'>
                    {items.map((item: any) => (
                        <article
                            key={item.id}
                            className='p-4 md:w-1/3 sm:mb-0 mb-6'
                        >
                            <div className='rounded-lg overflow-hidden shadow-lg shadow-gray-300	'>
                                <img
                                    alt={item.title}
                                    className='object-cover object-center h-full w-full'
                                    src={item.image.url}
                                />
                            </div>

                            <h2 className='text-xl font-medium title-font text-gray-900 mt-5'>
                                {item.title}
                            </h2>
                            <p className='font-bold'>Date:</p>
                            <p className='italic mb-8'>{item.date}</p>
                            <p className='text-base leading-relaxed mt-2'>
                                {item.description}
                            </p>
                            <div className='flex justify-between items-center flex-wrap pb-4 mb-2 mt-4 w-full'>
                                <div>
                                    <Link href={item.codeLink}>
                                        <a target='_blank'>
                                            <button className='bg-zinc-700 hover:bg-black text-white font-bold py-2 px-4 border border-black rounded'>
                                                Code
                                            </button>
                                        </a>
                                    </Link>
                                </div>
                                <div>
                                    <Link href={item.onlineLink}>
                                        <a target='_blank'>
                                            <button className='bg-zinc-700 hover:bg-black text-white font-bold py-2 px-4 border border-black rounded'>
                                                Live
                                            </button>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
                <div className='flex justify-center mt-5'>
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
