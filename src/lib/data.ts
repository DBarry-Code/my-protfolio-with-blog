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
                title
                slug
                stack
                date
                image {
                    url
                }
                description {
                    html
                    text
                }
            }
            blogs(orderBy: date_DESC) {
                id
                date
                slug
                title
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

export const getAllPorjects = async () => {
    const query = gql`
        {
            projects(orderBy: date_DESC) {
                id
                title
                slug
                stack
                date
                image {
                    url
                }
                description {
                    html
                    text
                }
            }
        }
    `;

    return await graphcms.request(query);
};
