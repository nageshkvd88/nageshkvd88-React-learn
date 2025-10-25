import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import UserefExample from '../userefexamples/example'
import UserefExamples from '../userefexamples/example2'
import Memoexample from '../hooks/usememoExample/memoexample'
import UserefExamp from '../userefexamples/example3'
const Home = () => {
  return (
  <>
    <Header />
    <Banner />
     {/* <UserefExample /> 
    <UserefExamples /> */}
    {/* <Memoexample /> */}
    <UserefExamp />
  </>
  )
}

export default Home