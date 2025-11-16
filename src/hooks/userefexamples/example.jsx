import React, {useEffect, useState, useRef} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 

const UserefExample = () => {

    const [fname, setFname] = useState('');
    const renderCount = useRef(1);

    useEffect(()=>{
      renderCount.current = renderCount.current + 1;
    })

  return (
    <>
    <Container>
    <h1>Use Ref Example</h1>
    <Row>
        <Col md={12} className='mb-3'>
            <input type="text" placeholder="Enter text here" className='form-control' name='fname' id="fname" onChange={(e)=>setFname(e.target.value)} />
        </Col>
       <Col md={12} className='mb-3'>
        <h6>User Typed : {fname}</h6>
        </Col>
         <Col md={12} className='mb-3'>
        <h6>Component Rendered Count : {renderCount.current}</h6>
         </Col>
    </Row>
    </Container>
    </>
  )
}

export default UserefExample