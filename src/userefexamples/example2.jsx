import React, {useState, useEffect, useRef} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
const UserefExamples = () => {
    const [fname, setFname] = useState('');
    const InputDom = useRef('');
    useEffect(() => {
        console.log(InputDom);
    })
    const focus = () => {
        InputDom.current.focus();
    }
  return (
   <>
     <Container>
    <h1>Use Ref Example</h1>
    <Row>
        <Col md={12} className='mb-3'>
            <input type="text"  ref={InputDom} placeholder="Enter text here" className='form-control' name='fname' id="fname" onChange={(e)=>setFname(e.target.value)} />
        </Col>
       <Col md={12} className='mb-3'>
        <h6>User Typed : {fname}</h6>
        </Col>
         <Col md={12} className='mb-3'>
        {/* <h6>Component Rendered Count : {renderCount.current}</h6> */}
         </Col>
         <button type='button' className='btn btn-primary btn-md' onClick={focus}>Focus</button>
    </Row>
    </Container>
   </>
  )
}

export default UserefExamples