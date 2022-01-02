import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const About = () => {
    return (
        <>
            <section id='about' className='text-gray-600 body-font sm:h-screen'>
                <div className='container px-5 h-full py-24 mx-auto flex flex-col justify-center'>
                    <div className='mx-auto'>
                        <div className='flex flex-col sm:flex-row mt-10'>
                            <div className='flex justify-center sm:w-1/3 text-center sm:pr-8 sm:py-8'>
                                <div className='flex flex-col items-center text-center justify-center'>
                                    <Image
                                        src='/Barry.jpg'
                                        alt='Barry'
                                        width='200'
                                        height='200'
                                        className='rounded-3xl'
                                    />

                                    <h2 className='font-medium title-font mt-4 text-black text-lg'>
                                        Barry Dabrowski
                                    </h2>
                                    <div className='w-12 h-1 bg-black rounded mt-2 mb-2'></div>
                                    <p className='lg:text-lg text-base'>
                                        &#123; Full - Stack Web Developer &#125;
                                    </p>
                                </div>
                            </div>
                            <div className='sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left'>
                                <p className='leading-relaxed text-lg mb-2'>
                                    <b>Hallo,</b>
                                    <br /> ich bin der Barry, ich bin ein Web
                                    Software Entwickler based in Hamburg -
                                    Germany. Ich entwickle Web Applicationen und
                                    benutze meist den MERN Stack, meine vorliebe
                                    liegt in der React/Next.js - CRM mit
                                    GrarphQL gestützten Entwicklung. Eine
                                    Übersicht meiner verwendenten Stacks findet
                                    Ihr hier:
                                </p>
                                <Link href='/#stack'>
                                    <a className='text-indigo-500 font-bold inline-flex items-center mb-4 hover:text-indigo-900'>
                                        Meine Stacks
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
                                <br />
                                <p className='leading-relaxed text-lg mb-2'>
                                    Einer meine Favorieten ist das vorbilden im
                                    bereich coden sowie hardware. Ich
                                    Unterrichte gern auch Kinder in der
                                    Web-Entwicklung um Begeisterung so wie
                                    Talente zu finden und hier Potenzail
                                    aufzugeigen.
                                </p>
                                <br />
                                <p className='leading-relaxed text-lg mb-2'>
                                    Um euch meine Potenzial aufzuzeigen hab ich
                                    diese Perönliche Protfoilio mit Next.js
                                    Tailwind und GraphCRM erstell. Hier finde
                                    ihr all meine Projeckte die Online sind und
                                    den Code auf Github. ein Blog gibt es auch
                                    hier werde ich versiedene Artickel Posten
                                    zum thema IT / Webentwicklung sowie Day - in
                                    - Life eines Webentwicklers.
                                </p>
                                <Link href='/#project'>
                                    <a className='text-indigo-500 font-bold inline-flex items-center mb-4 hover:text-indigo-900'>
                                        Project Highlights
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
                                <br />
                                <p className='leading-relaxed text-lg mb-2'>
                                    In meinen Blogs werde ich versiedene Artikel
                                    Posten zum Thema IT / Webentwicklung sowie
                                    Day - in - Life eines Webentwicklers.
                                </p>
                                <Link href='/#blog'>
                                    <a className='text-indigo-500 font-bold inline-flex items-center mb-4 hover:text-indigo-900'>
                                        Blog Highlights
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
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
