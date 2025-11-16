import React, { useRef, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
const UserefExamp = () => {
    const [error, setError] = useState('')
    const fname = useRef('');
    const mob = useRef('');
    const frmSubmitHandle = (e) =>{
        e.preventDefault();
        const mnum = mob.current.value
        if(mnum.length === 10){
            setError('Mobile number must be 10 digits')
        }else{
            setError('mobile number required')
        }
    }
  return (
   <Container className='py-5'>
    <form onSubmit={frmSubmitHandle}>
    <Row>
        <Col md={4} className='mb-3'>
            <input type='text' className='form-control' placeholder='First Name' name='fname' ref={fname} /> 
        </Col>
         <Col md={4} className='mb-3'>
            <input type='number' className='form-control' placeholder='Mobile NUmber' name='mobile' ref={mob} /> 
            <p className='text-danger'>{error.length > 0 && error}</p>
        </Col>
        <Col md={4} className='mb-3'>
        <button type='submit' className='btn btn-primary btn-md'>Submit</button>
        </Col>
        <p>Controlled components :in a controlled components react maintain the form element(inpt, textarea, checkbox, slectdropdown, radiobutton..etc) values via state. </p>
        <p>UnControlled components : in a uncontrolled component the form element maintain it's own  intenal state by using the form values get through UuseRef.  </p>
    </Row>
    </form>
   </Container>
  )
}

export default UserefExamp