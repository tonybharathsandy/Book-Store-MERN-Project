import React from 'react'
import Banner from '../Home/Banner'
import TopSellers from './TopSellers'
import Recommended from './Recommended'
import News from './News'

function Home() {
  return (
    <>
    <Banner />
    <TopSellers />
    <Recommended/>
    <News/>
    </>
  )
}

export default Home