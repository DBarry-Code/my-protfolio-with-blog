import React from "react";
import Link from "next/link";
import { getAllBllogs } from "../../lib/data";

export const getStaticProps = async () => {
    const data = await getAllBllogs();
    return {
        props: {
            data,
        },
    };
};

const BlogPage = ({ data }: any) => {
    console.log(data);
    return (
        <section>
            <div className='container px-4 py-16 mx-auto'>
                <div className='mb-10 border-t border-b divide-y'>
                    {data.blogs.map((post: any) => (
                        <article
                            key={post.id}
                            className='grid py-8 sm:grid-cols-4'
                        >
                            <div className='mb-4 sm:mb-0'>
                                <div className='space-y-1 text-xs font-semibold tracking-wide uppercase'>
                                    <p className='text-gray-600'>{post.date}</p>
                                </div>
                            </div>
                            <div className='sm:col-span-3 lg:col-span-2'>
                                <div className='mb-3'>
                                    <Link href={`/blog/${post.slug}`}>
                                        <a
                                            aria-label='Article'
                                            className='inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700'
                                        >
                                            <p className='text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl'>
                                                {post.title}
                                            </p>
                                        </a>
                                    </Link>
                                </div>
                                <p className='text-gray-700'>
                                    {post.article.text}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogPage;
