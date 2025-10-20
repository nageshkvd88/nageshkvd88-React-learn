import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import UserefExample from '../userefexamples/example'
import UserefExamples from '../userefexamples/example2'

const Home = () => {
  return (
  <>
    <Header />
    <Banner />
    {/* <UserefExample /> */}
    <UserefExamples />
  </>
  )
}

export default Home