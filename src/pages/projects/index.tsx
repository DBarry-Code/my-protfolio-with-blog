/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { getAllPorjects } from "../../lib/data";

export const getStaticProps = async () => {
    const data = await getAllPorjects();
    return {
        props: {
            data,
        },
    };
};

function ProjectPage({ data }: any) {
    return (
        <section className='text-gray-600 body-font overflow-hidden'>
            <div className='container h-full px-5 py-24 mx-auto'>
                <h1 className='text-3xl font-bold text-gray-900 title-font mt-4 mb-10'>
                    Projects
                </h1>
                <div className='flex flex-wrap -m-12'>
                    {data.projects.map((project: any) => (
                        <article
                            key={project.id}
                            className='p-12 md:w-1/2 flex flex-col items-start'
                        >
                            <div className='rounded-lg overflow-hidden'>
                                <img
                                    alt={project.slug}
                                    className='object-contain object-center h-full w-full'
                                    src={project.image.url}
                                />
                            </div>
                            <div className='flex mt-2'>
                                {project.stack.map(
                                    (item: string, index: number) => (
                                        <span
                                            key={index}
                                            className='inline-block py-1 px-2 mr-1 my-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest'
                                        >
                                            {item}
                                        </span>
                                    )
                                )}
                            </div>
                            <h2 className='sm:text-3xl text-2xl title-font font-medium text-gray-900 mb-4 mt-4'>
                                {project.title}
                            </h2>
                            <p className='font-bold'>Date:</p>
                            <p className='italic mb-8'>{project.date}</p>
                            <p className='leading-relaxed mb-8'>
                                {project.description}
                            </p>
                            <div className='flex justify-between  items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full'>
                                <div>
                                    <Link href={project.codeLink}>
                                        <a target='_blank'>
                                            <button className='bg-zinc-700 hover:bg-black text-white font-bold py-2 px-4 border border-black rounded'>
                                                Code
                                            </button>
                                        </a>
                                    </Link>
                                </div>
                                <div>
                                    <Link href={project.onlineLink}>
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
            </div>
        </section>
    );
}

export default ProjectPage;
