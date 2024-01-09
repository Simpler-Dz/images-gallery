import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Welcome = () => {
  const containerStyle = {
    backgroundColor: 'lightgrey',
    margin: '2rem',
    padding: '2rem',
  };
  return (
    <Container style={containerStyle}>
      <h1>Images Gallery</h1>
      <p>
        This is a simple application that retrieves photos using Unspash API.
      </p>
      <div>
        <Button size="" variant="primary" href="https://unsplash.com">
          Learn More
        </Button>
      </div>
    </Container>
  );
};

export default Welcome;
