// Step 1: Import your component
import * as React from 'react'
import Layout from "../component/layout";
import SongListContainer from "../component/songListContainer";


// Step 2: Define your component
const SongsPage = () => {
    return (
        <Layout pageInfo={{ pageTitle: "Songs", pageName: "songs" }} >
            <SongListContainer />
        </Layout>
    )
}
// Step 3: Export your component
export default SongsPage