import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import SongList from "./songList";

const SongListContainer = ({ category }) => {

    const { allMarkdownRemark: { edges: data } } = useStaticQuery(graphql`
        query songQuery {
            allMarkdownRemark(
                filter: {fileAbsolutePath: {regex: "/songs/"}}
            ) { 
                edges {
                    node {
                        frontmatter {
                            tags
                            title
                            songno
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
        <SongList data={data} />
    );

}

export default SongListContainer;