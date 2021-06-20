import * as React from 'react'
import { Link } from 'gatsby'
import { container } from './layout.css'

// styles
const pageStyles = {
    color: "#232129",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
}
const headingAccentStyles = {
    color: "#663399",
}


const Layout = ({ pageTitle, children }) => {
    return (
        <main className="container">
            <title>{pageTitle}</title>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <h1>{pageTitle}</h1>
            {children}
        </main>
    )
}
export default Layout