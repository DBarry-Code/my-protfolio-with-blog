import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Stack from "../components/Stack/Stack";
import HProject from "../components/HProject/HProject";
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
    return (
        <>
            <Head>
                <html lang='de' />
                <title>Barry`s` Portfolio Homepage</title>
                <meta
                    name='description'
                    content='Generated by create next app'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Hero />
            <About />
            <Stack />
            <HProject />
        </>
    );
};

export default Home;
