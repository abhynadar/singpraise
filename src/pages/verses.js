// Step 1: Import your component
import * as React from 'react'
import Layout from "../component/layout";

import Button from 'react-bootstrap/Button';

// Step 2: Define your component
const VersesPage = () => {
    return (
        <Layout pageInfo={{ pageTitle: "Verses", pageName: "verses" }} >
            Hi there, I'm the proud creator of this site, which I built with Gatsby.
            <Button variant="info" >Fake Button</Button>
        </Layout>
    )
}
// Step 3: Export your component
export default VersesPage