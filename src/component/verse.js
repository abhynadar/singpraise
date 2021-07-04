import React from 'react';
import { Col, Card, Row } from "react-bootstrap"


const Verse = ({ verse, index }) => {
    // console.log(verse);
    const { node: { frontmatter: verseData } } = verse;
    // console.log(verseData);
    const color = (index % 2 === 0) ? "light" : "info";
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>

    );
}

export default Verse;