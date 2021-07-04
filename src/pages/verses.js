// Step 1: Import your component
import * as React from 'react'
import Layout from "../component/layout";

import VerseListContainer from "../component/verseListContainer";

// Step 2: Define your component
const VersesPage = () => {
    return (
        <Layout pageInfo={{ pageTitle: "Verses", pageName: "verses" }} >
            <VerseListContainer />
        </Layout>
    )
}
// Step 3: Export your component
export default VersesPage