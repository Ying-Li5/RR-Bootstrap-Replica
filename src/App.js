import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';
import TopBar from './components/TopBar';
import StoreListing from './components/StoreListing';
import MiddleCard from './components/MiddleCard';

function App() {
  console.log("inside of app")
  return (
    <div className="App">
      <Container>
        <TopBar />
        <MiddleCard />
        <StoreListing />
      </Container>
    </div>
  );
}

export default App;