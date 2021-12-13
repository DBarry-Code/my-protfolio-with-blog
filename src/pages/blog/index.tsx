import React from "react";
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
        <div>
            <h1>Blog</h1>
        </div>
    );
};

export default BlogPage;
