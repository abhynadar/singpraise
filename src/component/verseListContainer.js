
import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import VerseList from "./verseList";

const VerseListContainer = ({ category }) => {

    const { allMarkdownRemark: { edges: data } } = useStaticQuery(graphql`
        query verseQuery {
            allMarkdownRemark(
                filter: {fileAbsolutePath: {regex: "/verses/"}}
            ) { 
                edges {
                    node {
                        frontmatter {
                            tags
                            title
                            content
                        }
                        id
                    }
                }
            }
        }
    `);

    console.log(data);
    if (!data || !data.length) return null;

    return (
        <VerseList data={data} />
    );

}

export default VerseListContainer;