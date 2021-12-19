/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

function HBlog({ blogs }: any) {
    return (
        <section id='blog' className='text-gray-600 body-font sm:h-screen'>
            <div className='container px-5 py-24 mx-auto h-full flex flex-col justify-center'>
                <div className='text-center mb-20'>
                    <h1 className='sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4'>
                        Blogs im Highlight
                    </h1>
                    <div className='flex mt-6 justify-center'>
                        <div className='w-16 h-1 rounded-full bg-indigo-500 inline-flex'></div>
                    </div>
                </div>
                <div className='flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6'>
                    {blogs
                        .filter((item: any, index: number) => index < 3)
                        .map((blog: any) => (
                            <article
                                key={blog.id}
                                className='p-4 md:w-1/3 flex flex-col text-center items-center'
                            >
                                <div className='inline-flex items-center justify-center mb-5 flex-shrink-0'>
                                    <img
                                        src={blog.image.url}
                                        alt={blog.slug}
                                        className='rounded-lg object-cover object-center w-1/2'
                                    />
                                </div>
                                <div className='flex-grow text-left'>
                                    <h2 className='text-gray-900 text-lg title-font font-medium mb-3'>
                                        {blog.title}
                                    </h2>
                                    <p className='font-bold'>Date:</p>
                                    <p className='italic'>{blog.date}</p>
                                    <p className='font-bold'>Category:</p>
                                    <p className='italic'>{blog.category}</p>
                                    <p className='leading-relaxed mt-3'>
                                        {blog.description}
                                    </p>
                                    <Link
                                        href={`
                                        /blog/${blog.slug}
                                    `}
                                    >
                                        <a className='mt-3 text-indigo-500 inline-flex items-center '>
                                            Read More
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
                                    </Link>
                                </div>
                            </article>
                        ))}
                </div>
                <div className='flex justify-center mt-20'>
                    <Link href='/blog'>
                        <a>
                            <button className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-900 rounded text-lg shadow-lg shadow-indigo-500/50'>
                                ALL BLOGS
                            </button>
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default HBlog;
