import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import '../App.css';

function MiddleCard() {
  return (
    <Container className='middle-container'>
        <Card className="middle-card">
          <div className='middle-pic-container'>
            <img src='middle-pic.png' className='middle-pic' />
          </div>
          <Card.ImgOverlay>
            <div className='middle-text'>
              <Card.Title className='middle-title'>Order groceries for delivery or pickup today</Card.Title>
                <Card.Text className='middle-body'>
                    Whatever you want from local stores, brought right to your door.
              </Card.Text>
            </div>
          </Card.ImgOverlay>
        </Card>
    </Container>
  );
}

export default MiddleCard;