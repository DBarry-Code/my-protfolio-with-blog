import { GraphQLClient, gql } from "graphql-request";

export const API_URL: string = process.env.GRAPHCMS_ENDPOINT as string;

export const API_KEY: string = process.env.GRAPHCMS_TOKEN as string;

const graphcms = new GraphQLClient(API_URL, {
    headers: {
        Authorization: API_KEY,
    },
});

export const getBlogAndPortfolio = async () => {
    const query = gql`
        {
            projects(orderBy: date_DESC) {
                id
                slug
                title
                date
                codeLink
                onlineLink
                description
                indev
                highlight
                stack
                image {
                    id
                    url
                    mimeType
                }
            }
            blogs(orderBy: date_DESC) {
                id
                date
                slug
                title
                category
                description
                article {
                    html
                    text
                }
                image {
                    url
                }
            }
        }
    `;

    return await graphcms.request(query);
};

export const getAllBllogs = async () => {
    const query = gql`
        {
            blogs(orderBy: date_DESC) {
                id
                date
                slug
                title
                category
                description
                article {
                    html
                }
                image {
                    url
                }
            }
        }
    `;

    return await graphcms.request(query);
};

export const getAllPorjects = async () => {
    const query = gql`
        {
            projects(orderBy: date_DESC) {
                id
                slug
                title
                date
                codeLink
                onlineLink
                description
                indev
                highlight
                stack
                image {
                    id
                    url
                    mimeType
                }
            }
        }
    `;

    return await graphcms.request(query);
};

export const getBlogSlugs = async () => {
    const query = gql`
        {
            blogs {
                slug
            }
        }
    `;

    return await graphcms.request(query);
};

export const getPostBySlug = async (slug: String) => {
    const query = gql`
        query getPost($slug: String!) {
            blog(where: { slug: $slug }) {
                id
                category
                date
                slug
                title
                description
                article {
                    html
                }
                image {
                    id
                    url
                }
            }
        }
    `;

    const variables = {
        slug,
    };

    return await graphcms.request(query, variables);
};
