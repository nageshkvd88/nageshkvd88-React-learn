import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import UserefExample from '../hooks/userefexamples/example'
import UserefExamples from '../hooks/userefexamples/example2'
import Memoexample from '../hooks/usememoExample/memoexample'
import UserefExamp from '../hooks/userefexamples/example3'
import ReducerExample from '../hooks/useReducer/reducerExample'
import LayoutEffectexample from '../hooks/useLayoutEffect/layoutEffectexample'
const Home = () => {
  return (
  <>
    <Header />
    <Banner />
     {/* <UserefExample /> 
    <UserefExamples /> */}
    {/* <Memoexample /> */}
    {/* <UserefExamp /> */}
   {/* <ReducerExample /> */}
   <LayoutEffectexample />
  </>
  )
}

export default Home