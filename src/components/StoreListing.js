import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import '../App.css';

function StoreListing() {
    return (
        <Container style={{ marginTop: "40px", textAlign: "center" }}>
            <h2>Browse stores in NYC</h2>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Image fluid src="costco-logo.png" className="logos"></Image>
                            <Card.Title>Costco</Card.Title>
                            <Card.Text>Delivery</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Body>
                            <Image fluid Src="superfresh-logo.png" className="logos"></Image>
                            <Card.Title>SuperFresh</Card.Title>
                            <Card.Text>Delivery</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Body>
                            <Image fluid src="shop-rite-logo.png" className="logos"></Image>
                            <Card.Title>ShopRite</Card.Title>
                            <Card.Text>Delivery</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Image fluid src="wegmans-logo.png" className="logos"></Image>
                            <Card.Title>Wegmans</Card.Title>
                            <Card.Text>Delivery</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Body>
                            <Image fluid src="food-bazaar-logo.png" className="logos"></Image>
                            <Card.Title>Food Bazaar</Card.Title>
                            <Card.Text>Delivery</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Body>
                            <Image fluid src="aldi-logo.png" className="logos"></Image>
                            <Card.Title>ALDI</Card.Title>
                            <Card.Text>Delivery</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default StoreListing;