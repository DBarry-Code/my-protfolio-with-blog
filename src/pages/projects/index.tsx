import React from "react";
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
    console.log(data);
    return (
        <div>
            <h1>Projects</h1>
        </div>
    );
}

export default ProjectPage;
