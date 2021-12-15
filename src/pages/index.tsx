import type { NextPage } from "next";
import Head from "next/head";
import { getBlogAndPortfolio } from "../lib/data";

export const getStaticProps = async () => {
    const data = await getBlogAndPortfolio();
    return {
        props: {
            data,
        },
    };
};

const Home: NextPage = ({ data }: any) => {
    console.log(data);
    return (
        <>
            <Head>
                <title>Barry`s` Portfolio Homepage</title>
                <meta
                    name='description'
                    content='Generated by create next app'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <div className='container px-5 py-20 mx-auto'>
                <h1 className='text-3xl font-bold underline'>Hello world!</h1>
            </div>
        </>
    );
};

export default Home;
