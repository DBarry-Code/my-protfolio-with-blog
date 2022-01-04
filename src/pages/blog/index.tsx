import React from "react";
import Link from "next/link";
import { getAllBllogs } from "../../lib/data";

export const getServerSideProps = async () => {
    const data = await getAllBllogs();
    return {
        props: {
            data,
        },
    };
};

const BlogPage = ({ data }: any) => {
    return (
        <section className='text-gray-600 body-font overflow-hidden'>
            <div className='container px-5 py-24 mx-auto'>
                <div className='-my-8 divide-y-2 divide-gray-100'>
                    <h1 className='text-3xl font-bold text-gray-900 title-font mt-4 mb-4'>
                        Blogs
                    </h1>
                    {data.blogs.map((post: any) => (
                        <article
                            key={post.id}
                            className='py-8 flex flex-wrap md:flex-nowrap'
                        >
                            <div className='md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col'>
                                <span className='font-semibold title-font text-gray-700'>
                                    {post.category}
                                </span>
                                <span className='mt-1 text-gray-500 text-sm'>
                                    {post.date}
                                </span>
                            </div>
                            <div className='md:flex-grow'>
                                <h2 className='text-2xl font-medium text-gray-900 title-font mb-2'>
                                    {post.title}
                                </h2>
                                <p className='leading-relaxed'>
                                    {post.description}
                                </p>
                                <Link href={`/blog/${post.slug}`}>
                                    <a className='text-indigo-500 inline-flex items-center mt-4 hover:text-indigo-900'>
                                        Read More
                                        <svg
                                            className='w-4 h-4 ml-2'
                                            viewBox='0 0 24 24'
                                            stroke='currentColor'
                                            strokeWidth='2'
                                            fill='none'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                        >
                                            <path d='M5 12h14'></path>
                                            <path d='M12 5l7 7-7 7'></path>
                                        </svg>
                                    </a>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogPage;
