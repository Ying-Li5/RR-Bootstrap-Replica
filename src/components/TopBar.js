import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function TopBar() {
  return (
    <Navbar expand="lg">
      <Container>
         <Navbar.Brand style={{margin: "5px 0 0 20px"}} href="#home">
            <img 
                src="instacart_carrot.png"
                width="30"
                height="30"
                className="logo" 
                />{' '} 
                Instacart
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse >
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}>
          </Nav>

          <Button variant="light" className='log-in'>Log In</Button>
          <Button variant="success" className='sign-up'>Sign Up</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopBar;