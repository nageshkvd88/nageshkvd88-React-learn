import React,{useMemo, useState} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 

const Memoexample = () => {
    const [count,setCount]=useState(0);
    const [isActive, setisActive] = useState(false)

    const square = useMemo(()=>{
        console.log("Memo is called");
        return count * count;
    },[count])
  return (
   <Container className='py-4'>
    <Row>
        <Col xs={12}>
            <h5>Use Memo Example</h5>
            <h4>count : {count}</h4>
            <h4>Square value is : {square}</h4>
            <p> Show Status : {isActive ? "Active" : "InActive"}</p>
            <button className='btn btn-primary btn-mb me-2' onClick={()=>setCount(count+1)}>Increment</button>
            <button className='btn btn-danger btn-md' onClick={()=>setisActive(!isActive)}>Toggle Status</button>
        </Col>
    </Row>
   </Container>
  )
}

export default Memoexample