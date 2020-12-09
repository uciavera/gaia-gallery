import React from 'react'
import { Navbar, Form,  Button, FormControl } from 'react-bootstrap'

export default function navbar() {
    return (
        <Navbar bg="light" expand="lg" style={{ margin: '5px auto'}}>
            <Navbar.Brand href="#home" style={{   }}>GAIA Gallery</Navbar.Brand>
            
            <Form inline style={{  width:'50rem', margin:'8px auto' }}>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{width:'32rem', margin:' auto' }}/>
                <Button style={{   margin:'auto 8px' }} variant="outline-success">Search</Button>
            </Form>
        </Navbar>
    )
}
