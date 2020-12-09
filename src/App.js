import logo from './logo.svg';
import './App.css';
import Page from './components/page/Page';
import Navbar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Container} from 'react-bootstrap'

function App() {
  return (
    <Container>
      <Row>
      <Navbar/>
      </Row>
      <Row>
      <Page/>
      </Row>
    </Container>
    
  );
}

export default App;
