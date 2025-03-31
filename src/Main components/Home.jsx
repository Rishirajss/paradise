import React from 'react'
import Herosection from '../Home components/Herosection'
import Header from '../comman/Header'
import Discover from '../Home components/Discover'
import Map from '../Home components/Map'
export default function Home() {
  return (
    <>
       <Header /> 
      <Herosection />
      <Discover />
      <Map />
    </>
  )
}
