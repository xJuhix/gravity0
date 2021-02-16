import React from 'react';
import { Helmet } from 'react-helmet';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Heading from '../layout/Heading';
import Felix from '../../images/fw.png';

export function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="Gravity0 is a microsite for NASA"
        />
      </Helmet>

      <div className="explore__buttons">
        <Link to="/marsrover/">
          
          <Button variant="explore" size="lg">
            
            See Mars through Rover's Eyes
          </Button>
        </Link>

				<Link to="/hubbel/">
          
          <Button variant="explore" size="lg">
            
            What is Hubble talking about
          </Button>
        </Link>

				<Link to="/iss/">
          
          <Button variant="explore" size="lg">
            
           Find out who is in space right now
          </Button>
        </Link>

				</div>
				
				<div className="explore__buttons">

				<Link to="/marsrover/">
          
          <Button variant="explore" size="lg">
            
            What is James Webb seeing
          </Button>
        </Link>

				<Link to="/marsrover/">
          
          <Button variant="explore" size="lg">
            
            How are we gonna get to Mars
          </Button>
        </Link>
      </div>

      <h2>Meet Me</h2>

      <div className="about">
        <Row>
          <Col sm={6} md={5} className="about__image">
            <img src={Felix} className="photo" alt="Felix Wittig" />
          </Col>
          <Col sm={6} md={5} className="about__text">
            <h3>Felix Wittig</h3>
            <p>
              Hi friends, my name is Felix and I am a Business
              Administration student based in Germany and I truly
              believe that most of worlds problems can be solved with
              good economics. I also love reading and am an absolute
              productivity nerd.
            </p>
          </Col>
        </Row>
      </div>

      <h2>Recent Articles</h2>
      <div />
    </>
  );
}

export default Home;
