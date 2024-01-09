import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Search = ({ word, setWord, handleSubmit }) => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Form onSubmit={handleSubmit}>
          <Col xs={6} md={8} lg={6} className="mt-4">
            <Form.Control
              type="text"
              value={word}
              onChange={(e) => setWord(e.target.value)}
              placeholder="Search for new image..."
            />
          </Col>
          <Col xs={6} className="mt-4">
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Col>
        </Form>
      </Row>
    </Container>
  );
};

export default Search;
