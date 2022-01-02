import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInputs {
    name: string;
    email: string;
    message: string;
}

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<IFormInputs>();

    const onSubmit: SubmitHandler<IFormInputs> = async (data, e: any) => {
        const check = prompt("Wie lautet deine Email?");

        if (check?.toLocaleLowerCase() !== data.email) {
            e.target.reset();
            alert(`Sorry ${check} war nicht deine Email!`);
            return;
        }
        const response = await fetch(
            "https://formsubmit.co/ajax/03527b1176e86a52253564a006b47e2f",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    message: data.message,
                }),
            }
        );

        const backData = await response.json();

        if (backData.success === !true) {
            alert(
                `Sorry ${data.name}, da ist ein fehler... Deine Nachricht wurde LEIDER NICHT VERSENDET!!!`
            );
            return;
        }
        alert(`Danke ${data.name} deine Nachricht wurde versendet`);

        e.target.reset();
    };

    return (
        <section
            id='contact'
            className='text-gray-600 body-font sm:h-screen sm:-mb-24'
        >
            <div className='container h-full px-5 py-24 mx-auto flex flex-col justify-center'>
                <div className='flex flex-col text-center w-full mb-12'>
                    <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
                        Contact Me
                    </h1>
                    <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
                        Send mir eine Message. Ich melde mich zeitnah zurück.
                    </p>
                </div>
                <form
                    className='lg:w-1/2 md:w-2/3 mx-auto'
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className='flex flex-wrap -m-2'>
                        <div className='p-2 w-1/2'>
                            <div className='relative'>
                                <label className='leading-7 text-sm text-gray-600'>
                                    Name
                                </label>
                                <input
                                    type='text'
                                    {...register("name", { required: true })}
                                    className={`${
                                        errors.name
                                            ? "ring-2 ring-red-500"
                                            : null
                                    } w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 
                                    focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out 
                                     `}
                                />

                                <p className='text-red-500'>
                                    {errors.name?.type === "required" &&
                                        "Name is required"}
                                </p>
                            </div>
                        </div>
                        <div className='p-2 w-1/2'>
                            <div className='relative'>
                                <label className='leading-7 text-sm text-gray-600'>
                                    Email
                                </label>
                                <input
                                    type='email'
                                    {...register("email", {
                                        required: true,
                                        pattern:
                                            /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                                    })}
                                    className={`${
                                        errors.name
                                            ? "ring-2 ring-red-500"
                                            : null
                                    } w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2
                                        focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                                />
                                <p className='text-red-500'>
                                    {errors.email?.type === "pattern" &&
                                        "Email is invalid"}
                                </p>
                                <p className='text-red-500'>
                                    {errors.email?.type === "required" &&
                                        "Email is required"}
                                </p>
                            </div>
                        </div>
                        <div className='p-2 w-full'>
                            <div className='relative'>
                                <label className='leading-7 text-sm text-gray-600'>
                                    Message
                                </label>
                                <textarea
                                    id='message'
                                    {...register("message", { required: true })}
                                    className={`${
                                        errors.message
                                            ? "ring-2 ring-red-500"
                                            : null
                                    } w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-
                                     focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out`}
                                ></textarea>
                                <p className='text-red-500'>
                                    {errors.message?.type === "required" &&
                                        "Message is required"}
                                </p>
                            </div>
                        </div>
                        <div className='p-2 w-full flex justify-center'>
                            <button
                                type='submit'
                                className='ml-4 inline-flex text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-800 rounded text-lg shadow-lg shadow-green-500/50'
                            >
                                Send Message
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;
