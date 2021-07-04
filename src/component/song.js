import React from 'react';
import { Col, ListGroup, Row } from "react-bootstrap"


const Song = ({ song, index }) => {
    // console.log(song);
    const { node: { frontmatter: songData } } = song;
    // console.log(songData);
    const color = (index % 2 === 0) ? "light" : "info";
    return (
        <ListGroup.Item variant={color}>
            <Row>
                <Col sm={1} >{songData.songno}</Col>
                <Col sm={7} >{songData.title}</Col>
                <Col sm={4}>{songData.tags}</Col>
            </Row>
        </ListGroup.Item>
    );
}

export default Song;