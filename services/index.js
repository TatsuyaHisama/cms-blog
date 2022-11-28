import { request , gql } from "graphql-request"

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async()=> {
    const query = gql`
        query MayQuery{
            postsConnection {
                    edges {
                        node {
                            author {
                                id
                                name
                                biography
                                picture {
                                    url
                                }
                            }
                            createdAt
                            slug
                            title
                            excerpt
                            featuredImage {
                                url
                            }
                            category {
                                name
                                slug
                            }
                        }
                    }
                }
            }
        `;
 const result = await request(graphqlAPI, query);

 return result.postsConnection.edges;
};