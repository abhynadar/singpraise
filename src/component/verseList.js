import React from 'react';
import Verse from './verse';
import { Container } from "react-bootstrap"

const VerseList = ({ data }) => {
    console.log('VerseList', data);
    return (
        <Container fluid="md">
            {
                data.map((item, index) =>
                    <Verse verse={item} index={index} key={index} />
                )
            }
        </Container>
    )
}

export default VerseList;