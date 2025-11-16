import React, { useReducer } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
//import { type } from '@testing-library/user-event/dist/type';

const reducer = (state, action) => {
    switch(action.type){
        case 'INCREMENT':
            return {...state, count: state.count + 1};
        case 'DECREMENT':
            return {...state, count: state.count - 1};
        case 'RESET':
            return {...state, count: 0};
        case 'DISPLAY':
            return {...state, display: !state.display};
        default:
            return {state};
    }
}
const ReducerExample = () => {

    const [state, dispatch] = useReducer(reducer, {count:0, display:true});
   
  return (
    <Container className='py-4'>
    <Row>
        <Col xs={4}>
           <button className='btn btn-warning btn-md' onClick={()=>dispatch({type:"DISPLAY"})}> Show/Hide</button>
        </Col>
    </Row>
    {state.display && (
       <>
        <Row>
        <Col xs={12} className='my-3'>
        <h5>Count : {state.count}</h5>
        </Col>
         <Row >
        <Col xs={12}>
          <button className='btn btn-primary btn-md' onClick={() =>dispatch({type:"DECREMENT"})}>Decrement</button>
          <button className='btn btn-danger btn-md mx-3' onClick={()=>dispatch({type:"RESET"})}>Reset</button>
          <button className='btn btn-success btn-md' onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
        </Col>
    </Row>
    </Row>
    </>
    )}
    </Container>
  )
}

export default ReducerExample