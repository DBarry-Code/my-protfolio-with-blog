/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { getPostBySlug } from "../../lib/data";

export const getStaticPaths = () => {
    return {
        paths: [],
        fallback: true,
    };
};

export const getServerSideProps = async ({ params }: any) => {
    const data = await getPostBySlug(params.slug);

    return {
        props: {
            data,
        },
    };
};

const Post = ({ data }: any) => {
    const router = useRouter();

    if (router.isFallback) {
        return <p>is Lodding....</p>;
    }
    return (
        <section className='text-gray-600 body-font'>
            <div className='container px-5 py-20 mx-auto flex flex-col'>
                <div className='lg:w-4/6 mx-auto '>
                    <h1 className='text-3xl font-bold sm:pl-8 sm:py-6 sm:mt-0 mb-8 text-center sm:text-left'>
                        {data.blog.title}
                    </h1>
                    <div className='rounded-lg overflow-hidden '>
                        <img
                            className='m-auto'
                            alt={data.blog.title}
                            src={data.blog.image.url}
                        />
                    </div>
                    <div className='flex flex-col sm:flex-row mt-10'>
                        <div className='sm:pl-8 sm:py-8 mt-4 pt-4 sm:mt-0 text-center sm:text-left'>
                            <p className='font-bold'>Date:</p>
                            <p className='italic'>{data.blog.date}</p>
                            <p className='font-bold'>Category:</p>
                            <p className='italic'>{data.blog.category}</p>
                            <p
                                className='leading-relaxed text-lg mb-4 mt-6 mx-auto'
                                dangerouslySetInnerHTML={{
                                    __html: data.blog.article.html,
                                }}
                            ></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mb-4'>
                <Link href='/blog'>
                    <a>
                        <button className='bg-zinc-700 hover:bg-black text-white font-bold py-2 px-4 border border-black rounded'>
                            Back to Blog Site
                        </button>
                    </a>
                </Link>
            </div>
        </section>
    );
};

export default Post;
