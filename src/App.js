import logo from './logo.svg';
import './App.css';
import Page from './components/page/Page';
import Navbar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Container} from 'react-bootstrap'

function App() {
  return (
    <Container>
      
      <Navbar/>
      
      
      <Page/>
      
    </Container>
    
  );
}

export default App;
