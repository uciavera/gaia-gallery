import logo from './logo.svg';
import './App.css';
import Page from './components/page/Page';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Container} from 'react-bootstrap';
import React, {useState} from 'react'
import { FaTags } from 'react-icons/fa';

function App() {
  
  return (
    <Container>
      
      <Page />
    </Container>
    
  );
}

export default App;
