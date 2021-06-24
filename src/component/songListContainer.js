import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import { ListGroup } from "react-bootstrap"


const SongListContainer = ({ category }) => {

    const { allMarkdownRemark: { edges } } = useStaticQuery(graphql`
        query homePageQuery {
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

    const [node] = edges;
    const { node: { frontmatter: data } } = node;

    console.log(node, data);

    return (
        <ListGroup>
            {
                data.map((item, index) => {
                    <song song={item} index={index} />
                })
            }
        </ListGroup>
    );

}

const song = ({ song, index }) => {
    const color = (index % 2 === 0) ? "light" : "info";
    const data = `${song.songno}: ${song.title}. Category: ${song.tags}`;
    return (
        <ListGroup.Item variant={color}>{data}</ListGroup.Item>
    );
}

export default SongListContainer;