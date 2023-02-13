import React from 'react'
import Hero from '../Hero/Hero'
import Lists from '../Lists/Lists';

const Home = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
      <Hero />
      <Lists />
    </div>
  )
}

export default Home