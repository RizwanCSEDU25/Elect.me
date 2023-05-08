import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

//const Home = () => {
  //return (
    //<div>home</div>
  //)
//}


function Home() {
  return (
    <Container className="container">
      <Row className="text-center mt-4">
        <Col>
          <h1>Welcome to Voting App</h1>
          <p>The easiest way to create and participate in polls</p>
        </Col>
      </Row>
      <Row className="text-center mt-4">
        <Col>
          <Card className="border-0">
            <Card.Body>
              <Card.Title>100+</Card.Title>
              <Card.Text>Polls created</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="border-0">
            <Card.Body>
              <Card.Title>500+</Card.Title>
              <Card.Text>Votes casted</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="border-0">
            <Card.Body>
              <Card.Title>50+</Card.Title>
              <Card.Text>Users registered</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="text-center mt-4">
        <Col md={6}>
          <h3>What our users say</h3>
          <p>"Voting App is awesome! I can create polls easily and share them with my friends."</p>
          
          <p>"I love Voting App! It's fun and simple to use. I can vote on different topics and see the results instantly."</p>
          
        </Col>
        <Col md={6}>
          <h3>Why choose Voting App</h3>
          <ul className="list-unstyled">
            <li> It's free and easy to use</li>
            <li> It's secure and reliable</li>
            <li> It's responsive and mobile-friendly</li>
            <li> It's customizable and flexible</li>
            <li> It's fun and engaging</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;