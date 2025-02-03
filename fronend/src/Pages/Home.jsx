import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Featured from '../components/Featured'
import Video from '../components/Video'
const Home = () => {
  return (
    <>
    <Layout>
      <Hero></Hero>
      <Featured></Featured>
      <Video></Video>
      </Layout>
    </>
  )
}

export default Home
