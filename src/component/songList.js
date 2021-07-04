import React from 'react';
import Song from './song';
import { ListGroup } from "react-bootstrap"

const SongList = ({ data }) => {
    // console.log('SongList', data);
    return (
        <ListGroup>
            {
                data.map((item, index) =>
                    <Song song={item} index={index} key={index} />
                )
            }
        </ListGroup>
    )
}

export default SongList;