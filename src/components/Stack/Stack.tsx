import React from "react";
import { Frontend, Backend, UxUi } from "../../constants/stack";

function Stack() {
    return (
        <section id='stack' className='text-white body-font sm:h-screen'>
            <div className='container h-full flex flex-col justify-center px-5 py-24 mx-auto'>
                <div className='text-center mb-20'>
                    <h1 className='sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4'>
                        Meine Stacks
                    </h1>
                    <p className='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-600'>
                        Dies sind meine Daily in use Stacks.
                    </p>
                    <div className='flex mt-6 justify-center'>
                        <div className='w-14 h-1 rounded-full bg-indigo-500 inline-flex'></div>
                    </div>
                </div>
                <figure className='flex flex-wrap m-4 justify-center'>
                    <div className='w-2/3 xl:w-1/5 md:w-1/3 p-4'>
                        <figcaption className='shadow-lg shadow-indigo-500/50 bg-indigo-500 p-6 rounded-lg'>
                            <h2 className='text-lg text-white font-medium title-font mb-4'>
                                Frond-End
                            </h2>
                            {Frontend.map((item, index) => (
                                <ul
                                    key={index}
                                    className='leading-relaxed text-base'
                                >
                                    <li>{item}</li>
                                </ul>
                            ))}
                        </figcaption>
                    </div>
                    <div className='w-2/3 xl:w-1/5 md:w-1/3 min-w-175px p-4'>
                        <figcaption className='shadow-lg shadow-indigo-500/50  bg-indigo-500 p-6 rounded-lg'>
                            <h2 className='text-lg text-white font-medium title-font mb-4'>
                                Back-End
                            </h2>
                            {Backend.map((item, index) => (
                                <ul
                                    key={index}
                                    className='leading-relaxed text-base'
                                >
                                    <li>{item}</li>
                                </ul>
                            ))}
                        </figcaption>
                    </div>
                    <div className='w-2/3 xl:w-1/5 md:w-1/3 p-4'>
                        <figcaption className='shadow-lg shadow-indigo-500/50 bg-indigo-500 p-6 rounded-lg'>
                            <h2 className='text-lg text-white font-medium title-font mb-4'>
                                UX/UI
                            </h2>
                            {UxUi.map((item, index) => (
                                <ul
                                    key={index}
                                    className='leading-relaxed text-base'
                                >
                                    <li>{item}</li>
                                </ul>
                            ))}
                        </figcaption>
                    </div>
                </figure>
            </div>
        </section>
    );
}

export default Stack;
