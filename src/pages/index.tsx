import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Stack from "../components/Stack/Stack";
import HProject from "../components/HProject/HProject";
import HBlog from "../components/HBlog/HBlog";
import { getBlogAndPortfolio } from "../lib/data";
import Contact from "../components/Contact/Contact";

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
                <title>Barry`s Dabrowski</title>
            </Head>
            <Hero />
            <About />
            <Stack />
            <HProject projects={data.projects} />
            <HBlog blogs={data.blogs} />
            <Contact />
        </>
    );
};

export default Home;
