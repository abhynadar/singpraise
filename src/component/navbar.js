import * as React from 'react'
import { Link } from 'gatsby'

import { Navbar, Nav } from "react-bootstrap"

const CustomNav = ({ pageInfo }) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Link to="/" className="link-no-style">
                <Navbar.Brand href="#home">Sing Praise</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav activeKey={pageInfo && pageInfo.pageName}>
                    <Link to="/" className="link-no-style">
                        <Nav.Link href="/" eventKey="home">Home</Nav.Link>
                    </Link>
                </Nav>
                <Nav activeKey={pageInfo && pageInfo.pageName}>
                    <Link to="/songs" className="link-no-style">
                        <Nav.Link href="/songs" eventKey="songs">Songs</Nav.Link>
                    </Link>
                </Nav>
                <Nav activeKey={pageInfo && pageInfo.pageName}>
                    <Link to="/verses" className="link-no-style">
                        <Nav.Link href="/verses" eventKey="verses">Verses</Nav.Link>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default CustomNav;