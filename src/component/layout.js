import * as React from 'react'
import { Link } from 'gatsby'
import { Helmet } from "react-helmet"
import { container, content } from './layout.module.css'
import '../styles/style.scss';
import CustomNav from './navbar';


const Layout = ({ pageInfo, children }) => {
    return (
        <main className={container}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{pageInfo.pageTitle || "Sing Praise"}</title>
            </Helmet>
            <CustomNav pageInfo={pageInfo} />
            {/* <h1>{pageInfo.pageTitle}</h1> */}
            <div className={content} >
                {children}
            </div>
        </main>
    )
}
export default Layout