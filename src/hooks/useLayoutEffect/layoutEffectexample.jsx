import React, {useState, useRef, useEffect, useLayoutEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
const LayoutEffectexample = () => {
    const [count, setCount] = useState(0);
    const divRef = useRef();
    useEffect(()=>{
        console.log('Use Effect - Render Phase');
        divRef.current.style.color = count%2 === 0 ? 'green' : 'blue';
    },[count]);

     useLayoutEffect(()=>{
        console.log('Use LayoutEffect - Render Phase');
        setTimeout(()=>{
          divRef.current.style.color = count%2 === 0 ? 'Red' : 'purple';   
        },5000);
    },[count])
  return (
    <Container>
        <Row>
            <Col md={6} className='mb-3'>
            <h2 ref= {divRef}> Count : {count} </h2>  
            <button  className='btn btn-primary btn-md' onClick={()=>setCount( count + 1)}>Incerement</button>
            </Col>
        </Row>
        <p>UseEffect: Always Excute After compone Render</p>
         <p>UseLayoutEffect: Always Excute Before compone Render</p>
    </Container>
  )
}

export default LayoutEffectexample