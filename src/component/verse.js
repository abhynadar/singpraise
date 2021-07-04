import React from 'react';
import { Card } from "react-bootstrap"


const Verse = ({ verse, index }) => {
    // console.log(verse);
    const { node: { frontmatter: verseData } } = verse;
    console.log(verseData);
    const color = (index % 2 === 0) ? "light" : "info";
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{verseData.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{verseData.tags}</Card.Subtitle>
                <Card.Text>
                    {verseData.content}
                </Card.Text>
            </Card.Body>
        </Card>

    );
}

export default Verse;