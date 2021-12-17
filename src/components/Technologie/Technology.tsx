import React from "react";

const Technologie = () => {
    return (
        <div className='flex flex-wrap m-4 justify-center'>
            <div className='xl:w-1/6 md:w-1/4 p-4'>
                <div className='bg-gray-100 p-6 rounded-lg'>
                    <h2 className='text-lg text-gray-900 font-medium title-font mb-4'>
                        Frond-End
                    </h2>
                    <ul className='leading-relaxed text-base'>
                        <li>React</li>
                        <li>Next.js</li>
                        <li>Vue</li>
                        <li>jQuery</li>
                        <li>javaScript</li>
                        <li>HTML</li>
                        <li>SASS / SCSS</li>
                    </ul>
                </div>
            </div>
            <div className='xl:w-1/6 md:w-1/4 p-4'>
                <div className='bg-gray-100 p-6 rounded-lg'>
                    <h2 className='text-lg text-gray-900 font-medium title-font mb-4'>
                        Back-End
                    </h2>
                    <ul className='leading-relaxed text-base'>
                        <li>NodeJS</li>
                        <li>ExpressJS</li>
                        <li>Firebase</li>
                        <li>CRM</li>
                        <li>Postsql</li>
                        <li>MongoDB</li>
                        <li>Socket.IO</li>
                    </ul>
                </div>
            </div>
            <div className='xl:w-1/6 md:w-1/4 p-4'>
                <div className='bg-gray-100 p-6 rounded-lg'>
                    <h2 className='text-lg text-gray-900 font-medium title-font mb-4'>
                        UX/UI
                    </h2>
                    <ul className='leading-relaxed text-base'>
                        <li>Adobe XD</li>
                        <li>Ilustarator</li>
                        <li>Figam</li>
                        <li>Gimp</li>
                        <li>Bootstrap</li>
                        <li>Tailwind</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Technologie;
