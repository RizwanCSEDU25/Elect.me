import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Help() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Help</h1>
          <p>Welcome to the voting app! Here you can find some useful information on how to use the app and get answers to some common questions.</p>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Header>Frequently Asked Questions</Card.Header>
            <Card.Body>
              <Card.Text>
                <ul>
                  <li>How do I create a poll?</li>
                  <p>To create a poll, you need to sign in with your email and password. Then click on the "Create Poll" button on the homepage and fill out the form with your poll question and options.</p>
                  <li>How do I vote on a poll?</li>
                  <p>To vote on a poll, you need to sign in with your Voter ID and Election ID. Then go to the specific poll you want to vote on. Click on the poll and select one of the options. You can only vote once per poll.</p>
                  <li>How do I see the results of a poll?</li>
                  <p>To see the results of a poll, you need to sign in with your email and password. Then browse the polls on the Dashboard. Click on the poll you want to see the results of and you will see the result.</p>
                </ul>  
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>How to Use the App</Card.Header>
            <Card.Body>
              <Card.Text>
                <ol>
                  <li>Sign up with your email and password or sign in if you already have an account.</li>
                  <li>Create a new poll by clicking on the "Create Poll" button on the homepage and filling out the form.</li>
                  <li>Vote on existing polls by going through your Dashboard</li>
                  <li>See the results of polls by clicking on them and viewing the chart.</li>
                </ol>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
        <Card>
            <Card.Header>Contact Us</Card.Header>
            <Card.Body>
              <Card.Text>
                <ul>
                <li><a href="mailto:elect.me5160@gmail.com" >Email: elect.me5160@gmail.com</a></li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
    </Container>
  );
}

export default Help;