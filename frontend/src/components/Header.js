import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/logo.svg';

const navbarStyle = {
  backgroundColor: 'lightgrey',
};

const Header = (props) => {
  return (
    <Navbar style={navbarStyle} data-bs-theme="light">
      <Container>
        <Logo style={{ maxWidth: '20rem', maxHeight: '5rem' }} />
      </Container>
    </Navbar>
  );
};

export default Header;
