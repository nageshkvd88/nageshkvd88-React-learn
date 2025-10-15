import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';  
import MainMenu from './MainMenu';

const logo = '../images/logo.jpg';  

const Header = () => {
  return (
    <>
        <header>
            <Container className='py-2'>
                <Row className='align-items-center'>
                    <Col xs={3} md={3} lg={2}>
                        <img src={logo} alt='logo' className='logo img-fluid' />
                    </Col>
                    <Col xs={{ span: 3, offset: 6 }} md={{ span: 6, offset: 3 }} lg={{ span:6, offset: 4 }}>
                      <MainMenu />
                    </Col>
                </Row>
            </Container>
        </header>
    </>
  )
}

export default Header