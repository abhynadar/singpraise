import * as React from "react"
import Layout from "../component/layout";

// styles
const headingStyles = {
  marginTop: 0,
}
const headingAccentStyles = {
  color: "#663399",
}

// markup
const IndexPage = () => {
  return (
    <Layout pageInfo={{ pageTitle: "", pageName: "home" }} >
      <h1 style={headingStyles}>
        <span style={headingAccentStyles}> Therefore I will give thanks to You among the nations, O Lord, And I will sing praises to Your name. </span> <i>Psalm 18:49</i>
      </h1>
    </Layout>
  )
}

export default IndexPage
