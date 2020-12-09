import React from 'react'
import { Navbar, Form,  Button, FormControl } from 'react-bootstrap'

export default function navbar() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">GAIA Gallery</Navbar.Brand>
            
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar>
    )
}
